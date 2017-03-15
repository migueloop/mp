FROM node:5.9
WORKDIR /code
COPY package.json package.json
RUN npm i
RUN npm i clone-stats
COPY . .
RUN npm run build
EXPOSE 8000
ENV PORT 8000
ENV NODE_ENV production
ENV API_V02_ENDPOINT http://marketplace-api:3001/
ENV NODE_PATH ./dist/shared:./dist/server
RUN mkdir logs
CMD node bin/index.js
