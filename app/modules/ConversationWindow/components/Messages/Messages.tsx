import { Conversation } from "@/app/shared/entities";
import Message from "./components/Message";
export default function Messages({
  conversation,
}: {
  conversation: Conversation | undefined;
}) {
  const messages = conversation && conversation.messages;
  // if (conversation) {
  //   throw new Error("Conversation cannot be undefined");
  // }
  return (
    <div
      role="presentation"
      className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
    >
      {messages?.map((message, index) => {
        return (
          <Message content={message.content} role={message.role} key={index} />
        );
      })}
    </div>
  );
}
