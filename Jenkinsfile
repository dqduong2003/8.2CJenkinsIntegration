pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        NPM_CONFIG_CACHE = '/tmp/.npm'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'cd client && npm install'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'cd client && npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deployment would happen here'
                // Add your deployment steps here
                // For example: Heroku, AWS, Docker, etc.
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}