var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var productModel = require('./../models/productModel');
let alert = require('alert');
const nodemailer = require("nodemailer");

router.get('/regsiter', function (req, res, next) {
    res.render('./site/regsiter');
});
router.post('/regsiter', function (req, res) {
    let hoten = req.body.hoten;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let sothich = req.body.sothich;
    let gioitinh = req.body.gioitinh;
    let date = req.body.date;

    const bcrypt = require("bcrypt");
    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(password, salt);

    let user_info = {
        fullName: hoten,
        userName: username,
        password: pass_mahoa,
        email: email,
        soThich: sothich,
        gioiTinh: gioitinh,
        ngaySinh: date
    };
    console.log(user_info)
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, user_info);
    res.redirect("/");
})

router.get('/login', function (req, res, next) {
    res.render('./site/login');
});

router.post('/login', async function (req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let sql = `SELECT * FROM users WHERE userName = ?`;
    db.query(sql, [u], (err, rows) => {
        if (rows.length <= 0) {
            res.send(`<h1 style="text-align:center; margin-top:1rem">Tài khoản hoặc mật khẩu không chính xác, vui lòng đăng nhập lại! <br><a style="margin-top:1rem;" href="/thanhvien/dangnhap">Đăng nhập</a> </h1>`);
            return;
        }
        let user = rows[0];
        console.log(user.password)
        let pass_fromdb = user.password;
        const bcrypt = require("bcrypt");
        var kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq) {
            console.log("OK");
            var sess = req.session;
            sess.daDangNhap = true;
            sess.username = user.userName;
            sess.id = user.id;
            sess.role = user.role;

            if (sess.back) {
                console.log(sess.back);
                res.redirect(sess.back);
            }
            else {
                console.log(" OK 2");
                res.redirect("/user/changepass");
                // alert("Đăng nhập thành công")
            }
        }
        else {
            console.log("Not OK");
            res.send(`<h1 style="text-align:center; margin-top:1rem">Tài khoản hoặc mật khẩu không chính xác, vui lòng đăng nhập lại! <br><a style="margin-top:1rem;" href="/thanhvien/dangnhap">Đăng nhập</a> </h1>`);
        }
    });
});



router.post('/changepass', async function (req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let pn = req.body.passwordNew;

    let sql = 'SELECT * FROM users WHERE userName= ? ';
    db.query(sql, [u], (err, rows) => {
        let user = rows[0];
        let pass_fromdb = user.password;
        let id = user.id;
        const bcrypt = require("bcrypt");
        var kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq) {
            const bcrypt = require("bcrypt");
            var salt = bcrypt.genSaltSync(10);
            var pass_mahoa = bcrypt.hashSync(pn, salt);
            let sql = 'UPDATE users SET password = ? WHERE id = ?';
            db.query(sql, [pass_mahoa, id]);
            // return;
            res.send(`<h1 style="text-align:center; margin-top:1rem">Đổi mật khẩu thành công! <br><a style="margin-top:1rem;" href="/">Trang chủ</a> </h1>`);
        }
        else {
            res.send(`<h1 style="text-align:center; margin-top:1rem">Mật khẩu không chính xác, vui lòng thử lại! <br><a style="margin-top:1rem;" href="/thanhvien/doipass">Thử lại</a> </h1>`);
        }
    });
});

router.get('/changepass', function (req, res) {
    if (req.session.daDangNhap) {
        console.log("dangthanh: " + req.session.username)
        res.render("./site/changepass", { un: req.session.username });
    }
    else {
        req.session.back = "/";
        res.redirect("/user/login");
    }
});
router.get('/thoat', function (req, res) {
    req.session.destroy();
    res.redirect("/");
});
router.get('/forgot', function (req, res) {
    res.render('./site/forgot');
});


router.post('/forgot', async function (req, res) {
    const email = req.body.email;
    console.log(req.body.email)

    let sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, rows) => {
        if (rows.length > 0) {
            let user = rows[0];
            let password = user.password;

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "thanhkolpa@gmail.com", // generated ethereal user
                    pass: "thanh1010", // generated ethereal password
                },
            });

            // send mail with defined transport object
            transporter.sendMail(
                {
                    from: "thanhkolpa@gmail.com", // sender address
                    to: email, // list of receivers
                    subject: "Khôi phục mật khẩu", // Subject line
                    text: "Khôi phục mật khẩu cho tài khoản", // plain text body
                    html: "<b>Xin chào, mật khẩu của bạn là: </b>" + password, // html body
                },
                (err) => {
                    if (err) {
                        return res.json({
                            message: "Lỗi",
                            err,
                        });
                    }
                    return res.json({
                        message: `Đã gửi mail thành công cho tài khoản `,
                    });
                }
            );
        }
        else {
            res.send(`<h1 style="text-align:center; margin-top:1rem">Email không tồn tại trên hệ thống! <br><a style="margin-top:1rem;" href="/thanhvien/doipass">Thử lại</a> </h1>`);
        }
    });
});

router.get('/sendmail', function (req, res) {
    let role = req.session.role;
    console.log(role)
    if (role == 1) {
        res.render('./site/sendmail');
    }
    else {
        res.send("Không phải admin")
    }
});

router.post('/sendmail', async function (req, res) {
    const email = req.body.email;
    const title = req.body.title;
    const noidung = req.body.noidung;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "thanhkolpa@gmail.com", // generated ethereal user
            pass: "thanh1010", // generated ethereal password
        },
    });
    // send mail with defined transport object
    await transporter.sendMail(
        {
            from: "thanhkolpa@gmail.com", // sender address
            to: email, // list of receivers
            subject: title, // Subject line
            text: title, // plain text body
            html: noidung, // html body
        },
        (err) => {
            if (err) {
                return res.json({
                    message: "Lỗi",
                    err,
                });
            }
            return res.json({
                message: `Đã gửi mail thành công cho tài khoản `,
            });
        }
    );
});


module.exports = router;