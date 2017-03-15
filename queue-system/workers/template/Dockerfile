FROM mhart/alpine-node
WORKDIR /code
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build
CMD npm start