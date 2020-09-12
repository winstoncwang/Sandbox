const express = require('express');
const app = express();

//cors
const cors = require('cors');

//node
const path = require('path');

//port setup
const PORT = process.env.PORT || 5000;

//serve static resource
express()
	.use(express.static(path.join(__dirname, 'public')))
	.use(cors())
	.get('/', (req, res) => res.status(200).render('index'))
	.listen(PORT, () => console.log(`listening on port <<${PORT}>> ----`));

//commonJS not ES6 because of nodejs
//module.exports = server;
