FROM node:10-alpine

RUN mkdir -p /app/api
WORKDIR /app/api

COPY api/package*.json /app/api/

RUN npm install

COPY api /app/api/

EXPOSE 8055
CMD ["npm", "start"]