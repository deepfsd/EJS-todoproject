import bodyParser from 'body-parser';
import { render } from 'ejs';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const d = new Date();
const day = d.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

const m = new Date();
const month = m.getMonth();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const y = new Date();
const year = y.getFullYear();

const da = new Date();
const date = da.getDate();

if (day != day + 1) {
    var items = [];
    var items2 = [];
}
else {
    var items = [];
    var items2 = [];
}

app.get("/", (req, res) => {
    res.render("index.ejs", { task: items, Weekday: dayNames[day], Month: monthNames[month], Day: date, Year: year });
});

app.get("/today", (req, res) => {

    res.render("index.ejs", { task: items, Weekday: dayNames[day], Month: monthNames[month], Day: date, Year: year });

});

app.get("/work", (req, res) => {
    res.render("work.ejs", { task2: items2, Year: year });
})


app.post("/submit", (req, res) => {
    var item = req.body["task"];
    items.push(item);
    const url = req.url;
    res.redirect('/today');
});

app.post("/submit2", (req, res) => {
    var item2 = req.body["task2"];
    items2.push(item2);
    const url = req.url;
    res.redirect('/work');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});