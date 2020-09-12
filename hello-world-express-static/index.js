const express = require('express');
const app = express();

//node
const path = require('path');

//port setup
const PORT = process.env.PORT || 3000;

//serve static resource
app.use(express.static(path.join(__dirname, 'public')));

//express get
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, () => {
	console.log(`listening on port <<${PORT}>> ----`);
});
