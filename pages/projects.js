import React from "react";
import Image from "next/image";
import NavBar from "../Component/Navbar";
import DefaultLayout from "../Component/Layout/DefaultLayout";
import MyProjects from "../Component/MyProjects";

const Projects = () => {
  return (
    <DefaultLayout>
      <MyProjects />
    </DefaultLayout>
  );
};

export default Projects;
