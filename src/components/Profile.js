import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const profile = useSelector(state => state.profile);

  return (
    <div className="text-center">
      <h2>Profile Page</h2>
      <p>Nama: {profile.name}</p>
      <p>NIM: {profile.nim}</p>
    </div>
  );
};

export default Profile;
