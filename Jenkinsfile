pipeline {
    agent any
    stages {
        stage('Build') {
            sh "yarn"
        }
        stage('Test') {
          sh "yarn test:headless"
        }
    }
}