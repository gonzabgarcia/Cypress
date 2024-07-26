# Dockerfile for Cypress
FROM cypress/included:13.13.1

WORKDIR /e2e

# Copia el archivo de configuración de Cypress
COPY cypress.config.js /e2e/cypress.config.js

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copia todos los archivos
COPY . .

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
