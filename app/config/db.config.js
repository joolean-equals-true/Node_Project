// Read database configuration from environment variables.
// Common env names: DB_HOST, DB_USER, DB_PW (or DB_PASS), DB_NAME, DB_PORT
const db_host = process.env.DB_HOST || 'localhost';
const db_pw = process.env.DB_PW || process.env.DB_PASS || '';
const db_user = process.env.DB_USER || '';
const db_name = process.env.DB_NAME || '';

// If credentials are missing, throw a clear error early so it's obvious to the developer.
if (!db_user || !db_pw) {
    const hint = `Please set DB_USER and DB_PW (or DB_PASS) environment variables. Example: DB_USER=root DB_PW=secret`;
    // Log detailed info for local debugging then throw to fail fast.
    console.error('Database credentials are not set:', { DB_HOST: db_host, DB_USER: db_user ? '***' : '', DB_PW: db_pw ? '***' : '' });
    throw new Error(`Missing database credentials. ${hint}`);
}

module.exports = {
    host: db_host,
    user: db_user,
    password: db_pw,
    database: db_name,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
