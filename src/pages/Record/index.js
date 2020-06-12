import React from "react";

import SideBar from "../../components/SideBar";
import { Container } from "./styles";

const Record = () => {
  return (
    <>
      <SideBar page="record" />

      <Container>
        <h1>Registros</h1>
      </Container>
    </>
  );
};

export default Record;
