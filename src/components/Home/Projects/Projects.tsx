"use client";
import React, { useState } from "react";
import Container from "../../Common/Container";
import Body from "./Body";
import Header from "./Header";
import { projects_data } from "@/constants/projects";

export type FilterData = {
  tot: String; // Title or Tags
};

function Projects() {
  const [filterData, setFilterData] = useState<FilterData>({ tot: "" });
  const [projects, setProjects] = useState(projects_data);

  function filterProjects(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!filterData.tot) return setProjects(projects_data);

    const newProjects = projects_data.filter(
      (p) =>
        p.title
          .toLocaleLowerCase()
          .includes(filterData.tot.toLocaleLowerCase() as string) ||
        p.tags.some((tag) =>
          tag
            .toLocaleLowerCase()
            .includes(filterData.tot.toLocaleLowerCase() as string)
        )
    );
    setProjects(newProjects);
  }

  return (
    <Container>
      <main className="py-14">
        <Header
          filterData={filterData}
          setFilterData={setFilterData}
          filterProjects={filterProjects}
        />
        <Body projects={projects} />
      </main>
    </Container>
  );
}

export default Projects;
