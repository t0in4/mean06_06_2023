const express = require('express');

var router = express.Router();

var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
Employee.find().then((err, docs) => {
if (!err) { res.send(docs); }
else { console.log("Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)); }
});
});

router.post('/', (req, res) => {
    var emp = Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
    });
    emp.save().then((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
        });
    });

 

/* const createPost = async (req, res) => {
    const {name, position, office, salary} = req.body; 
    try {
        const post = await Employee.create({name, position, office, salary});
        res.status(200).json(post); 
    } catch (error) {
        res.status(400).json({error:error.message});
    }
} */

module.exports = router;
