# ------------------------------------------------------
# Build Application
# ------------------------------------------------------

FROM node:14-alpine

WORKDIR /build

COPY . .

RUN yarn install --production

EXPOSE 8080

CMD ["node", "build/index.js"]