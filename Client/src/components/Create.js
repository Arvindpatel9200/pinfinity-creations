import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [board, setBoard] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [saving, setSaving] = useState(false);
  const [boards, setBoards] = useState([])

  useEffect(() => {
    axios.get('/api/boards')
     .then(response => {
        setBoards(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleBoardChange = (e) => {
    setBoard(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTagChange = (e) => {
    setTags(e.target.value.split(','));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('board', board);
    formData.append('image', image);
    formData.append('tags', tags);
    axios.post('/api/create-pin', formData)
     .then(response => {
        setSaving(false);
        console.log(response.data);
      })
     .catch(error => {
        setSaving(false);
        console.error(error);
      });
  };

  return (
    <div className="create-pin">
      <h1>Create a Pin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Link:
          <input type="text" value={link} onChange={handleLinkChange} />
        </label>
        <label>
          Board:
          <select value={board} onChange={handleBoardChange}>
            {boards.map(board => (
              <option key={board._id} value={board._id}>
                {board.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <label>
          Tags:
          <input type="text" value={tags.join(',')} onChange={handleTagChange} />
        </label>
        <button type="submit" disabled={saving}>
          {saving? 'Saving...' : 'Create Pin'}
        </button>
      </form>
    </div>
  );
};

export default Create;