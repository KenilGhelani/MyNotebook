import React, { useEffect } from "react";
import Notes from "./Notes";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0,0);
    }
  , [location])
  return (
    <div style={{ position: "relative", top: "60px"}}>
      {/* <AddNotes/> */}
      <Notes showAlert={props.showAlert} />
      <Footer />
    </div>
  );
};

export default Home;
