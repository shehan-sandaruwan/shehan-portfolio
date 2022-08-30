import React, { useState, useEffect } from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
import SkillsAndEducation from "../Component/SkillsAndEducation";

const Skills = () => {
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive("skills");

    return () => {
      setIsActive("");
    };
  }, []);
  return (
    <React.Fragment>
      <DefaultLayout isActive={isActive}>
        <SkillsAndEducation />
      </DefaultLayout>
    </React.Fragment>
  );
};

export default Skills;
