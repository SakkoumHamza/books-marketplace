def imageName = 'sakkoumhamza/books-market'
def registry = 'https://index.docker.io/v1/'

node('workers'){
    stage('Checkout'){
        checkout scm
    }

    def imageTest= docker.build("${imageName}-test", "-f Dockerfile.test .")

    stage('Quality Tests'){
        sh "docker run --rm ${imageName}-test npx ng lint "
    }

    stage('Unit Tests'){
        sh "docker run --rm -v $PWD/coverage:/app/coverage ${imageName}-test npm run test"
        publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: "$PWD/coverage/books-market",
            reportFiles: "index.html",
            reportName: "Coverage Report"
        ])
    }

    stage('SonarQube Analysis') {
        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {

        withSonarQubeEnv('sonarqube') {
                sh """
                  /Users/mac/sonar-scanner/bin/sonar-scanner \
                    -Dsonar.projectKey=books-market \
                    -Dsonar.projectName=books-market \
                    -Dsonar.sources=src \
                    -Dsonar.javascript.lcov.reportPaths=coverage/marketplace/lcov.info \
                    -Dsonar.host.url=http://localhost:9000 \
                    -Dsonar.login=$SONAR_TOKEN
                """
        }
    }
}

    // stage("Quality Gate"){
    //     timeout(time: 5, unit: 'MINUTES') {
    //         def qg = waitForQualityGate()
    //         if (qg.status != 'OK') {
    //             error "Pipeline aborted due to quality gate failure: ${qg.status}"
    //         }
    //     }
    // }

    stage('Build'){
        docker.build("${imageName}:${commitId()}", '--build-arg ENVIRONMENT=development .')
    }

     stage('Push') {
         withCredentials([usernamePassword(credentialsId: 'registry', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            sh "docker login -u $DOCKER_USER -p $DOCKER_PASS $registry"
            docker.image("${imageName}:${commitID()}").push()
            if (env.BRANCH_NAME == 'develop') {
                docker.image("${imageName}:${commitID()}").push('develop')
            }
        }
    }
}

def commitID() {
    sh 'git rev-parse HEAD > .git/commitID'
    def commitID = readFile('.git/commitID').trim()
    sh 'rm .git/commitID'
    commitID
}
