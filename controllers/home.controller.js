const path = require('path');
const DB_PATH = path.join(__dirname + "/../data/db.json");
let db = require(DB_PATH);
const fs = require("fs");

function render(file, res){
    return enviar = res.sendFile(path.join(__dirname + `/../views/${file}.html`));
    console.log(enviar);
}

class HomeControler {
    async index(req, resp) {
        return  render('home', resp);
        // resp.send({ message:'hola que pasa '});
    }

    async about(req, resp) {
        return  render('about', resp);
        // resp.send({ message:'hola que pasa '});
    }

    async quotes(req, resp) {
        return  render('quotes', resp);
        // resp.send({ message:'hola que pasa '});
    }
    async get(req, res) {
        return res.send(db);
      }
    
      async add(req, res) {
        const { body: quote } = req;
        const lastQuote = db[db.length - 1];
        const { id } = lastQuote;
        quote.id = id + 1;
        db.push(quote);
        fs.writeFileSync(DB_PATH, JSON.stringify(db));
        return res.status(201).send();
      }
}

module.exports = new HomeControler();
