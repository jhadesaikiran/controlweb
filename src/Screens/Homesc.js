import React from "react";
import Head from "../Screencomp/Header";
//import Font from "../Screencomp/Foot";

import Section from "../Screencomp/Homecomp/Section";
import "../css/Header.css";
import Working from "../Screencomp/Homecomp/Working";

const f = {
  fontSize: "25px",
  color: "white",
  padding: "12px",
  paddingLeft: "4%",
  fontWeight: "700",
};

function Foot() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        marginTop: "auto",
        marginBottom: 0,
      }}
    >
      <h1 style={f} className="">
        Priority Pulse
      </h1>
    </div>
  );
}

function Home() {
  return (
    <div className="my-0">
      <Head title="homeNav" link="home" brand="hombr" btn="1"></Head>
      <Section></Section>
      <Working />
      <Foot />
    </div>
  );
}

export default Home;
