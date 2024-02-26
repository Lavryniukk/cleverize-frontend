import { fetchRoadmap } from "@/app/entities/roadmap-node/api";
import RoadmapNodeComponent from "./components/RoadmapNode";

export default async function Roadmap({ id }: { id: string }) {
  try {
    const roadmap = await fetchRoadmap(id);
    return (
      <div className="w-fit mx-auto pt-32 pb-48">
        <ul className="text-text mx-auto  w-fit h-fit flex items-center justify-center flex-col">
          {roadmap.children.map((node) => (
            <RoadmapNodeComponent key={roadmap._id} node={node} />
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="mx-auto text-center text-text mt-20 text-3xl">
        Roadmap not found
      </div>
    );
  }
}
