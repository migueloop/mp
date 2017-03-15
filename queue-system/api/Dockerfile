FROM node:slim
WORKDIR /code
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm start