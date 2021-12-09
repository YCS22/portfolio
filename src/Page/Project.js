import React from 'react';
import ProjectInstance from '../cards/Projects';

export default function Project() {
  return (
    <div className="flex flex-col sm:flex-row bg-primary-turquoise justify-around items-center   h-screen">
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
    </div>
  );
}
