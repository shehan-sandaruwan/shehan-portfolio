import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import YellowHeart from "../../../Component/YellowHeart";
import FancyMantis from "../../../Component/FancyMantis";
import Pro11Chart from "../../../Component/Pro11Chart";
import AxsessProject from "../../../Component/AxsessProject";

const ProjectRenderer = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    if (router?.query?.projectName) {
      setProjectName(router.query.projectName);
    }
  }, [router?.query, router.asPath]);

  return (
    <React.Fragment>
      {projectName === "yellowHeart" && <YellowHeart />}
      {projectName === "fancyMantis" && <FancyMantis />}
      {projectName === "pro11Chart" && <Pro11Chart />}
      {projectName === "axsess" && <AxsessProject />}
    </React.Fragment>
  );
};

export default ProjectRenderer;
