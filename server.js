//-----------------------------------Built-in-Node-Modules-----------------------------------------//


//-----------------------------------3rd Party Modules-----------------------------------------//
// Web Server Framework(Makes building servers easier and faster)
const express = require('express');
const bodyParser = require('body-parser');

//-----------------------------------Custom Modules Party Modules-----------------------------------------//


//-----------------------------------Variables-----------------------------------------//


//Server App
const app = express();
//-----------------------------------Server Port-----------------------------------------//
const PORT = process.env.PORT || 3000;

//-----------------------------------Middleware-----------------------------------------//
app.use(express.static(`${__dirname}/public`));

//-----------------------------------HTML Routes-----------------------------------------//
// Home Route (Root)
app.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname,
    });
});

app.get('/about-us', (req, res) => {
    res.sendFile('views/about.html', {
        root: __dirname,
    });
});

app.get('/contact', (req, res) => {
    res.sendFile('views/contact.html', {
        root: __dirname,
    });
});

//-----------------------------------API Routes-----------------------------------------//

//-----------------------------------Start Server-----------------------------------------//
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));


