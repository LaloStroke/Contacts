import React from "react";

const Layout: React.FC<{ children: JSX.Element[] }> = ({
  children
}): JSX.Element => {
  return <main className="layout darkMode">{children}</main>;
};

export default Layout;
