var cors = require('cors');
const express = require('express')
const app = express()
const port = 3000

app.use(cors({ origin: 'https://trello.com' }));

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Node Version: ${process.version}`);
  console.log(`Trello Power-Up Server listening on port ${port}`);
})
