import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    // eslint-disable-next-line
 const host= "http://localhost:5000"
    const notesInitial = [
        {
          "_id": "61322f19553781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61323f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61324f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61325f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61326f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61327f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
      ]
      // eslint-disable-next-line
      const [notes, setNotes] = useState(notesInitial)

  // Add a Note
  const addNote = async(title, description, tag)=>{
    // TODO: API Call
      // API Call 
          // eslint-disable-next-line
    //   const response = await fetch(`${host}/api/notes/addnote`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
    //     },
    //     body: JSON.stringify({title, description, tag})
    //   });
    // //   const json = response.json();

    console.log("Adding a new note")
    const note = {
      "_id": "61323f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note)) 
  }

  // Delete a Note
  const deleteNote = (id)=>{
          // TODO: API Call
          console.log("Deleting the note with id" + id);
          const newNotes = notes.filter((note)=>{return note._id!==id})
          setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
        // eslint-disable-next-line
    // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
    //   },
    //   body: JSON.stringify({title, description, tag})
    // });
    // // eslint-disable-next-line
    // const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
}

    return (
   
        <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;