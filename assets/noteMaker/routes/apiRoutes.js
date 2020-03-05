const noteData = require ("../db/db");

let nextID = 0;
noteData.forEach(function(element){
    if(element.id >= nextID){
        nextId = element.id+1;
    }
})

function getNextID(){
    return nextID++;
}
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
        console.log("get"+noteData);

    });

    app.post("/api/notes", function(req, res) {
          noteData.push(req.body);
          res.json(true);
          console.log(noteData);

      });
    app.delete("/api/notes/:id", function(req, res){
        console.log(req.id)
    });

}
