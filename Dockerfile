FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "src/index.js"]
EXPOSE 3000