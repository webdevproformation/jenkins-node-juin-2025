pipeline {
    agent any
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
    }
}