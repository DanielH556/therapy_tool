// Importação de Objetos e Bibliotecas
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './config/dataSource';
import routes from './router';
import "reflect-metadata";

// Definição e Instâncias de bibliotecas, porta e IP
const PORT = Number(process.env.PORT )|| 3000;
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
app.use(cors())

// Instância de rotas da aplicação
app.use('/', routes)

app.use((req, res) => {
   res.status(404)
});

// Porta utilizada
app.listen(PORT, IP, () => {
  console.log(`Server listening on ${IP}:${PORT}`);
});