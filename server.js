const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
app.get('/api/info', (req, res) => {
  res.json({
    university: 'Deakin University',
    course: 'SIT 753: Professional Practice in Information Technology',
    task: '8.1C Continuous Integration and Deployment with Jenkins and GitHub',
    part: 'Part 1: Task 1 - GitHub Integration',
    description: 'This website demonstrates GitHub integration for CI/CD pipeline setup.',
    technologies: ['React', 'Node.js', 'Express', 'GitHub', 'Jenkins'],
    status: 'In Progress'
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
