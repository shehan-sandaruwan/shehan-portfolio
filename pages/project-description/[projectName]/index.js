import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import YellowHeart from "../../../Component/YellowHeart";

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
      {projectName === "yellowHeart" ? <YellowHeart /> : <></>}
    </React.Fragment>
  );
};

export default ProjectRenderer;
