import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/fetchConversationData";
import Conversation, {
  ConversationMessage,
} from "@/app/shared/entities/Conversation";
import listenForUpdates from "../helpers/listenToEvent";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
import toggleIsCompleted from "@/app/shared/api/roadmaps/toggleIsCompleted";
import getToken from "../api/getToken";
import fetchConversationInit from "../api/fetchConversationInit";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | undefined;
  isLocked: boolean;
  isStreaming: boolean;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => void;
  setConversation: (newConversationId: string) => void;
  initConversation: (
    user_roadmap_id: string | undefined,
    language: string | undefined
  ) => void;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  toggleIsCompleted: (roadmapId: string, tech_title: string) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useConversationStorage = create<
  ConversationStorageActions & ConversationStorageState
>((set, get) => ({
  conversation: undefined,
  async setConversation(newConversationId) {
    const newConversation = await getConversationData(newConversationId);
    set({
      conversation: newConversation,
    });
  },
  userInputData: "",

  async toggleIsCompleted(roadmapId, tech_title) {
    await toggleIsCompleted(roadmapId, tech_title);
    get().lock();
  },

  isLocked: true,
  lock() {
    set({
      isLocked: true,
    });
  },
  unlock() {
    set({
      isLocked: false,
    });
  },

  isStreaming: false,
  setStreaming(value) {
    set({ isStreaming: value });
  },

  assistantData: "",

  setInputData: (newInputData) => set({ userInputData: newInputData }),

  async addUserMessage(roadmapId) {
    let conversation = get().conversation as Conversation;
    const message = get().userInputData;

    conversation.messages.push({
      role: "user",
      content: message,
    });
    set({
      conversation: conversation,
    });
    const token = await getToken();

    listenToSse(
      conversation._id,
      token,
      get().updateLastAssistantMessage,
      get().lock,
      () => {}
    );

    await sendUserMessage(message, conversation._id, roadmapId);
    set({ userInputData: "" });
  },

  updateLastAssistantMessage(newValue) {
    const newConversation = get().conversation;

    const lastMessage = newConversation?.messages?.pop();
    if (lastMessage?.role === "assistant") {
      newConversation?.messages.push({
        role: "assistant",
        content: newValue,
      });
    } else {
      newConversation?.messages.push(lastMessage as ConversationMessage);
      newConversation?.messages.push({
        role: "assistant",
        content: newValue,
      });
      set({ conversation: newConversation });
    }
  },

  initConversation: async (userRoadmapId, language) => {
    let newConversation = get().conversation as Conversation;
    const conversationId = newConversation._id;
    newConversation.messages.push({
      role: "assistant",
      content: "Loading...",
    });
    set({
      conversation: newConversation,
    });

    const accessToken = await getToken();
    listenForUpdates(
      conversationId,
      accessToken,
      get().updateLastAssistantMessage,
      () => {
        get().lock;
        set({ isStreaming: true });
      },
      () => {
        set({ isStreaming: false });
      }
    );

    await fetchConversationInit({
      conversationId,
      userRoadmapId,
      language,
    });
  },
}));

export default useConversationStorage;
