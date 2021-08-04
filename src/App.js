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
  const [showEdit, setShowEdit] = useState([]);



  // This function will open a Modal for when user wants to delete a note
  const btnToDeleteBtn = () => {
    setShowModal(true);
  };

  const editModalOpener = (noteList) => {
    console.log(noteList)
    setShowEdit([...noteList, noteList])
    setShowEditModal(true);
  };

  // Close Delete Modal
  const closeModal = () => {
    setShowModal(false)
  };

  const closeEditModal = () => {
    setShowEditModal(false)
  };

  // const addNotesHandler = (noteList) => {
  //   console.log(noteList)
  //   // const receivingNote = noteList;
  //   // setShowEdit([...noteList, noteList])
  // };






  return (
    <div >
      <Router>
        <Jumbotron />
        <Switch>
          < Route exact path="/" component={LandingPage} />
          < Route path="/notes"
            render={(props) => (
              <Notes {...props} btnToDeleteBtn={btnToDeleteBtn}
                editOpener={editModalOpener}
                editNotesHandler={editModalOpener} />
            )}
          />
        </Switch>

        <EditModal
          closeEditModal={closeEditModal}
          openEditModal={showEditModal}
        editNotesHandler={editModalOpener}
        editHandler={editModalOpener}
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
