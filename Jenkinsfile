pipeline {
    agent any

    environment {
        ImageRegistry = 'malikh551/node_3wa_exemple'
        EC2_IP = 'ec2-16-170-255-40.eu-north-1.compute.amazonaws.com'
        DockerComposeFile = 'docker-compose.yml'
        DotEnvFile = '.env'
    }
    stages {
        stage('CI'){
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                    npm install
                    npm run test
                '''
            }
        }
        stage('CD'){
            steps {
                script {
                    echo "Building Docker Image..."
                    sh "docker build -t ${ImageRegistry}/${JOB_NAME}:${BUILD_NUMBER} ."
                }
            }
        }
    }
}