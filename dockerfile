# Usa una imagen base de Node.js
FROM node:22

# Establece el directorio de trabajo
WORKDIR /e2e

# Copia el archivo de configuración de Cypress y otros archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala Cypress en la versión 13.13.1
RUN npm install cypress@13.13.1

# Copia todos los archivos del proyecto de pruebas
COPY . .

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "cypress", "run"]
