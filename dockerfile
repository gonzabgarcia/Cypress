FROM cypress/included:13.13.1

USER root

# Instalar Xvfb
RUN apt-get update && apt-get install -y xvfb

WORKDIR /e2e

# Copiar el archivo de configuración de Cypress
COPY cypress.config.js /e2e/cypress.config.js

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todos los archivos de prueba
COPY . .

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
