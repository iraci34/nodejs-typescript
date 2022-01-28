import { Pool } from 'pg';

const connectionString = 'postgres://qdtjpfmj:1t1RY9BXiEcxkiKSy4U1YO2NysgLEiQC@kesavan.db.elephantsql.com/qdtjpfmj';

const db = new Pool({connectionString});

export default db;