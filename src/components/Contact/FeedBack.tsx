import React from "react";
import H1 from "../Common/H1";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function FeedBack() {
  return (
    <div>
      <H1>Give Me A FeedBack💖</H1>
      <Textarea
        className="max-w-full  md:w-[450px] h-40 mt-4 mb-2"
        placeholder="Type your feedback here."
      />
      <Button>Send</Button>
    </div>
  );
}

export default FeedBack;
