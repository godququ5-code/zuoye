const monk = require('monk');
//#注释：这是数据库的连接地址
const dbUrl = process.env.DB_URL;

// console.log(process.env.NODE_ENV);

const db = monk(dbUrl);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = db;
console.log('数据库连接初始化...');