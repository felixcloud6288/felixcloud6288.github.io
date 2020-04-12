const router = require("express").Router();
const Exercises = require("../models/exercises.js");

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;
