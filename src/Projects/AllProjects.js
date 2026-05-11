import React from "react";
import Background from "../Components/Background";
import AllNavbar from "../Components/Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "./Footer";

function AllProjects() {
  return (
    <div>
      <Background />
      <AllNavbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default AllProjects;
