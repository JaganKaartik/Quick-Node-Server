FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock

RUN yarn install --pure-lockfile

COPY . . 

RUN yarn build

EXPOSE 8000

CMD ["yarn","start"]