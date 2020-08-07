pipeline {
    agent {
        docker {
            image "victoralvesf/node-alpine-chrome"
            args "--network=cursonightwatch_skynet"
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