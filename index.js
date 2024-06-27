const express = require('express');
const bodyParser = require('body-parser');
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const UserModel = require("./model/userModel");
require("./database");

const app = express();
const port = 3001;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// let loginEmail, loginPassword, signupName, signupEmail, signupPassword, adminEmail, adminPassword;
// const correctAdminEmail = 'a@gmail.com';
// const correctAdminPassword = '123';

function loginMiddleware(req, res, next) {
    loginEmail = req.body.loginEmail;
    loginPassword = req.body.loginPassword;
    next();
}

app.get('/', (req, res) => {
    res.render('client/index');
});

app.get('/start', (req, res) => {
    res.render('login/login');
});

app.use(loginMiddleware);

app.post('/signup', async (req, res) => {
    try {
        const data = {
            signupName: req.body.userName,
            signupEmail: req.body.signupEmail,
            signupPassword: req.body.signupPassword
        };
        console.log(data);
        const post = await UserModel.create(data);
        console.log(post);
        console.log("Post Added");
        res.redirect('/start'); // Redirect after signup
    } catch (error) {
        console.log(error);
        res.status(500).send("Error signing up");
    }
});

app.get('/check', (req, res) => {
    res.render('client/edit');
});

app.get('/admin', (req, res) => {
    res.render('login/admin-login');
});

app.post('/login', async(req, res) => {


    try {
        const loginEmail = req.body.loginEmail;
        const loginPassword = req.body.loginPassword;

        // Fetch the user from database based on loginEmail
        const user = await UserModel.findOne({ signupEmail: loginEmail }).exec();

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Compare passwords
        if (user.signupPassword === loginPassword) {
            // Passwords match, login successful
            res.redirect('/edit');
        } else {
            // Passwords do not match
            res.redirect('/start'); // Redirect back to login page or handle invalid login
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error logging in");
    }
});


    // try {
    //     const data = {
    //         loginEmail: req.body.loginEmail,
    //         loginPassword: req.body.loginPassword
    //     };
        // console.log(data);
        // const post = await UserModel.find(signupEmail);
        // console.log(post);

    //     console.log("Post Added");
    //     res.redirect('/start'); // Redirect after signup
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send("Error signing up");
    // }


app.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

app.get('/test', (req, res) => {
    res.render('client/edit');
});

app.get('/heado', (req, res) => {
    res.render('client/templates/heado/index');
});

app.get('/portfolio', (req, res) => {
    res.render('client/templates/portfolio/index');
});

app.get('/agency',(req,res)=>{
    res.render('client/templates/agency/index');
})

app.listen(port, () => {
    console.log(`server is runing at ${port}`);
});
