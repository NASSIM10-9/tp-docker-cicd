# Image PostgreSQL Alpine
FROM postgres:15-alpine

# Copier le script d'initialisation
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Port PostgreSQL
EXPOSE 5432
