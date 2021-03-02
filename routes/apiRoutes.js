const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
  console.log('db.Todo',db.Todo);
  db.Todo.findAll().then(todos => res.send(todos));
});


router.post("/new",(req,res)=>{
  console.log("req",req.body)
  db.Todo.create({
    text:req.body.text
  }).then(submitedTodo=>res.send(submitedTodo))
});

module.exports = router;
