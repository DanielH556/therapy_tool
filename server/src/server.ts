// Importação de Objetos e Bibliotecas
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './config/dataSource';
import routes from './router';
import "reflect-metadata";

// Definição e Instâncias de bibliotecas, porta e IP
const PORT = Number(process.env.PORT )|| 443;
const IP = process.env.IP || '0.0.0.0';
const app = express();

// Função de Log do middleware
function loggerMiddleware(request: express.Request, response: express.Response, next: () => void) {
   console.log(`${request.method} | ${request.path}`);
   next();
}

// Instância de Middleware e configuração inicial de servidor
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path padrão do servidor
app.get('/', (req, res) => {
   res.send('Hi');
})

// Definição de URL
// app.use(cors())
// Add headers before the routes are defined
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', 'true');

   // Pass to next layer of middleware
   next();
});

// Instância de rotas da aplicação
app.use('/', routes)

app.use((req, res) => {
   res.status(404)
});

// Porta utilizada
app.listen(PORT, IP, () => {
  console.log(`Server listening on ${IP}:${PORT}`);
});