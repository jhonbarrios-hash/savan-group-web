pipeline {
    agent any
    
    stages {
        stage('Descargar Código') {
            steps {
                checkout scm
            }
        }
        stage('Análisis de SonarQube') {
            steps {
                script {
                    // Llama a la herramienta que configuraste en "Tools"
                    def scannerHome = tool 'sonar-scanner'
                    
                    // Llama al servidor que configuraste en "Sistema"
                    withSonarQubeEnv('SonarQube Server') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=Savan-Group-Web \
                            -Dsonar.projectName='Savan Group Web' \
                            -Dsonar.sources=. \
                            -Dsonar.exclusions=node_modules/**,.next/**"
                    }
                }
            }
        }
    }
}