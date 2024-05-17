import './profile.css';
import React from 'react';
import followers from '../../assets/followers.png';

const Profile = ({ user }) => {
  return (
    <div className='profileConainer'>
      <img src={user.avatar_url} alt={user.name} id='userPic' />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className='followers'>
      <img src={followers} alt={"No data found"} id='followesLogo' />
      <p>{user.followers} followers | {user.following} following</p>
      </div>
      <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
    </div>
  );
};

export default Profile;
