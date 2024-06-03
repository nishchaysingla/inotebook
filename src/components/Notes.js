import React, { useContext, useEffect, useRef , useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const ref = useRef(null)
    const refClose = useRef(null)
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({id:"" , etitle: "", edescription: "", etag: ""})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleClick = (e)=>{
        console.log("Updating the note", note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        
        e.preventDefault();
        // addNote(note.title, note.description, note.tag);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
        <>
            <AddNote />

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container my-3">
                                <h2>Add a Note</h2>
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle"  value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>

                {notes.map((note) => {

                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>

        </>
    )
}

export default Notes