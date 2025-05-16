/*==================================================
HomePageView.js

Enhanced homepage with banner image and welcome message.
==================================================*/
import React from 'react';

const HomePageView = () => {
  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#fefef0',
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#11153e',
        marginBottom: '30px'
      }}>
        Welcome to the Campus Management System
      </h1>

      <img
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
        alt="Campus"
        style={{
          width: '80%',
          maxWidth: '900px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
      />

      <p style={{
        fontSize: '20px',
        marginTop: '30px',
        color: '#333'
      }}>
        Organize your colleges, manage your students, and keep everything in sync — all in one place.
      </p>
    </div>
  );
};

export default HomePageView;
