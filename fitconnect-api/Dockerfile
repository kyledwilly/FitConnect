# Use Node.js 18 image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install dependencies and development tools
RUN apt-get update && apt-get install -y \
    bash \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Install global dependencies (e.g., nodemon)
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application using nodemon
CMD ["nodemon", "index.js"]
