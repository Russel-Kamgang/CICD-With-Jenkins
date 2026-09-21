# Étape 1 : Build de l'application
FROM node:18-alpine AS build

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Build de React
RUN npm run build

# Étape 2 : Serveur Nginx pour le build
FROM nginx:alpine

# Copier le build vers Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

