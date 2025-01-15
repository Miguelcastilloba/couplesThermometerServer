import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

var con = mysql.createPool({
  connectionLimit: 10,
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.COUPLES_DATABASE,
  connectTimeout: 10000
});

async function bdOperation(sql) {
  
    return new Promise((resolve, reject) => {
      con.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  export { bdOperation };