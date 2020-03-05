const noteData = require ("../db/db");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function(req, res) {
          noteData.push(req.body);
          res.json(true);
      });
    app.delete("/api/notes/:id", function(req, res){
        const id = req.params.id;

        noteData.forEach(function(note, index){
            if (note.id === id){
                noteData.splice(index, 1);
            }
        })
        res.json(true);
    });

}
