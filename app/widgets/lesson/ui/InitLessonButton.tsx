"use client";
import CreditCostBadge from "@/app/features/credit-cost-badge/CreditCostBadge";
import useLessonStorage from "@/app/widgets/lesson/storage/lesson-storage";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

type InitLessonButtonProps = {
  roadmapId: string;
};

export default function InitLessonButton({ roadmapId }: InitLessonButtonProps) {
  const initLesson = useLessonStorage((state) => state.initLesson);

  return (
    <div className="flex flex-col items-center justify-center absolute top-[45%] gap-2 ">
      <Button
        className="gap-2 flex"
        onClick={async () => {
          await initLesson(roadmapId);
        }}
        size="lg"
      >
        <Power strokeWidth={3} />
        <p>Start this lesson</p>
      </Button>
      <CreditCostBadge className="md:hidden" cost={2} />
    </div>
  );
}
