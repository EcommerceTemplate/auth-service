FROM node:14-buster-slim

WORKDIR /app

RUN groupadd -r appuser && useradd -r -g appuser appuser
RUN chown -R appuser:appuser /app

COPY package*.json ./
RUN npm install --production

COPY /app/index.js ./
RUN mkdir -p /home/appuser && chown -R appuser:appuser /home/appuser && chmod -R 755 /home/appuser
RUN apt-get update && apt-get install -y libcurl4-openssl-dev

USER appuser

EXPOSE 3000

CMD ["npm", "run" ,"dev"]
