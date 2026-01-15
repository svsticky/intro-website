# syntax=docker/dockerfile:1.6

FROM node:lts AS build
WORKDIR /app

COPY . .
RUN npm ci

RUN --mount=type=secret,id=contentful_space_id \
    --mount=type=secret,id=contentful_delivery_token \
    --mount=type=secret,id=contentful_preview_token \
    --mount=type=secret,id=contentful_environment \
    export CONTENTFUL_SPACE_ID="$(cat /run/secrets/contentful_space_id)" && \
    export CONTENTFUL_DELIVERY_TOKEN="$(cat /run/secrets/contentful_delivery_token)" && \
    export CONTENTFUL_PREVIEW_TOKEN="$(cat /run/secrets/contentful_preview_token)" && \
    export CONTENTFUL_ENVIRONMENT="$(cat /run/secrets/contentful_environment)" && \
    npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
