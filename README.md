# PantryChef

## Project Description

PantryChef is a web-based recipe management application designed to help users organize and manage recipe information. The application provides recipe management features and demonstrates the use of modern web technologies, containerization, continuous integration, and cloud deployment.

**Live Website:** https://pantrychef-474d5.web.app

**GitHub Repository:** https://github.com/jaron-23/PantryChef

## Features

- View and manage recipe information.
- Create, edit, and delete recipes, where supported by the application.
- Organize recipe content through a web-based interface.
- Use Firebase services for hosting and application data management.
- Run the application in a Docker container.
- Automate Docker image builds and Firebase Hosting deployment through GitHub Actions.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase Hosting
- Cloud Firestore
- Docker
- Nginx
- Git and GitHub
- GitHub Actions

## Installation and Local Setup

### Prerequisites

Install the following tools:

- Git
- Docker Desktop
- Visual Studio Code or another code editor
- A modern web browser

### Clone the Repository

```bash
git clone https://github.com/jaron-23/PantryChef.git
cd PantryChef
```

Open the project folder in Visual Studio Code.

### Run Locally

Open the application's main HTML file in a web browser, or use a local web server if required by the application's Firebase configuration.

## Docker Setup

The project includes a `Dockerfile` that uses Nginx to serve the application's static files.

### Build the Docker Image

```bash
docker build -t pantrychef .
```

### Run the Container

```bash
docker run -d --name pantrychef-container -p 8080:80 pantrychef
```

### Verify the Application

Open the following address in your browser:

http://localhost:8080

To stop and remove the container:

```bash
docker stop pantrychef-container
docker rm pantrychef-container
```

## Continuous Integration and Deployment (CI/CD)

GitHub Actions automates parts of the project's development and deployment process.

### Docker CI Workflow

The Docker CI workflow runs when changes are pushed to the `main` branch or when a pull request targets `main`. It checks out the repository and attempts to build the Docker image.

### Firebase Hosting Deployment

The Firebase Hosting deployment workflow runs when changes are pushed to `main`. It uses GitHub Actions and Firebase credentials stored in GitHub repository secrets to deploy the application to Firebase Hosting.

A separate workflow supports Firebase Hosting preview deployments for eligible pull requests.

## Deployment

PantryChef is deployed using Firebase Hosting.

**Live URL:** https://pantrychef-474d5.web.app

The deployment workflow can be monitored through the repository's GitHub Actions page:

https://github.com/jaron-23/PantryChef/actions

## Project Verification

The following checks have been performed:

- The Docker CI workflow completed successfully.
- The Firebase Hosting deployment workflow completed successfully.
- The deployed website was opened and verified to load.

## Author

**Project:** PantryChef  
**Repository Owner:** jaron-23

## License

No license has been specified for this project.
