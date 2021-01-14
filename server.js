const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const CONFIG = require('./config/config.json');
require('./dbClass')

const port = process.env.PORT || CONFIG.port;
const routes = require('./routes');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use('/',routes);

app.listen(port, () => {
    console.log("********************* Server started *********************");
})

module.exports = app;