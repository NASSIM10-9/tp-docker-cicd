# Image Nginx légère
FROM nginx:alpine

# Copier fichiers statiques dans le répertoire par défaut de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Exposer le port HTTP standard
EXPOSE 80

# CMD par défaut de Nginx : "nginx -g 'daemon off;'"
# Pas besoin de le redéfinir si on utilise l'image officielle
