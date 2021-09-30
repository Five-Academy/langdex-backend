ARG NODEVERSION=14
FROM node:${NODEVERSION}-alpine AS build
WORKDIR /app
COPY *.json src/ ./
RUN npm update && \
  npm run build && \
  npm ci --only=production

FROM gcr.io/distroless/nodejs:${NODEVERSION}
COPY --from=build /app/dist/ ./dist
COPY --from=build /app/node_modules/ ./node_modules
EXPOSE 3000
CMD [ "dist/main.js" ]