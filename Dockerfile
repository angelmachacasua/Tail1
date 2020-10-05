FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm i webpack -g
RUN npm i webpack-cli -g
RUN npm i webpack-dev-server -g
RUN npm install
COPY . .
EXPOSE 4000
CMD npm run dev
