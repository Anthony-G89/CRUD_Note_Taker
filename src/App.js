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
  const [showEditModal, setShowEditModal] = useState(false);


  // Array to hold title and note body
  const [editingNote, setEditingNote] = useState({});



  // This function will open a Modal for when user wants to delete a note
  // const btnToDeleteBtn = () => {
  //   setShowModal(true);
  // };

  // Receiving array from Note/index.js and also openning edit modal
  // const editModalOpener = (note) => {
  //   // console.log(note)
  //   setEditingNote(note)
  //   setShowEditModal(true);
  // };

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
              <Notes
              // {...props} btnToDeleteBtn={btnToDeleteBtn}
                // editOpener={editModalOpener}
              //   editNoteHandler={editModalOpener}
              />
            )}
          />
        </Switch>

        {
          showEditModal &&
          <EditModal
            closeEditModal={closeEditModal}
            note={editingNote}
          />
        }

        < DeleteModal
          openModal={showModal}
          closeModal={closeModal}
        />
      </Router>

    </div>
  );
}

export default App;
