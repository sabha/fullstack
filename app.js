const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("Welcome to Frontend Master Full stack Engg course.");
});

app.listen(port, () => console.log(`Example App listening on port - ${port}`));


