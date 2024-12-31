FROM ubuntu:24.04
WORKDIR /usr/local/app

# update package lists
RUN apt update && apt upgrade -y

# INstall necessary packages
RUN apt install -y\
    software-properties-common\
    curl\
    wget\
    gnupg\
    git\
    bash\
    build-essential\
    gcc\
    g++\
    python3\
    python3-pip\
    python3-venv\
    vim

# Install Node.js and npm using NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs

# Set up working directory
WORKDIR /app

# Use bash as the default shell
SHELL [ "/bin/bash", "-c" ]