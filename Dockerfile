FROM node:13-alpine

WORKDIR '/app'

COPY package.json .

COPY tsconfig.json .

RUN npm install

COPY . .

CMD ["npm", "start"]