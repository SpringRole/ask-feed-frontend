FROM node:16-alpine
WORKDIR /client
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
CMD ["npm","start"]
