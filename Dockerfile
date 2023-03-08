FROM node:18.12.1-alpine

RUN mkdir -p /app/Frontend/node_modules \
    && chown -R node:node /app

WORKDIR /app/Frontend

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
