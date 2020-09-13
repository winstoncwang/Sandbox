const express = require('express');
//node
const path = require('path');
//port setup
const PORT = process.env.PORT || 5000;

const app = express();

//serve static resource
app
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => res.send(path.join(__dirname, 'public', 'index')))
	.listen(PORT, () => console.log(`listening on port <<${PORT}>> ----`));

//commonJS not ES6 because of nodejs
//module.exports = server;
