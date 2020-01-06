FROM node:10-alpine

RUN mkdir -p /app/web
WORKDIR /app/web

COPY web/package*.json /app/web/

RUN npm install

COPY web /app/web/

EXPOSE 8056
CMD ["npm", "start"]