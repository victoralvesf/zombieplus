pipeline {
    agent {
        docker {
            image "node"
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
                sh "yarn test:headless"
            }
        }
    }
}