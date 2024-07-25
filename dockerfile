# Dockerfile for Cypress
FROM cypress/included:13.13.1

WORKDIR /e2e

# Copia el archivo de configuración de Cypress y otros archivos necesarios
COPY package*.json ./
RUN npm install

# Copia todos los archivos del proyecto de pruebas
COPY . .

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
