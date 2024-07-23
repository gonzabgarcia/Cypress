pipeline {
    agent any

    tools {
        nodejs 'Node 20.15.1' // Asegúrate de que el nombre coincida con el configurado en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gonzabgarcia/Cypress.git'
            }
        }
        stage('Verify Node.js Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run --reporter junit --reporter-options "mochaFile=results/test-output-[hash].xml"'
            }
        }
    }
    post {
        always {
            junit '**/results/*.xml'
        }
    }
}
