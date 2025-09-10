# SIT 753 - Jenkins Integration Project

## Project Overview

This project is part of **SIT 753: Professional Practice in Information Technology** at Deakin University. It demonstrates **Task 8.1C: Continuous Integration and Deployment with Jenkins and GitHub**, specifically focusing on **Part 1: Task 1 - GitHub Integration**.

## Project Structure

```
sit753-jenkins-integration/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server.js              # Node.js/Express backend
├── package.json           # Root package.json
├── .gitignore
└── README.md
```

## Technologies Used

- **Frontend**: React 18, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Version Control**: Git, GitHub
- **CI/CD**: Jenkins (planned)
- **Deployment**: Heroku/AWS ready

## Features

- Modern, responsive React frontend
- RESTful API with Express backend
- GitHub integration ready
- Jenkins CI/CD pipeline compatible
- Professional styling with gradient backgrounds
- API testing interface
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sit753-jenkins-integration
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the React frontend** (in a new terminal)
   ```bash
   cd client
   npm start
   ```
   The frontend will run on `http://localhost:3000`

#### Production Mode

1. **Build the React app**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/info` - Returns project information and course details

## GitHub Integration

This project is designed for GitHub integration and includes:

- Proper `.gitignore` configuration
- Git repository structure
- Jenkins-compatible build scripts
- Environment variable support
- Production-ready configuration

## Jenkins CI/CD Pipeline

The project is structured to support Jenkins integration with:

- Automated testing capabilities
- Build and deployment scripts
- Environment-specific configurations
- Error handling and logging

## Course Information

- **University**: Deakin University
- **Course**: SIT 753 - Professional Practice in Information Technology
- **Task**: 8.1C - Continuous Integration and Deployment with Jenkins and GitHub
- **Part**: Part 1: Task 1 - GitHub Integration

## Contributing

This is an academic project for learning purposes. For questions or issues, please refer to the course materials or contact the instructor.

## License

This project is created for educational purposes as part of SIT 753 coursework at Deakin University.

## Author

Daniel Dang - s225757776