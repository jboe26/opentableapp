var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

var table_limit = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Gary",
        phone: "555-555-5555",
        email: "person@email.com",
        id: "sgdhdghdfhdfgsh"
    },
    {
        name: "Buddy-Guy",
        phone: "555-555-5556",
        email: "me@myself.com",
        id: "jhfjhfjdfhdjfdk"
    },
    {
        name: "Mrs. Woman",
        phone: "555-555-5557",
        email: "thing@stuff.com",
        id: "jdhksdhkfdhkjfh"
    }
];

var waitlist = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/reservations", function (req, res) {

    var newReservation = req.body;

    // newReservation.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
