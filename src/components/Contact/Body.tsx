import React from "react";
import Container from "../Common/Container";
import MyLinks from "./MyLinks";
import FeedBack from "./FeedBack";
import Thoughts from "./Thoughts";

function Body() {
  return (
    <Container>
      <article className="flex flex-col xl:flex-row gap-4 py-12">
        <section className="flex-1 flex flex-col gap-20 items-center xl:items-start">
          <MyLinks />
          <FeedBack />
        </section>
        <section className="flex-1">
          <Thoughts />
        </section>
      </article>
    </Container>
  );
}

export default Body;
