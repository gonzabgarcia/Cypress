pipeline {
    agent any

    tools {
        nodejs "Node" // Asegúrate de que "NodeJS" esté configurado en Global Tool Configuration
        git "Default"   // Usa la configuración por defecto de Git
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git url: 'https://github.com/gonzabgarcia/Cypress.git', branch: 'main'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    withEnv(["PATH+NODE=${nodeHome}/bin"]) {
                        sh 'npm install'
                    }
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    withEnv(["PATH+NODE=${nodeHome}/bin"]) {
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }
    
    post {
        always {
            junit 'cypress/results/*.xml'
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
        }
    }
}
