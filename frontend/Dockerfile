# Stage 2: Production
FROM node:18-alpine AS production
# Set working directory
WORKDIR /app
# Copy only production dependencies
COPY package*.json ./
RUN npm install --only=production
# Copy the rest of the application
COPY . .
# Expose production ports
EXPOSE 3000
# Start the application
CMD ["npm", "run", "dev"]