import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Hobbies from "./component/Hobbies";
import Education from "./component/Education";
import Reward from "./component/Reward";
import Contribution from "./component/Contribution";
import Footer from "./component/Footer";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <div className="content-wrapper">
          <About />
          <Hobbies />
          <Education />
          <Reward />
          <Contribution />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
