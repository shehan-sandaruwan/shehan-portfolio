import React, { useEffect, useState } from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
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
      <DefaultLayout isActive={isActive}>
        <MyProjects />
      </DefaultLayout>
    </React.Fragment>
  );
};

export default Projects;
