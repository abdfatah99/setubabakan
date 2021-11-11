const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
let instance = null;


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "museum_setu_babakan"
    //semua variabel didapat dari file '.env'
});

// Untuk menampung kategori-------------------------------------------
// var kategori = [];
// let cek_kategori_tamu = "SELECT nama_kategori FROM kategori_tamu";
// db.query(cek_kategori_tamu, async (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     result.forEach(element => {
//         kategori.push(element.nama_kategori);
//     });

//     console.log(kategori);
// });
//End------------------------------------------------------------------


class DbService {
    // get static database
    static getDbService() {
        return instance ? instance : new DbService;
    }

    async cekAdmin(req, res) {
        try {
            // const namaAdmin = ;

        } catch (err) {
            res.redirect('/')
        }
    };

    //cekKategori----------------------------------
    // async cekKategori(req, res) {
    //     try {
    //         const namaklt = req.params.nama_klt;
    //         var ambilnama = "";
    //         let cek_klt = "SELECT * FROM klt_bsn WHERE nama_klt=?"

    //         db.query(cek_klt, [namaklt], async (err, results) => {
    //             if (err) {
    //                 // console.log(err);
    //                 res.redirect('/error');
    //             } else {

    //                 if (results.length == 0) {
    //                     res.redirect('/form_tamu');
    //                 }
    //                 console.log(results);
    //                 ambilnama = results[0].nama_klt;
    //                 console.log(ambilnama)

    //                 res.render('index', { nama_klt: ambilnama, kategori_tamu: kategori });


    //             }

    //         });
    //     } catch (err) {
    //         res.redirect('/error');
    //     }

    // };
    // end cekKategori------------------------------


}
module.exports = DbService;