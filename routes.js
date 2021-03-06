/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 13-5-6
 * Time: 下午8:41
 * Description: 路由
 */

var site = require('./controllers/site');
var sign = require('./controllers/sign');
var user = require('./controllers/user');
var memo = require('./controllers/memo');

var auth = require('./midderwares/auth');

module.exports = function (app) {
    app.get('/', site.index);
    app.get('/about', site.about);

    app.get('/home', auth.userRequiredRedirect, site.home);  //测试使用
//    app.get('/form', site.form);  //测试使用
//    app.get('/flatform', site.flatform);  //测试使用

    app.post('/sign/login', sign.login);
    app.post('/sign/signup', sign.signup);
    app.get('/sign/logout', sign.logout);
    app.get('/sign/findPassPage', sign.showFindPass);
    app.get('/sign/findPass', sign.findPass);

//    app.get('/signup/resetpwd', sign.resetpwd);
//    app.post('/signup/resetpwd', sign.resetpwd);

//    app.post('/memo/write', memo.write);
    app.post('/memo/add', auth.userRequiredJson, memo.add);
    app.get('/memo/delete', auth.userRequiredJson, memo.delete);
    app.get('/memo/loadall', auth.userRequiredJson, memo.loadAll);
//    app.get('/memo/waterfall', memo.waterfall);

}