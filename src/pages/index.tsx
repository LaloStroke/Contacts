import { NextPage } from "next";
import React from "react";
import ContactList from "../components/ContactList";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <div>home</div>
      <ContactList />
    </div>
  );
};

export default Home;
