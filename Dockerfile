FROM node:14.16-slim
WORKDIR /ask-feed-frontend-client
COPY package.json /ask-feed-frontend-client/package.json
RUN npm install
COPY . /ask-feed-frontend-client
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
