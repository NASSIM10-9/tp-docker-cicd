// deploy-db.js
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
// Si vous utilisez un fichier .env, assurez-vous de charger dotenv au début
// require('dotenv').config();

// --- Configuration du Pool (Identique à server.js) ---
const pool = new Pool({
    // Ces variables seront lues depuis l'environnement (ou .env)
    host: process.env.DB_HOST || "db",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "secret",
    database: process.env.DB_NAME || "mydb",
});

async function deployDatabase() {
    const initSqlPath = path.join(__dirname, 'database', 'init.sql');
   
    try {
        // Lecture du contenu du fichier init.sql
        const sql = fs.readFileSync(initSqlPath, 'utf8');
       
        console.log("-----------------------------------------");
        console.log(`Déploiement du schéma à partir de: ${initSqlPath}`);
       
        // Exécution de toutes les commandes SQL
        await pool.query(sql);
       
        console.log("✅ Base de données déployée avec succès (schéma et données initiales)!");
        console.log("-----------------------------------------");

    } catch (err) {
        console.error("❌ Erreur de déploiement de la base de données :", err.message);
        console.error("Vérifiez la connexion, les variables d'environnement (.env), et la syntaxe de votre init.sql.");
    } finally {
        // Ferme la connexion au pool après l'opération
        await pool.end();
    }
}

deployDatabase();