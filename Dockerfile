# Use a base image with Node.js installed
FROM node:alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Build Storybook
RUN npm run build-storybook

# Use NGINX as a production server for serving both React app and Storybook
FROM nginx:alpine

# Copy the built React files from the previous stage to serve React app
COPY --from=build /app/build /usr/share/nginx/html

# Copy the built Storybook files from the previous stage to serve Storybook
COPY --from=build /app/storybook-static /usr/share/nginx/html/storybook

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
