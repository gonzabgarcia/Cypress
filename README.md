# Cypress QA Automation

Este repositorio contiene las pruebas automatizadas para la aplicación front-end utilizando Cypress. Este README proporciona instrucciones para configurar y ejecutar las pruebas en un entorno local usando Docker y Docker Compose.

## Estructura del Repositorio

- **Dockerfile**: Contiene las instrucciones para construir la imagen Docker de Cypress.
- **docker-compose.yml**: Configuración de Docker Compose para ejecutar las pruebas de Cypress.
- **cypress/**: Contiene la configuración y los archivos de prueba de Cypress.
  - **e2e/**: Contiene las pruebas end-to-end.
  - **support/**: Contiene el archivo de soporte para comandos globales y configuraciones adicionales.
- **package.json**: Contiene las dependencias del proyecto.
- **cypress.config.js**: Configuración de Cypress para especificar el `baseUrl`, patrones de archivos de prueba, y opciones de reporte.

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
    docker-compose up -d --build
    ```

3. **Ejecuta las pruebas de Cypress:**

    ```bash
    docker-compose run cypress
    ```

4. **Para detener los contenedores:**

    ```bash
    docker-compose down
    ```

## Configuración

El archivo `Dockerfile` define la imagen Docker para Cypress:

- **Imagen base**: Node.js 22 con Cypress instalado.
- **Directorio de trabajo**: `/e2e`.
- **Comando de inicio**: `npx cypress run`.

El archivo `docker-compose.yml` configura el servicio de Cypress y define un `depends_on` para asegurar que el front-end esté en un estado saludable antes de ejecutar las pruebas. También incluye un `healthcheck` para verificar que el contenedor del front-end esté completamente operativo.

## GitHub Actions

El workflow en GitHub Actions realiza las siguientes tareas:

1. **Ejecuta las pruebas de Cypress** cuando se realiza un push a la rama `main`.
2. **Verifica si el contenedor del front-end está funcionando** y, si no lo está, levanta los contenedores necesarios.

Para más detalles, consulta `.github/workflows/cypress.yml`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
