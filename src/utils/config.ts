require('dotenv').config();

export const config = {
    baseUrl: "http://localhost:3030",
    apiBaseUrl: "http://localhost:3333/api",
    mineApiUrl: "http://localhost:3333/api/mine",
    userMineGlobalApiUrl: "http://localhost:3333/api/users/mine/global",
}

export const TOKEN_EXPIRATION = 15 * 60 * 1000; // 15 mins