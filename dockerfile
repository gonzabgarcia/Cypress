# Dockerfile for Cypress
FROM cypress/included:13.13.1

WORKDIR /e2e

# Copia el archivo de configuración de Cypress
COPY cypress.config.js /e2e/

# Copia el package.json y package-lock.json
COPY package*.json /e2e/

# Instalar dependencias
RUN npm install

# Copia todos los archivos de prueba
COPY cypress /e2e/

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
