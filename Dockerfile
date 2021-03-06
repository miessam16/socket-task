FROM node:latest

WORKDIR /app

COPY ./client ./client
COPY ./src ./src

# Copy dependency definitions
COPY tsconfig.json package.json tsconfig.build.json package-lock.json ./

RUN npm i 

RUN npm run build

CMD ["npm","run", "start:prod"]
