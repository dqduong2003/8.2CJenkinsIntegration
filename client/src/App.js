import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApiData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/info');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData({ error: 'Failed to fetch data from API' });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Deakin University</h1>
        <h2>SIT 753: Professional Practice in Information Technology</h2>
      </header>

      <div className="card">
        <h3>Task 8.1C - Continuous Integration and Deployment</h3>
        <div className="info-grid">
          <div className="info-item">
            <h4>Assignment Details</h4>
            <p><strong>Task:</strong> 8.1C Continuous Integration and Deployment with Jenkins and GitHub</p>
            <p><strong>Part:</strong> Part 1: Task 1 - GitHub Integration</p>
            <p><strong>Description:</strong> This website demonstrates GitHub integration for CI/CD pipeline setup.</p>
          </div>
          
          <div className="info-item">
            <h4>Course Information</h4>
            <p><strong>University:</strong> Deakin University</p>
            <p><strong>Course Code:</strong> SIT 753</p>
            <p><strong>Course Name:</strong> Professional Practice in Information Technology</p>
          </div>
          
          <div className="info-item">
            <h4>Technologies Used</h4>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">GitHub</span>
            </div>
          </div>
          
          <div className="info-item">
            <h4>Project Status</h4>
            <p>This is a demonstration website for learning CI/CD concepts with Jenkins and GitHub integration.</p>
            <span className="status">In Testing</span>
          </div>
        </div>

        <div className="api-section">
          <h4>API Integration Test</h4>
          <p>Click the button below to test the backend API integration:</p>
          <button 
            className="api-button" 
            onClick={fetchApiData}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Fetch API Data'}
          </button>
          
          {apiData && (
            <div className="api-response">
              {JSON.stringify(apiData, null, 2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
