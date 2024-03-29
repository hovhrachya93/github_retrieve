const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../', 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.use((req, res, next)=> {
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});
