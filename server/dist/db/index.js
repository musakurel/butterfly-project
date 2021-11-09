"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
exports.default = (0, knex_1.default)({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'user',
        password: '1234',
        database: 'db'
    },
    debug: false,
    pool: {
        min: 10,
        max: 10000
    }
});
//# sourceMappingURL=index.js.map