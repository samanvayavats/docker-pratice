
FROM node:25-alpine 

WORKDIR /dist
COPY  . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/app.js"]