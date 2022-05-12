FROM node:18-alpine3.14
WORKDIR /app
RUN mkdir -p /app/backend
COPY /backend /app/backend
RUN cd /app/backend && npm install
CMD [ "npm", "--prefix", "/app/backend", "run", "start:dev" ]