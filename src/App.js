import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import LandingPage from "./components/LandingPage";
import Notes from "./components/Notes";
import DeleteModal from "./components/DeleteModal";




function App() {

  const [showModal, setShowModal] = useState(false);

  const btnToDeleteBtn = () => {
    setShowModal(true);
  };

  

  return (
    <div >
      <Router>
        <Jumbotron />
        <Switch>
          < Route exact path="/" component={LandingPage} />
          < Route path="/notes"
            render={(props) => (
              <Notes {...props} btnToDeleteBtn={btnToDeleteBtn} />
            )}
          />
        </Switch>
          < DeleteModal
        openModal={showModal}
      />
      </Router>
      
    </div>
  );
}

export default App;
