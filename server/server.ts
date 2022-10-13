import * as express from 'express';
import * as bodyParser from 'body-parser';

const port = 3000;
const app = express();
const router = express.Router();

// app.use(express.static(path.join(__dirname, 'client/build')))

function loggerMiddleware(request: express.Request, response: express.Response, next) {
   console.log(`${request.method} | ${request.path}`);
   next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use('/api', router);

router.get('/bao', (req, res) => {
   res.send({ hostname: req.hostname, path: req.path, method: req.method })
})

router.get('/', (req, res) => {
   res.send('Yay or Neigh');
});

router.get('/getList', (req, res) => {
   var list = ['item1', 'item2', 'item3'];
   res.json(list);
   console.log('list itens sent');
});

router.get('/hello', (req, res) => {
   res.send('Hi :3');
});

router.post('/postIt', (req, res) => {
   res.send(req.body);
});

app.listen(port);

console.log('App listening on port 3000');