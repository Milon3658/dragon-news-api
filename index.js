const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors())

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('news caterogy api runnning')
});

app.get('/category', (req, res) => {
    res.send(categories);
});
app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id === 8) {
        res.send(news)
    } 
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find( n=> n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log(`news api running on server port, ${port}`);
});