import React from "react";

import SideBar from "../../components/SideBar";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <>
      <SideBar page="dashboard" />

      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};

export default Dashboard;
