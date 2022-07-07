# Build context
FROM node:16-alpine as builder

WORKDIR /app

ARG VITE_BACKEND_PATH
RUN echo Backend URL: $VITE_BACKEND_PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build

# Final nodejs server
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

EXPOSE 3000
CMD ["node", "dist/index.js"]