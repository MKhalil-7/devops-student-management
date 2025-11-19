FROM openjdk:17-jdk-alpine
LABEL authors="redfox"
WORKDIR /app
COPY /var/lib/jenkins/workspace/student-management/target/student-management-0.0.1-SNAPSHOT.jar student-management.jar

RUN apk add --no-cache mariadb mariadb-client

EXPOSE 8089
# Initialize MySQL directories
RUN mkdir /run/mysqld && chown -R mysql:mysql /run/mysqld

# Start MariaDB in background and run app
ENTRYPOINT ["sh", "-c", "mysqld --datadir=/var/lib/mysql & java -jar /app/student-management.jar"]