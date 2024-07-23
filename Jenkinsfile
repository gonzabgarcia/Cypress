pipeline {
    agent any
    tools {
        nodejs 'Node' // Nombre de la herramienta NodeJS configurada en Jenkins
        git 'Git'   // Configura Git si es necesario
    }
    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde GitHub
                git 'https://github.com/gonzabgarcia/Cypress.git'
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
        stage('Archive Results') {
            steps {
                // Archiva los resultados de los tests (ajusta la ruta según tu configuración)
                junit '**/results/*.xml'
            }
        }
    }
    post {
        always {
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