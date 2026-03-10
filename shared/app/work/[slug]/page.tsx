"use client";

import { useParams } from "next/navigation";
import { workProjects } from "@/data/workData";
import WorkDetail from "@/components/WorkDetail";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const project = workProjects.find((item) => item.slug === slug);

  if (!project) {
    return <div className="p-20 text-[#191919]">Project not found</div>;
  }

  return <WorkDetail project={project} />;
}
