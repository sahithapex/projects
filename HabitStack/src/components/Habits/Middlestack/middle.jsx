import React, { useState } from 'react';
import './middle.css';

const Main = () => {
  const [status, setStatus] = useState('');

  return (
    <div className="container">
      <h1>Review Habit Stack</h1>
      <div className="radio-group">
        <label className={`radio-box ${status === 'completed' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="status"
            value="completed"
            onChange={() => setStatus('completed')}
          />
          Completed
        </label>
        <label className={`radio-box ${status === 'incomplete' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="status"
            value="incomplete"
            onChange={() => setStatus('incomplete')}
          />
          Incomplete
        </label>
      </div>
    </div>
  );
};

export default Main;
