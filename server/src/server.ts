// Importação de Objetos e Bibliotecas
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import './config/dataSource';
import routes from './router';
import "reflect-metadata";
import session, { SessionData } from 'express-session';
import AppDataSource from './config/dataSource';
import Paciente from './models/patient';
import Profissional from './models/therapist';

// Definição e Instâncias de bibliotecas, porta e IP
const PORT = Number(process.env.PORT )|| 443;
const IP = process.env.IP || '0.0.0.0';
const app = express();

// Função de Log do middleware
function loggerMiddleware(request: express.Request, response: express.Response, next: () => void) {
   console.log(`${request.method} | ${request.path}`);
   next();
}

interface MySession extends SessionData {
   loggedin?: boolean;
 }

app.use(session({
   secret: 'my-secret-key',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
}))

// Instância de Middleware e configuração inicial de servidor
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path padrão do servidor
app.get('/', (req, res) => {
   res.send('Hi');
})
app.post('/login', async (req: Request, res: Response) => {
   const { cpf, password, role } = req.body;
   console.log(cpf)
   console.log(password)
   console.log(role)
   if (role === true) {
      const credentials = await AppDataSource.manager.findOne(Paciente, {
         where: {
            cpf: cpf,
            senha: password,
         }
      });
      
      if (credentials !== null) {         
         if (cpf === credentials.cpf && password === credentials.senha) {
            const loginSession = req.session as MySession
            loginSession.loggedin = true;
            res.send(loginSession.loggedin)
         } else {
            res.send('Dados inválidos')
         }
      }
   } else {
      console.log('Buscando profissional...')
      console.log(role)
      const credentialsProf = await AppDataSource.manager.find(Profissional, {
         where: {
            cpf: cpf,
            senha: password,
         }
      })
      console.log(credentialsProf[0].cpf)

      if (credentialsProf[0] !== null) { 
         if (cpf === credentialsProf[0].cpf && password === credentialsProf[0].senha) {
            const loginSession = req.session as MySession
            loginSession.loggedin = true;
            res.redirect(`/perfil/${credentialsProf[0].idprof}`)
         } else {
            res.send('Dados inválidos')
         }
      }
   }
})

app.get('/perfil', (req: Request, res: Response) => {
   const loginSession = req.session as MySession
   if (loginSession.loggedin) {
       res.send('Profile is logged in')
   } else {
       res.redirect('/login')
   }
})
// Definição de URL
// Add headers before the routes are defined
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
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