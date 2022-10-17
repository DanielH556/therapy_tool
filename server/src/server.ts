import * as express from 'express';
import * as bodyParser from 'body-parser';
// import * as patientRouter from './routes/patient-router';
import * as cors from 'cors';
import patientRouter from './routes/patient-router';

const port = 3000;
const app = express();
const router = express.Router();

// app.use(express.static(path.join(__dirname, 'client/build')))

function loggerMiddleware(request: express.Request, response: express.Response, next: () => void) {
   console.log(`${request.method} | ${request.path}`);
   next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('Hi :3');
})

app.use(cors({
   origin: ['http://localhost:3000']
}))

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

app.listen(port);

console.log('App listening on port 3000');