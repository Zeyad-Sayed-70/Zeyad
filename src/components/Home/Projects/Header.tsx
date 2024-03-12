import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FilterData } from "./Projects";

function Header({
  filterData,
  setFilterData,
  filterProjects,
}: {
  filterData: FilterData;
  setFilterData: (filterData: FilterData) => void;
  filterProjects: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="flex flex-col md:flex-row text-center gap-6 items-center md:items-end justify-between">
      <h1 className="text-3xl font-bold text-main">My Projects</h1>
      <form className="flex items-center space-x-2" onSubmit={filterProjects}>
        <Input
          type="text"
          name="search"
          placeholder="Search by Title, Tags"
          className="max-w-[400px] w-full text-lg"
          value={filterData.tot as string}
          onChange={(e) =>
            setFilterData({ ...filterData, tot: e.target.value })
          }
        />
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
}
export default Header;
