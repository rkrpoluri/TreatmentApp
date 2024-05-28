const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Changed to 3001

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
