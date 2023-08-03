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
const month = m.getMonth() + 1;
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const y = new Date();
const year = y.getFullYear();

app.get("/", (req, res) => {

    res.render("index.ejs",{task: items, Weekday: dayNames[day], Month: monthNames[month],Day: day, Year: year});

});
app.get("/today", (req, res) => {

    res.render("index.ejs",{task: items, Weekday: dayNames[day], Month: monthNames[month],Day: day, Year:year});

});

app.get("/work", (req, res)=>
{
    res.render("work.ejs", {task2: items2, Year: year});
})

if(day != day + 1)
{
    var items = [];
    var items2 = [];
}
else{
    var items = [];
    var items2 = [];
}

app.post("/submit", (req, res) => {

    if(req.body["task"] === "")
    {
       
        res.render("index.ejs",{task: items, Weekday: dayNames[day], Month: monthNames[month],Day: day, Year: year})
        
    }
    else
    {
        var item = req.body["task"];
        items.push(item);
        
        res.render("index.ejs", {task: items, Weekday: dayNames[day], Month: monthNames[month],Day: day, Year: year});
    }

});

app.post("/submit2", (req, res) => {

    if(req.body["task2"] === "")
    {
       
        res.render("work.ejs",{task2: items2, Year: year})
        
    }
    else
    {
        var item2 = req.body["task2"];
        items2.push(item2);
        
        res.render("work.ejs", {task2: items2, Year: year});
    }

});



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});