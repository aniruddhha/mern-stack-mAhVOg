# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the working directory
COPY . .

# Expose the port the app runs on (optional if you want to specify it in docker run)
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]