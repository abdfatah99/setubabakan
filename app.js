const express = require("express"); // digunakan untuk melakukan koneksi
const mysql = require("mysql"); // digunakan untuk melakukan koneksi ke database
const dotenv = require('dotenv'); // agar bisa menggunakan file enviroment
const path = require("path"); // agar bisa menampilkan file
const session = require("express-session");


dotenv.config({ path: './.env' }); // memanggil file enviroment '.env'
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "museum_setu_babakan"
    //semua variabel didapat dari file '.env'
});


const publicDirectory = path.join(__dirname, './public'); // mencari file yang akan digunakan dalam website seperti css, html, js, dll
app.use(express.static(publicDirectory)); // memanggil file yang telah dicari



// Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

//parse JSON bodies (as sent by API clients)
app.use(express.json());


app.set("view engine", "hbs"); // menunjukkan file html

//Melakukan koneksi ke database
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected...");
    }
});

// Session
app.use(session({
    secret: "my-secret-session",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3 * 60 * 60 * 1000 // Days * Hours * Minutes * Seconds * 1000
    }
}));

// Routers
app.use('/', require('./router/pages')); //menampilkan website

app.listen(5001, () => {
    console.log('Server started on Port 5001'); // menjalankan server di port 5001
});