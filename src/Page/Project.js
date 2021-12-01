import React from "react";
import ProjectInstance from "../cards/Projects";

export default function Project() {
  return (
    <div className="flex flex-col sm:flex-row bg-primary-turquoise justify-around items-center   h-screen">
      <ProjectInstance name={"mobil konum uygulaması"} />

      <ProjectInstance name={"portfolio"} />
    </div>
  );
}
