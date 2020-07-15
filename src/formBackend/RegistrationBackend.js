const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();
const sqlite = require('sqlite3');
let DB = new sqlite.Database('src/formBackend/ApplicationsDatabase.db');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const studyOptions = ["", "IK", "IC", "IC/IK", "NA", "WI", "GT", "WIT"];

app.post('/submitRegistration',[
    check('fvoornaam').escape(),
    check('fvoorletters').escape(),
    check('ftussenvoegsel').escape(),
    check('fachternaam').escape(),
    check('fgeboortedatum').isDate().withMessage("Your date of birth is not valid.").escape(),
    check('fstudentnummer').custom(studentID => validStudentID((studentID))).escape(),
    check('fmobiel').escape(),
    check('fstudie').isIn(studyOptions).withMessage("The study you have entered does not exist, please stop hacking our site.").escape(),
    check( 'femail').isEmail().escape().withMessage("Your email is not valid.").escape()
],
    function (req, res) {

        let errors = validationResult(req); //check if there are no validation errors. //TODO: add validation message text
        if(!errors.isEmpty()){
            res.status(422).send(errors);
            return
        }
        console.log(req.body);

        addStudentToDB(req.body).then((addActionResult) =>{

        console.log(addActionResult);
        if(addActionResult == 1){
            res.status(500).send("Internal server error while processing your application. Please try again later. ")
        }
        else if (addActionResult == 2){
            res.status(400).send("This student ID has already been used to register for the introduction. Please contact the introduction committee.")
        }
        else{
            res.status(201).send("Participant has successfully been added.")
        }

        });

    }
);

app.listen(25565);

/**
 * Async getter for the database.
 * @param sql The SQl for the query.
 * @param parameters The parameters for the Query.
 */
DB.getasync = function (sql, parameters) {
    return new Promise((resolve, reject) => {
        DB.all(sql,parameters, function (error, rows) {
            if(error){
                console.log("DATABASE ERROR WHILE SELECTING: " + error);
                reject();
            }
            else{
                resolve(rows);
            }
        })
    });
};

/**
 * Async inserter for the database.
 * @param sql The SQl for the query.
 * @param parameters The parameters for the Query.
 */
DB.insertAsync = function (sql, parameters) {
    return new Promise((resolve,reject) => {
        DB.run(sql, parameters, function (error) {
            if(error){
                console.log("DATABASE ERROR: " + error);
                reject();
            }
            else{
                resolve();
            }
        })
    })
};

/**
 * Adds a student to the database if he/she is not registered yet.
* @param {string} reqBody sanitized body from the form.
* */
function addStudentToDB(reqBody){
    let studentID = reqBody.fstudentnummer;
    return new Promise(function (resolve, reject) {
        let sql = 'SELECT studentnummer ';
        sql += 'FROM Applications';
        sql += ' WHERE studentnummer = ?';

        DB.getasync(sql,studentID).then(((rows) => {if(rows.length == 0){
            let insertSQL = "INSERT INTO Applications (studentnummer, voornaam, voorletters, tussenvoegsel, achternaam, geboortedatum, mobielnummer, studie)";
            insertSQL+= " VALUES (?,?,?,?,?,?,?,?) ";
            DB.insertAsync(insertSQL, [reqBody.fstudentnummer, reqBody.fvoornaam, reqBody.fvoorletters, reqBody.ftussenvoegsel, reqBody.fachternaam, reqBody.fgeboortedatum, reqBody.fmobiel, reqBody.fstudie])
                .then(function () {
                    resolve(0); //Adding the student was successful
                }, function () {
                    resolve(1); //Database error
                });

            }
        else {
                resolve(2); //StudentID already exists
            }
        }),
            function () {
                resolve(1); //Database error
            });
    })
}

/**
 * Checks if a student ID is a valid student ID.
 * @param studentID The studentID you want to check
 */
function validStudentID(studentID){
    if(studentID.length != 7){
        throw new Error("StudentID does not match the required length of 7 numbers.");
    }
    let multiplier = 7;
    let result = 0;
    while(multiplier > 0){
        result +=  parseInt(studentID[7 - multiplier]) * multiplier;
        multiplier--;
    }
    if(result % 11 != 0){
        throw new Error("StudentID is not a valid student ID.");
        return false;
    }

    return true;
}