// let mysql = require('mysql2');

var mongoose = require('mongoose');
var uuid = require('node-uuid');
var utility = require('utility');
var bcrypt = require('bcryptjs');
var moment = require('moment');

var User = require('./user_model');

let mongoDB = 'mongodb://127.0.0.1/xuduomiForum';

mongoose.connect(mongoDB, {
    server: {
        poolSize: 20
    }
}, function(err) {
    if (err) {
        // logger.error('connect to %s error: ', mongoDB, err.message);
        process.exit(1);
    }
});

moment.locale('zh-cn'); // 使用中文

// 格式化时间
const formatDate = function(date, friendly) {
    var date = moment(date);
    if (friendly) {
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm');
    }

};
const makeGravatar = function(email) {
    return 'http://www.gravatar.com/avatar/' + utility.md5(email.toLowerCase()) + '?size=48';
};

const bhash = function(str, callback) {
    bcrypt.hash(str, 10, callback);
};
const bcompare = function(str, hash, callback) {
    bcrypt.compare(str, hash, callback);
};


var newAndSave = function(name, loginname, pass, email, avatar_url, active, callback) {
    var user = new User();
    user.name = loginname;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.active = active || false;
    user.accessToken = uuid.v4();
    user.save(callback);
};

let opts = {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 30,
    signed: true,
    httpOnly: true
};
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'manykit0',
//     port: '3306',
// });


module.exports = {
    // mysql: {
    //     signup(username, mail, password) {
    //         let codeSql = "INSERT INTO `manykit_user` SET `username`=?, `mail`=?, `password`=?,`state` = ?";
    //         let codeParams = [username, mail, password, 0];
    //         connection.query(codeSql, codeParams, (err, result) => {
    //             if (err) {
    //                 console.log('[ERROR] - ', err.message);
    //             } else {
    //                 console.log('插入成功');
    //             }
    //         })
    //     },
    //     active(username) {
    //         let codeSql = 'UPDATE `manykit_user` SET cdkey = ?,state = ? WHERE `username` = ?';
    //         let codeParams = ['null', "1", username];
    //         connection.query(codeSql, codeParams, (err, result) => {
    //             if (err) {
    //                 console.log('[ERROR] - ', err.message);
    //             } else {
    //                 console.log('成功激活');
    //             }
    //         })
    //     },
    //     resetPass(username, password) {
    //         let codeSql = 'UPDATE `manykit_user` SET password = ? WHERE `username` = ?';
    //         let codeParams = [password, username];
    //         connection.query(codeSql, codeParams, (err, result) => {
    //             if (err) {
    //                 console.log('[ERROR] - ', err.message);
    //             } else {
    //                 console.log('密码修改成功');
    //             }
    //         })
    //     }
    // },
    mongo: {
        test() {
            console.log(1111111111111111111)
        },
        signup(loginname, email, password) {
            let passhash = bcrypt.hashSync(password, 10);
            console.log(passhash + '==================');
            let avatarUrl = makeGravatar(email);
            newAndSave(loginname, loginname, passhash, email, avatarUrl, false, function(err, result) {
                if (err) {
                    console.log('新增错误');
                    return;
                } else {
                    console.log(result);
                }
            })

        },
        active(loginName) {
            User.findOne({
                'loginname': new RegExp('^' + loginName + '$', "i")
            }, function(err, user) {
                if (err) {
                    console.log('查找错误');
                    console.log(err);
                    return;
                } else {
                    console.log('查找成功');
                    console.log(user);
                    user.active = true;
                    user.save(function(err) {
                        if (err) {
                            console.log('激活错误');
                            console.log(err);
                        }
                    });
                }
            })
        },
        updatePass(email, password) {
            User.findOne({
                'email': new RegExp('^' + email + '$', "i")
            }, function(err, user) {
                if (err) {
                    console.log('查找错误');
                    console.log(err);
                    return;
                } else {
                    console.log('查找成功');
                    console.log(user);
                    let passhash = bcrypt.hashSync(password, 10);
                    user.pass = passhash;
                    user.save(function(err) {
                        if (err) {
                            console.log('修改密码错误');
                            console.log(err);
                        }
                    });
                }
            })
        },
        getID(loginname, callback) {
            let condition;
            if (loginname.indexOf('@') !== -1) {
                condition = {
                    'email': loginname
                }
            } else {
                condition = {
                    'loginname': new RegExp('^' + loginname + '$', "i")
                }
            }
            console.log(condition);

            User.findOne(condition, function(err, user) {
                if (err) {
                    console.log('查找错误');
                    console.log(err);
                    return;
                } else {
                    console.log('查找成功');
                    let id = user['_id'];
                    callback(id)
                }
            })
        },


    }

}