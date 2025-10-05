import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import NotesDisplay from './components/NotesDisplay';

function App() {
  const [notes, setNotes] = useState("");

  return (
    <div className="App">
      <h1>🧠 Smart Notes Generator</h1>
      <FileUpload setNotes={setNotes} />
      {notes && <NotesDisplay notes={notes} />}
    </div>
  );
}

export default App;
