FROM node:slim
WORKDIR /code
RUN npm i -g swagger
COPY package.json package.json
RUN npm i
RUN cat package.json
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
ENV DB_URL mongo
CMD npm start