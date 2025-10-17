FROM node:20

WORKDIR /app

COPY ./app .

RUN npm i --omit dev

RUN npm install dotenv

RUN npm install vite

RUN npm run build

EXPOSE 3000

CMD [ "node", "build" ]
