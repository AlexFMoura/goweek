const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// try{
//     mongoose.connect('mongodb://goweek:goweek123@ds123645.mlab.com:23645/goweek-alex', 
//     {
//         useNewUrlParser: true
//     });  
// }catch(error){
//     console.log('Erro ao carregar mongo', error);
// };
  
try{
    mongoose.connect('mongodb://localhost:27017/goweek', {
        useNewUrlParser: true
    });
    console.log('Conectado mongo');
}catch(error){
    console.log('erro', error);
}

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});