FROM cypress/included:13.13.1

USER root

# Instalar Xvfb
RUN apt-get update && apt-get install -y xvfb

WORKDIR /e2e

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]
