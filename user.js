const mysql = require("mysql");
const Promise = require("bluebird"); // for async method

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "data1",
};

async function add(user) {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `insert into newtab (name) values (?)`;
  await connection.queryAsync(sql, [user.name]);
  await connection.endAsync();
  console.log("added");
}

async function select() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `select * from  newtab `;
  let list = await connection.queryAsync(sql);
  await connection.endAsync();
  console.log(list);

  return list;
}
//select();
const user = { name: "sanvi" };
//add(user);

module.exports = { add, select };
