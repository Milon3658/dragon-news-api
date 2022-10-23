const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('news caterogy api runnning')
})

app.listen(port, () => {
    console.log(`news api running on server port, ${port}`);
})