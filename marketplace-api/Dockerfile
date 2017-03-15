FROM node
WORKDIR /code
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build
ENV PORT 3001
EXPOSE 3001
CMD npm start