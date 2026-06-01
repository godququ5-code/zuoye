FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

EXPOSE 8080

ENV NODE_ENV=production

CMD ["node", "src/server.js"]