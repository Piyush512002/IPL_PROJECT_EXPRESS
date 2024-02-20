const express = require('express');

const path=require('path')

const app = express();




app.use(express.static(path.join(__dirname,'..','public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','forhtml', 'index.html'));
});
app.get("/matches-per-year", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','forhtml', 'matches-per-year.html'));
});


app.get("/matches-won-per-team-per-year",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml', 'matches-won-per-team-per-year.html'));
})


app.get("/extra-runs-per-team-year-2016",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml', 'extra-runs-per-team-year-2016.html'));
})

app.get("/best-economy-in-super-overs",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','best-economy-in-super-overs.html'));
})

app.get("/top-10-economical-bowlers-2015",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','top-10-economical-bowlers-2015.html'));
})

app.get("/team-won-both-toss-match",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','team-won-both-toss-match.html'));
})


app.get("/strike-rate-of-batsman",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','strike-rate-of-batsman.html'));
})

app.get("/highest-no-of-man-of-match",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','highest-no-of-man-of-match.html'));
})
app.get("/player-dismissed-another-player",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','forhtml','player-dismissed-another-player.html'));
})
// player-dismissed-another-player
const port=7000;

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})