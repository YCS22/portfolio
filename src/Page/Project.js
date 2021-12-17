import React from 'react';
import ProjectInstance from '../cards/Projects';

export default function Project() {
  return (
    <div className="flex flex-col  bg-primary-turquoise justify-center space-y-4 items-center   h-screen">
      <p className="text-2xl font-bold  text-primary-white animate-bounce">
        PROJECTS
      </p>

      <div className="flex flex-col  h-3/4 space-y-3 w-full overflow-y-scroll items-center">
        <ProjectInstance
          name={'Location App'}
          link="https://github.com/YCS22/javamobilkonumuygulama"
        />

        <ProjectInstance
          name={'Portfolio'}
          link="https://github.com/YCS22/portfolio"
        />

        <ProjectInstance
          name={'AWS Lambda'}
          link="https://github.com/YCS22/lambda"
        />

        <ProjectInstance
          name={'RN Fitness App'}
          link="https://github.com/YCS22/ycsfitness"
        />
      </div>
    </div>
  );
}
