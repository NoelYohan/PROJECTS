import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({ setNotes }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file!");
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('http://127.0.0.1:5000/upload', formData);
    setNotes(res.data.summary);
    setLoading(false);
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Generating..." : "Generate Notes"}
      </button>
    </div>
  );
}

export default FileUpload;
