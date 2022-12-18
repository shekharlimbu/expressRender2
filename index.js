const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started..`));

app.get('/', (req,res) => {
    res.json({
        "greeting":"hello"
    })
});

app.post('/:name', (req,res) => {
    let name = req.params.name;

    console.log(name);

    res.json({
        'Namaste':name
    })
});
