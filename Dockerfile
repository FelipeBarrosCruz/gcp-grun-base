FROM node:14.15.1-alpine

WORKDIR /usr/app

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install --production -q

COPY . .

CMD ["npm", "start"]