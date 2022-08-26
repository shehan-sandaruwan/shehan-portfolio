import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../Component/Navbar";
import MyProjects from "../Component/MyProjects";

const Projects = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    setIsActive("projects");

    return () => {
      setIsActive("");
    };
  }, []);
  return (
    <React.Fragment>
      <NavBar isActive={isActive} />
      <MyProjects />
    </React.Fragment>
  );
};

export default Projects;
