# Dockerfile for Cypress
FROM cypress/included:13.13.1

WORKDIR /e2e

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Default command to run tests
CMD ["npx", "cypress", "run"]
