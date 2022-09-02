import React, { useEffect, useState } from "react";
import DefaultLayout from "../Component/Layout/DefaultLayout";
import MyContact from "../Component/MyContact";

const Contact = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    setIsActive("contact");

    return () => {
      setIsActive("");
    };
  }, []);
  return (
    <React.Fragment>
      <DefaultLayout isActive={isActive}>
        <MyContact />
      </DefaultLayout>
    </React.Fragment>
  );
};

export default Contact;
