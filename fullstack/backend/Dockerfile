# which image you want containers to be built from, alpine is convention for the minimum image requirments that can build a container  
FROM node:alpine

# Point the directory into app folder, create it if doesn't exsist
WORKDIR /app

# Copy host filesystem files or directories to container filesystem
COPY . .

# RUN is used to run shell commands to buld image layers
RUN yarn install

# Running shell commands
RUN ls

ENV PGUSER=root
ENV PGHOST='localhost'
ENV PGDATABASE=postgres-just-work
ENV PGPASSWORD=password
ENV PGPORT=5444
# This is container port
EXPOSE 8000 

# Default container command
CMD ["node", "server.js"]