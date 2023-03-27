import React from "react";
import { NextRouter, useRouter } from "next/router";
import optionStyles from "./option.module.css";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { IconContext } from "react-icons/lib";

const Option: React.FC = (): JSX.Element => {
  return (
    <IconContext.Provider value={{ size: "30" }}>
      <div className={optionStyles.options}>
        <CustomLink to="/">
          <AiFillHome fill="#7D7D7D" />
        </CustomLink>

        <CustomLink to="/create">
          <AiOutlinePlusCircle fill="#7D7D7D" />
        </CustomLink>

        <CustomLink to="/settings">
          <IoMdSettings fill="#7D7D7D" />
        </CustomLink>
      </div>
    </IconContext.Provider>
  );
};

const CustomLink: React.FC<{
  to: string;
  children: JSX.Element;
}> = ({ to, children }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Link
      href={to}
      className={`${optionStyles.option} ${
        router.asPath === to ? optionStyles.optionActive : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Option;
