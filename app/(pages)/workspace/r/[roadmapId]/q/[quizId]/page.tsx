"use client";
import { Lesson, RoadmapSidebar } from "@/app/modules";
import { fetchRoadmap } from "@/app/shared/api/roadmaps/fetchRoadmapById";
import { useQuery } from "@tanstack/react-query";
export type LessonPageParams = {
  params: {
    roadmapId: string;
    quizId: string;
  };
};
//TODO - I have to think of a navigation between lesson and quiz.
function LessonPage({ params }: LessonPageParams) {
  const { quizId, roadmapId } = params;
  try {
    function handleResize() {
      let vh = window && window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window && window.addEventListener("resize", handleResize);
  } catch {}
  const query = useQuery({
    queryKey: ["roadmap", params.roadmapId],
    queryFn: () => fetchRoadmap(params.roadmapId),
  });
  return (
    <div
      className={`select-none overflow-x-hidden overflow-auto full-height w-full h-full flex flex-row overflow-y-auto  mx-auto box-border`}
    >
      <RoadmapSidebar query={query} id={params.quizId} />
      <Lesson params={{ id: quizId, roadmapId }} />
    </div>
  );
}

export default LessonPage;
