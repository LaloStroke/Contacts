import React from "react";
import Contact from "../Contact";
import contactListStyles from "./contactList.module.css";

const ContactList: React.FC = (): JSX.Element => {
  return (
    <>
      <div>ContactList</div>
      <div className={contactListStyles.contactList}>
        <div>
          <Contact />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactList;
