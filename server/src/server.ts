// Importação de Objetos e Bibliotecas
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import patientRouter from './routes/patient-router';

// Definição e Instâncias de bibliotecas e porta
const port = 3000;
const app = express();
const router = express.Router();

// app.use(express.static(path.join(__dirname, 'client/build')))

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

// Path padrão
app.get('/', (req, res) => {
   res.send('Hi :3');
})

// Definição de URL
app.use(cors({
   origin: ['http://localhost:3000']
}))

// Instância de rotas da aplicação
app.use('/api', patientRouter)

app.use((req, res) => {
   res.status(404)
})

// app.use('/api', router);

// router.get('/bao', (req, res) => {
//    res.send({ hostname: req.hostname, path: req.path, method: req.method })
// })

// router.get('/', (req, res) => {
//    res.send('Yay or Neigh');
// });

// router.get('/getList', (req, res) => {
//    var list = ['item1', 'item2', 'item3'];
//    res.json(list);
//    console.log('list itens sent');
// });

// router.get('/hello', (req, res) => {
//    res.send('Hi :3');
// });

// router.post('/postIt', (req, res) => {
//    res.send(req.body);
// });

// Porta utilizada
app.listen(port);

console.log('App listening on port 3000');