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
        stage("CD deploy on docker hub"){
            steps {
                script {
                    echo "Pushing Image to DockerHub..."
                    withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${ImageRegistry}/${JOB_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
    }
}