# Cypress QA Automation

Este repositorio contiene las pruebas automatizadas para la aplicación frontend utilizando Cypress. Este README proporciona instrucciones para configurar y ejecutar las pruebas en un entorno local usando Docker.

## Estructura del Repositorio

- **Dockerfile**: Contiene las instrucciones para construir la imagen Docker de Cypress.
- **docker-compose.yml**: Configuración de Docker Compose para ejecutar las pruebas de Cypress.
- **cypress/**: Contiene la configuración y los archivos de prueba de Cypress.
  - **e2e/**: Contiene las pruebas end-to-end.
  - **support/**: Contiene el archivo de soporte para comandos globales y configuraciones adicionales.
- **package.json**: Contiene las dependencias del proyecto.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) (>= 27.0.3)
- [Docker Compose](https://docs.docker.com/compose/install/) (>= 2.29.1)

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/gonzabgarcia/Cypress.git
    cd Cypress
    ```

2. **Construye y levanta los contenedores:**

    ```bash
    docker-compose -f docker-compose.yml up -d
    ```

3. **Ejecuta las pruebas de Cypress:**

    ```bash
    docker-compose -f docker-compose.yml run cypress
    ```

4. **Para detener los contenedores:**

    ```bash
    docker-compose down
    ```

## Desarrollo

Si necesitas realizar cambios en las pruebas, sigue estos pasos:

1. **Realiza cambios en los archivos dentro de `cypress/e2e/`.**
2. **Reconstruye la imagen Docker y reinicia los contenedores:**

    ```bash
    docker-compose -f docker-compose.yml up -d --build
    ```

## Configuración

El archivo `cypress.config.js` contiene la configuración de Cypress:

- `baseUrl`: La URL de la aplicación frontend.
- `specPattern`: El patrón para los archivos de pruebas.
- `supportFile`: El archivo de soporte para comandos globales y configuraciones adicionales.
- `reporter` y `reporterOptions`: Configuración del reporte de pruebas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
