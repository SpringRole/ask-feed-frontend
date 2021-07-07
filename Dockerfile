FROM node:14.16-slim

WORKDIR /ask-feed-serve/client
COPY client/package.json /ask-feed-serve/client/package.json
RUN npm install
COPY client/ /ask-feed-serve/client/
RUN npm run build

WORKDIR /ask-feed-serve
COPY package.json /ask-feed-serve/package.json
RUN npm install
COPY index.js /ask-feed-serve/index.js

CMD ["npm", "start"]
EXPOSE 3000
