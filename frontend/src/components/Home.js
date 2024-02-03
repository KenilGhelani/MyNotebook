import React from "react";
import Notes from "./Notes";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div>
      {/* <AddNotes/> */}
      <Notes showAlert={props.showAlert} />
      <Footer />
    </div>
  );
};

export default Home;
