pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/gonzabgarcia/Cypress.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            junit '**/results/*.xml'
        }
    }
}
