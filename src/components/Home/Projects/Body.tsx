import React from "react";
import ProjectCard from "./ProjectCard";
import { Product } from "@/constants/projects";

function Body({ projects }: { projects: Product[] }) {
  if (projects.length === 0)
    return (
      <h2 className="text-xl text-gray-500 font-bold text-center mx-auto py-12">
        Not Found Projects
      </h2>
    );
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-x-2 md:gap-y-4 lg:gap-4 xl:gap-8 py-12">
      {projects.map((product) => (
        <ProjectCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Body;
