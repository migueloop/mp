FROM node:slim
WORKDIR /code
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build
ENV SOCKET_PORT 2725
EXPOSE 2725
CMD npm start