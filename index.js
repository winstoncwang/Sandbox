const express = require('express');
const cors = require('cors');
//node
const path = require('path');
//port setup
const PORT = process.env.PORT || 5000;

const app = express();

//serve static resource
app
	.use(cors())
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => res.status(202));

const server = app.listen(PORT, () =>
	console.log(`listening on port <<${PORT}>> ----`)
);

//commonJS not ES6 because of nodejs
module.exports = server;
