import React from 'react';
import { SkillBars } from 'react-skills';

export default function Skills() {
  const skillsData = [
    {
      name: 'ReactJS',
      level: 95,
      color: '#393E46',
    },
    {
      name: 'AWS',
      level: 95,
      color: '#00ADB5',
    },
    {
      name: 'NodeJS',
      level: 95,
      color: 'black',
    },
    {
      name: 'NextJS',
      level: 90,
      color: '#393E46',
    },
    {
      name: 'GraphQL',
      level: 95,
      color: '#00ADB5',
    },
    {
      name: 'PostgresQL',
      level: 95,
      color: 'black',
    },
    {
      name: 'React Native',
      level: 85,
      color: '#393E46',
    },
  ];

  return (
    <div className="flex flex-col bg-primary-whiteblue   justify-center items-center h-screen ">
      <p className="text-2xl font-bold  text-primary-sunflower animate-bounce">
        SKILLS
      </p>
      <div className="w-3/4 p-2 ">
        <SkillBars skills={skillsData} />
      </div>
    </div>
  );
}
