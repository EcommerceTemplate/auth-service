FROM node:14-buster-slim

WORKDIR /app

RUN groupadd -r appuser && useradd -r -g appuser appuser
RUN chown -R appuser:appuser /app

COPY package*.json ./
RUN npm install --production

COPY /app/index.js ./

USER appuser

EXPOSE 3000

CMD ["npm", "run" ,"dev"]
