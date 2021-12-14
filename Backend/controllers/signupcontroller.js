require("dotenv").config()
const mysql = require("mysql")
const config = require("../database.js");
const bcrypt = require("bcrypt")
const conn = require("../database.js");



const signup_index = async (req, res) => {

    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password,10); //Hash & Salt
    const fname = req.body.fname;
    const lname= req.body.lname;
    const address = req.body.address;
    const postalcode = req.body.postalcode;
    const phonenumber = req.body.phonenumber;
   const isManager = req.body.isManager;

   conn.getConnection( async (err, connection) => {
    
     if (err) throw (err)
    
    
     const sqlSearch = "SELECT * FROM user_table WHERE email = ?"
     const search_query = mysql.format(sqlSearch,[email])
    
     const sqlInsert = "INSERT INTO user_table (userId, email, password,fname,lname,address,postalcode,phonenumber,isManager) VALUES (0,?,?,?,?,?,?,?,0)"
     const insert_query = mysql.format(sqlInsert,[email, hashedPassword,fname,lname,address,postalcode,phonenumber,isManager])
     // ? will be replaced by values
     // ?? will be replaced by string
    
      await connection.query (search_query, async (err, result) => {
    
    
      if (err) throw (err)
      console.log("------> Search Results")
      console.log(result.length)
    
      if (result.length != 0) {
       connection.release()
       console.log("------> Account already exists")
       res.sendStatus(409) 
      } 
    
      else {
        await connection.query (insert_query, (err, result)=> {

       connection.release()
       
       if (err) throw (err)
       console.log ("--------> Created a new Account")
       console.log(result.insertId)
       res.sendStatus(201)
      })
      
     }
    }) //end of connection.query()
    
   }) //end of db.getConnection()
    
}
const signup_index2 = async (req, res) => {
conn.query('SELECT * FROM user_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
  }
module.exports = {
    signup_index,
    signup_index2
}