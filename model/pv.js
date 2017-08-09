var Sequelize = require('sequelize');
var mysql = require('../config/database');

var sequelize = new Sequelize(mysql.database,mysql.username,mysql.password,mysql.options);

sequelize.authenticate().then(()=>{
    console.log("connecting successful!");
}).catch(err =>{
    console.log("connecting error:",err);
});

var pv = sequelize.define('cmlcpv',{
    pageid:{type : Sequelize.INTEGER, primaryKey: true},
    levelcode: Sequelize.INTEGER,
    pageviews: Sequelize.BIGINT(11),
    packageid: Sequelize.STRING(30)
},{
   freezeTableName:true,
   timestamps:false
});

// var results=pv.findAll({limit:10}).then(
//     result =>{results = JSON.stringify(result)
//     return results;
// });

//  console.log(results);

module.exports = pv;