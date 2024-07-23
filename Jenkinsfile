pipeline {
    agent any
    tools {
        nodejs 'Node' // Nombre de la herramienta NodeJS configurada en Jenkins
        git 'Default' // Asegúrate de que Git esté configurado correctamente
    }
    
    environment {
        PATH = "${PATH}:${NODE_HOME}/bin"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde GitHub
                git url: 'https://github.com/gonzabgarcia/Cypress.git', branch: 'main', credentialsId: 'jenkinstoken'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Instala npm (solo si no está preinstalado)
                    sh 'curl -fsSL https://install-node.now.sh/lts | bash'
                    
                    // Verifica la instalación de npm y Node.js
                    sh 'node -v'
                    sh 'npm -v'

                    // Instala las dependencias del proyecto, incluyendo Cypress si está en package.json
                    sh 'npm install'

                    // Si Cypress no está en package.json, instálalo explícitamente
                    sh 'npm install cypress --save-dev'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Ejecuta Cypress usando npx
                    sh 'npx cypress run'
                }
            }
        }
        stage('Generate Reports') {
            steps {
                script {
                    sh 'npx mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome/mochawesome.json'
                    sh 'npx marge cypress/reports/mochawesome/mochawesome.json --reportDir cypress/reports/mochawesome --inline'
                    sh 'npx allure generate cypress/reports/allure-results --clean -o cypress/reports/allure-report'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            publishHTML(target: [
                reportDir: 'cypress/reports/mochawesome',
                reportFiles: 'mochawesome.html',
                reportName: 'Mochawesome Report'
            ])
            allure includeProperties: false, jdk: '', results: [[path: 'cypress/reports/allure-results']]
            // Limpiar archivos temporales, si es necesario
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
