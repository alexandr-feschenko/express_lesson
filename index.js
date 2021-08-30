const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');

// Routes
const addRoutes = require('./routes/add');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');

const app = express();
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

// Add express-handlebars to the project
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// Add static
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
// Registrate routes
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});