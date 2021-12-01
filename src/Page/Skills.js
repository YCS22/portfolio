import React from "react";
import { SkillBars } from "react-skills";

export default function Skills() {
  const skillsData = [
    {
      name: "ReactJS",
      level: 95,
      color: "blue",
    },
    {
      name: "AWS",
      level: 95,
      color: "orange",
    },
    {
      name: "NodeJS",
      level: 95,
      color: "red",
    },
    {
      name: "NextJS",
      level: 90,
      color: "green",
    },
    {
      name: "GraphQL",
      level: 95,
      color: "orange",
    },
    {
      name: "PostgresQL",
      level: 95,
      color: "blue",
    },
    {
      name: "React Native",
      level: 85,
      color: "grey",
    },
  ];

  return (
    <div className="flex flex-col bg-primary-whiteblue   justify-center items-center h-screen ">
      <p className="text-2xl font-bold mt-20  sm:mt-0 text-primary-asbestos animate-bounce">
        SKİLLS
      </p>
      <div className="w-3/4 p-2">
        <SkillBars skills={skillsData} />
      </div>
    </div>
  );
}
