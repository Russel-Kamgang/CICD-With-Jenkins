# Étape 1 : build de l'application
# FROM node:22-alpine AS builder

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci

# COPY . .

# RUN npm run build


# Étape 2 : serveur web
FROM nginx:alpine

# COPY --from=builder /app/build /usr/share/nginx/html
COPY build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]