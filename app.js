const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyPaarser = require('body-parser'); //чтоб express понимал данные которые приходят от пользователя
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/orde');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useCreateIndex: true})    //возвращает promise
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));//смотреть что происходит с сервером в данный момент
app.use('/uploads', express.static('uploads'))
app.use(bodyPaarser.urlencoded({extended: true}));
app.use(bodyPaarser.json());
app.use(require('cors')()); //можно обрабатывать корс запросы, то есть если пользователь будет находиться на другом домене мы сможет отвечать ему сервером

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


module.exports = app;