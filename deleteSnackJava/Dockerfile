FROM maven:3.8-openjdk-17-slim AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

COPY --from=build /app/target/deleteSnackJava-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 3013

CMD ["java", "-jar", "app.jar"]
