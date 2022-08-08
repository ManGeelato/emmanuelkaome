import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoImage from "../public/assets/projects/cryptoC.PNG";
import carsImage from "../public/assets/projects/cars.PNG";
import loanImage from "../public/assets/projects/loan.PNG";
import seventhImage from "../public/assets/projects/7thseal.PNG";
import locosImage from "../public/assets/projects/restaurant.PNG";
import movieImage from "../public/assets/projects/movies.PNG";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#0F07D2]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="U-Crypto Currency"
            backgroundImg={cryptoImage}
            projectUrl="/ucrypto"
          />
           <ProjectItem
            title="Car Management"
            backgroundImg={carsImage}
            projectUrl="/cars"
          />
           <ProjectItem
            title="7th Seal Electrical"
            backgroundImg={seventhImage}
            projectUrl="/seventhSeal"
          />
           <ProjectItem
            title="Cash Float Finance"
            backgroundImg={loanImage}
            projectUrl="/loan"
          />
           <ProjectItem
            title="Locos Pollos"
            backgroundImg={locosImage}
            projectUrl="/restaurant"
          />
          <ProjectItem
            title="MoviePro"
            backgroundImg={movieImage}
            projectUrl="/movie"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
