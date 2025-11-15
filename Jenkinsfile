pipeline {
agent {
node {
label 'build'
}
}
tools {
maven 'M2_HOME'
}
options {

timeout(time: 5, unit: 'MINUTES')
}
environment {
APP_ENV = "DEV"
}
stages {
stage('Code Checkout') {
steps {
git branch: 'master',
url: 'https://github.com/redfox4ever/devops-student-management.git',
credentialsId: 'jenkins-example-github-pat'
}
}
stage('Code Build') {
steps {
sh 'mvn package'
}
}
}
post {
always {
echo "======always======"
}
success {
echo "=====pipeline executed successfully ====="
}
failure {
echo "======pipeline execution failed======"
}
}
}