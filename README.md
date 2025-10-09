# tutorial-backend-1
Tutorial Backend Node App

## Setup

1. Copy `.env.example` to `.env` and fill in your database credentials (DB_HOST, DB_USER, DB_PW, DB_NAME).
2. Install dependencies:

	npm install

3. Start the server:

	node server.js

If the server throws an error like "Access denied for user ''@'localhost' (using password: NO)", it means your DB_USER or DB_PW environment variables are not set. Double-check `.env` and ensure `dotenv` is installed (it's included in package.json).
