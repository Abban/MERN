FROM node:13-alpine

RUN apk update
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm config set python /usr/bin/python

RUN mkdir -p /app/api
WORKDIR /app/api

COPY api/package*.json /app/api/

RUN npm install

RUN npm rebuild bcrypt --build-from-source
RUN apk del builds-deps

COPY api /app/api/

EXPOSE 8055
CMD ["npm", "start"]