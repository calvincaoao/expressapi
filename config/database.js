var mysql = {
    database: 'omniturereport',
    username: "root",
    password: '1234',
    options: {
      timezone: "+08:00",
      charset: "utf8",
      host: "localhost",
      port: 3306,
      dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
}

module.exports = mysql;