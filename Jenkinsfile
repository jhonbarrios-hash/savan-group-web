pipeline {
    agent any
    
    tools {
        nodejs 'node20' // Le dice a Jenkins que instale Node para esta ejecución
    }
    
    stages {
        stage('Descargar Código') {
            steps {
                checkout scm
            }
        }
        stage('Análisis de SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
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