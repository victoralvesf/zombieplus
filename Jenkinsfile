pipeline {
    agent {
        docker {
            image "victoralvesf/node-alpine-chrome"
            args "--network=skynet"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "yarn"
            }
        }
        stage('Test') {
            steps {
                sh "yarn test:ci"
            }
        }
    }
}