require('dotenv').config();

export const config = {
    baseUrl: "http://localhost:3000",
    apiBaseUrl: "http://localhost:3333/api",
    mineApiUrl: "http://localhost:3333/api/mine",
}

export const TOKEN_EXPIRATION = 5 * 60 * 1000; // 5 mins