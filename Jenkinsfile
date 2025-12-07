pipeline {
  agent any

  tools {
    // Uses NodeJS plugin (name must match Global Tool Config)
    nodejs "node18"
  }

  environment {
    // Name must match Global Tool Config for sonar-scanner
    SCANNER_HOME = tool 'sonar-scanner'
  }

  stages {
    stage('Checkout') {
      steps {
        // For public repo, HTTPS URL is enough.
        // For private repo, you'll configure credentials in Jenkins job instead.
        git branch: 'main', url: 'https://github.com/lakshrajkumar26/ci-cd-backend.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm test || echo "no tests yet"'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('my-sonarqube') { // Name of SonarQube server in Jenkins
          sh """
            ${SCANNER_HOME}/bin/sonar-scanner \
              -Dsonar.projectKey=node-backend \
              -Dsonar.sources=src
          """
        }
      }
    }
  }
}
