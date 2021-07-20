import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import LandingPage from "./components/LandingPage";
import Notes from "./components/Notes";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/Edit";




function App() {

  const [showModal, setShowModal] = useState(false);

  // Show Edit Modal
  const [showEditModal , setShowEditModal] = useState(false);



  // This function will open a Modal for when user wants to delete a note
  const btnToDeleteBtn = () => {
    setShowModal(true);
  };

const editModalOpenner = () => {
  setShowEditModal(true);
};

  // Close Delete Modal
  const closeModal = () => {
    setShowModal(false)
  };

  const closeEditModal = () => {
    setShowEditModal(false)
  };






  return (
    <div >
      <Router>
        <Jumbotron />
        <Switch>
          < Route exact path="/" component={LandingPage} />
          < Route path="/notes"
            render={(props) => (
              <Notes {...props} btnToDeleteBtn={btnToDeleteBtn}
              editOpenner={editModalOpenner} />
            )}
          />
        </Switch>
        <EditModal
          closeEditModal={closeEditModal}
          openEditModal={showEditModal}
        />
        < DeleteModal
          openModal={showModal}
          closeModal={closeModal}
        />
      </Router>

    </div>
  );
}

export default App;
