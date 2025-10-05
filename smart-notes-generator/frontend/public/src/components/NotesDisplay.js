function NotesDisplay({ notes }) {
  return (
    <div className="notes-box">
      <h2>📘 Generated Notes</h2>
      <p>{notes}</p>
    </div>
  );
}

export default NotesDisplay;
