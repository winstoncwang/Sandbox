const express = require('express');
const app = express();

//cors
const cors = require('cors');

//node
const path = require('path');

//port setup
const PORT = process.env.PORT || 3000;

//serve static resource
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//express get
app.get('/', (req, res) => {
	res.status(200);
});

const server = app.listen(PORT, () => {
	console.log(`CORS enabled on port <<${PORT}>> ----`);
	console.log(`listening on port <<${PORT}>> ----`);
});

//commonJS not ES6 because of nodejs
module.exports = server;
