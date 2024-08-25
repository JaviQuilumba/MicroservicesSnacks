# Microservice for Delete Snacks

<p>
This microservice performs the action of deleting snack information from a movie platform. It has an interface where this microservice is called through a defined URL. The microservice performs this action through an endpoint API and connects to a Postgres database hosted in the cloud. The use of this microservice will depend on the user's role.
</p>


#### How to install and run the project? :wrench:
The project requires JDK17 and vscode-java-debug installed on your system. To install and run the project, follow these steps:

###### Clone the repository:

- `git clone <URL_OF_REPOSITORY>`
- `cd <URL_OF_REPOSITORY> `

###### Install dependencies:

- `<link>` : <https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html>
- `install vscode-java-debug`

###### Configure environment variables:
Create an `.env` file in the root of the project and set the following environment variables:

- `DB_USER=your_postgresql_user`
- `DB_HOST=your_postgresql_host`
- `DB_DATABASE=your_postgresql_database`
- `DB_PASSWORD=your_postgresql_password`
- `DB_PORT=server_port`


###### Execute the server:
-  You have to enter the project in the `/src/java/deleteSnack/deleteSnackJava/` folder and right click on `DeleteSnackJavaApplication.java` and select `Run Java`.

#### How to use the project :computer:
<p>
To use the microservice, follow the steps above to install and run the project. Once the program is running you can make use of the frontend of the cinema platform which should also run on your local machine or you can make use of the Swagger documentation available, with which it would no longer be necessary to have the frontend of the cinema platform to test this microservice, you can access through the URL of your local machine by increasing the following path at the end of the URL: `/swaggerDeleteSnack`.
</p>


`Frontend Cinema Platform` : <https://github.com/JaviQuilumba/CinemaPlatform.git>

#### Technologies used for this microservice
- **JDK17** for running JAVA.
- **PostgreSQL** for the database.
- **Docker** for optional containerization.
- **vscode-java-debug** for Visual Studio Code.


###  License
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
