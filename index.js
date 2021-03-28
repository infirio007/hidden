const express = require("express")
const mailer = require("nodemailer")
const fs = require("fs")
const app = express()

app.set("views", "views")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/home", (req, res) => {
    res.render("home.ejs")
})

app.get("/about-us", (req, res) => {
    res.render("about.ejs")
})

app.post("/mail", (req, res) => {
    const boby = req.body
    // var transporter = mailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'node.mailer@gmail.com',
    //       pass: 'my_mailer'
    //     }
    // });
    
    // var mailOptions = {
    //     from: 'node.mailer@gmail.com',
    //     to: 'node.mailer@gmail.com',
    //     subject: `${body.name} ${body.service} case`,
    //     text: `name: ${body.name},
    //            case: ${body.service}
    //            phone-number: ${body.phone_number},
    //            detailes: ${body.details}`
    // };
    
    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    // });

    res.redirect("/")
})

app.get("/read/:query", (req, res) => {
    const jsonfile = fs.readFileSync("./public/js/read.json", "utf-8")
    const case_details = JSON.parse(jsonfile);
    if (req.params.query in case_details) {
        // console.log(case_details[req.params.query])
        const details = case_details[req.params.query]
        res.render("read.ejs", { details })
    } else {
        res.send("<h1>page not found</h1>")
        console.log(req.params.query)
    }
})

app.listen(3000, () => {
    console.log("listening at port 3000...")
})