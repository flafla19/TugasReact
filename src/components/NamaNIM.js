import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NamaNIM = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const [name, setName] = useState(profile.name);
  const [nim, setNim] = useState(profile.nim);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    dispatch({ type: 'SET_PROFILE', payload: { ...profile, name: newName } });
  };

  const handleNimChange = (event) => {
    const newNim = event.target.value;
    setNim(newNim);
    dispatch({ type: 'SET_PROFILE', payload: { ...profile, nim: newNim } });
  };

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>{nim}</p>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={handleNameChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="NIM"
          value={nim}
          onChange={handleNimChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default NamaNIM;
