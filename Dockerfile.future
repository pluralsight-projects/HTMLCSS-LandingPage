FROM node:10.1-alpine

WORKDIR /src/app/

ADD ./package.json .

RUN ["npm", "install"]

COPY . .

RUN chown -R node:node /src/app

USER node
