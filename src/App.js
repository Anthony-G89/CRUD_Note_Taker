import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import LandingPage from "./components/LandingPage";
import Notes from "./components/Notes";
import DeleteModal from "./components/DeleteModal";




function App() {

  const [showModal, setShowModal] = useState(false);

  const btnToDeleteBtn = (data) => {
    setShowModal(true)
    // console.log("from app");
  };

  return (
    <div >
      <Router>
        <Jumbotron />
        <Switch>
          < Route exact path="/" component={LandingPage} />
          < Route path="/notes"
            component={Notes}
            btnToDeleteBtn={btnToDeleteBtn}
          />
        </Switch>
          <Route component={DeleteModal}
            openModal={showModal}
          />
      </Router>
    </div>
  );
}

export default App;
