FROM node:alpine3.16
WORKDIR /app
COPY . /app
EXPOSE 80
RUN npm install node
RUN ls
CMD ["node", "app/src/index.js"]
