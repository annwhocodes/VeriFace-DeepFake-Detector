import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={user.profilePicture} alt="Profile" className="profile-image" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="profile-actions">
          <button className="edit-button">Edit Profile</button>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
