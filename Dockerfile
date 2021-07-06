FROM node:16-alpine
WORKDIR /ask-feed-frontend-client
COPY package.json /ask-feed-frontend-client/package.json
RUN npm install --force
COPY . /ask-feed-frontend-client
EXPOSE 3000
CMD ["npm","start"]
