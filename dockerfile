# Dockerfile for Cypress
FROM cypress/included:13.13.1

USER root

# Instalar Xvfb
RUN apt-get update && apt-get install -y xvfb

WORKDIR /e2e

# Copia el archivo de configuración de Cypress y otros archivos necesarios
COPY cypress.config.js /e2e/cypress.config.js
COPY package*.json /e2e/
RUN npm install

# Copia todos los archivos de prueba
COPY cypress /e2e/cypress

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
