FROM node:14.19.3

WORKDIR /React_Admin_leche

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3061

CMD ["npm","run","start"]