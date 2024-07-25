# Front-End Application

Este repositorio contiene la aplicación front-end construida con Node.js. Este README proporciona instrucciones para construir y ejecutar la aplicación en un entorno local usando Docker y Docker Compose.

## Estructura del Repositorio

- **Dockerfile**: Contiene las instrucciones para construir la imagen Docker del front-end.
- **docker-compose.yml**: Configuración de Docker Compose para ejecutar el contenedor del front-end.
- **package.json**: Contiene las dependencias del proyecto.
- **.github/workflows/build.yml**: Configuración del workflow de GitHub Actions para construir y subir la imagen Docker.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) (>= 27.0.3)
- [Docker Compose](https://docs.docker.com/compose/install/) (>= 2.29.1)

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/gonzabgarcia/frontend-qa-automation.git
    cd frontend-qa-automation
    ```

2. **Construye la imagen Docker:**

    ```bash
    docker-compose build frontend
    ```

3. **Levanta el contenedor:**

    ```bash
    docker-compose up -d
    ```

4. **Accede a la aplicación en el navegador:**

    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

5. **Para detener el contenedor:**

    ```bash
    docker-compose down
    ```

## Configuración

El archivo `Dockerfile` define la imagen Docker para el front-end:

- **Imagen base**: Node.js 22.
- **Directorio de trabajo**: `/app`.
- **Puerto expuesto**: 3000.
- **Comando de inicio**: `npm start`.

El archivo `docker-compose.yml` configura el servicio del front-end y define un `healthcheck` para asegurar que el servicio esté completamente disponible.

## GitHub Actions

El workflow en GitHub Actions realiza las siguientes tareas:

1. **Construye la imagen Docker** cuando se realiza un push a la rama `main`.
2. **Publica la imagen en Docker Hub** usando las credenciales configuradas en los secrets.

Para más detalles, consulta `.github/workflows/build.yml`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
