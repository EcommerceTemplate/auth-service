FROM node:14-alpine

WORKDIR /app

RUN mkdir -p /app/data
COPY /app/package*.json ./
COPY /app/index.js ./

RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
