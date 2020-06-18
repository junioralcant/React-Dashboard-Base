import React, { useState, useEffect } from "react";
import {
  FiCamera,
  FiGrid,
  FiCodesandbox,
  FiAlignJustify,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { SideNav, Button, Background, Close } from "./styles";

const SideBar = ({ page }) => {
  const [pageName, setPageName] = useState("dashboard");
  const [sidebarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    setPageName(page);
  }, [page]);

  function activeSidebar() {
    setSideBarActive(!sidebarActive);
  }

  return (
    <>
      <Button teste={sidebarActive ? "" : "teste"} onClick={activeSidebar}>
        <FiAlignJustify />
      </Button>
      <SideNav teste={sidebarActive ? "teste" : ""}>
        <strong>
          <span>
            <FiGrid />
          </span>

          <p>Dashboard</p>
        </strong>

        <div>
          <small>Menu</small>
        </div>

        <Link to="/" className={pageName === "dashboard" ? "active" : ""}>
          <span>
            <FiGrid />
          </span>
          <p>Dashboard</p>
        </Link>

        <Link to="/record" className={pageName === "record" ? "active" : ""}>
          <span>
            <FiCamera />
          </span>
          <p>Registros</p>
        </Link>

        <Link to="/draw" className={pageName === "draw" ? "active" : ""}>
          <span>
            <FiCodesandbox />
          </span>
          <p>Sorteio</p>
        </Link>
      </SideNav>
      <Background teste={sidebarActive ? "teste" : ""}>
        <Close onClick={activeSidebar}>
          <FiX />
        </Close>
      </Background>
    </>
  );
};

export default SideBar;
