import React from "react";
import AllQuestions from "@/components/shared/AllQuestions";

const Home = () => {
  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">Top Questions</h1>
      <AllQuestions />
    </section>
  );
};

export default Home;
