import React, { useState } from "react";
import { FiCamera, FiGrid, FiCodesandbox } from "react-icons/fi";
import { Link } from "react-router-dom";

import { SideNav } from "./styles";
import { useEffect } from "react";

const SideBar = ({ page }) => {
  const [pageName, setPageName] = useState("dashboard");

  useEffect(() => {
    setPageName(page);
  }, [page]);

  return (
    <SideNav>
      <strong>
        <span>
          <FiGrid />
        </span>
        Dashboard
      </strong>

      <div>
        <small>Menu</small>
      </div>

      <Link to="/" className={pageName === "dashboard" ? "active" : ""}>
        <span>
          <FiGrid />
        </span>
        Dashboard
      </Link>

      <Link to="/record" className={pageName === "record" ? "active" : ""}>
        <span>
          <FiCamera />
        </span>
        Registros
      </Link>

      <Link to="/draw" className={pageName === "draw" ? "active" : ""}>
        <span>
          <FiCodesandbox />
        </span>
        Sorteio
      </Link>
    </SideNav>
  );
};

export default SideBar;
