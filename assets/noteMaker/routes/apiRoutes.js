const noteData = require ("../db/db");

console.log(noteData);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(tableData);
    });
}