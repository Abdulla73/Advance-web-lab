"use client"
import React, { useEffect, useState } from 'react';

const ProfilePage: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    // Fetch user email from session storage
    const userEmailFromStorage = sessionStorage.getItem('userEmail');
    if (userEmailFromStorage) {
      setUserEmail(userEmailFromStorage);
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User Email: {userEmail}</p>
    </div>
  );
};

export default ProfilePage;
