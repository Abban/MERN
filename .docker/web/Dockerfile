FROM node:13-alpine

RUN mkdir -p /app/web
WORKDIR /app/web

COPY web/package*.json web/yarn.lock /app/web/

RUN npm install

COPY web /app/web/

EXPOSE 3000
CMD ["npm", "start"]