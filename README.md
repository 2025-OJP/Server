# Server Setup Guide

This guide will walk you through the process of starting the server using Docker Compose.

## Prerequisites

- Ensure you have Docker and Docker Compose installed on your machine.
- Familiarity with basic Docker commands.

---

## Steps to Run the Server

1. **Start the Containers**

   Run the following command to start the containers in detached mode:
   ```bash
   docker-compose up -d
   ```
   This will build and start the containers as defined in the `docker-compose.yml` file.

2. **Verify the Containers**

   After running the above command, you can check if the containers are running using:
   ```bash
   docker-compose ps
   ```
   This command lists all active containers along with their status and ports.

---

## Additional Commands

- **Stop the Containers**
  ```bash
  docker-compose down
  ```
  Stops and removes all containers defined in the `docker-compose.yml` file.

- **View Logs**
  ```bash
  docker-compose logs
  ```
  Displays the logs for all services.

- **Rebuild the Containers**
  ```bash
  docker-compose up --build
  ```
  Rebuilds the containers from scratch.

---

## Troubleshooting

- **Container Not Starting**
  - Check the logs for errors:
    ```bash
    docker-compose logs
    ```
  - Ensure all necessary dependencies are installed.

- **Port Conflicts**
  - Verify that the ports specified in `docker-compose.yml` are not already in use.
  - Update the ports in `docker-compose.yml` if needed.

---

## Notes

- Always ensure your `docker-compose.yml` file is properly configured before running the commands.
- For more advanced configurations, refer to the [Docker Compose documentation](https://docs.docker.com/compose/).
