var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var homeController = require('./controllers/homeController'),
    pro_productController=require('./controllers/pro_productController'),
    cat_productController = require('./controllers/cat_productController'),
    productController = require('./controllers/productController');

var handleLayoutMDW = require('./middle-wares/handleLayout'),
    accountController = require('./controllers/accountController'),
    cartController = require('./controllers/cartController');
var passportRoute = require('./controllers/passportRoute');
var app = express();
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');
MySQLStore.connect(configDB.url);
require('./config/passport')(passport);


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: express_handlebars_sections(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n);
        }
    }
}));
app.use(morgan('dev')); // sử dụng để log mọi request ra console
app.use(cookieParser()); // sử dụng để đọc thông tin từ cookie
app.use(bodyParser()); // lấy thông tin từ form HTML

app.set('view engine', 'hbs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session({ secret: 'xxxxxxxxxxxxx' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./controllers/passportRoute.js')(app, passport);

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'tinh',
    database: 'qllaptop',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayoutMDW);
app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use('/home', homeController);
app.use('/category', cat_productController);
app.use('/producer', pro_productController);
app.use('/account', accountController);
app.use('/product', productController);



app.listen(3000, () => {
    console.log('Site running on port 4000');
});