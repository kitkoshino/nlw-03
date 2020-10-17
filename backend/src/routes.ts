import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);
//Query params: filtro,busca,paginação... (http://.../users?...) - request.query
//Route params: identificar um recurso/usuário (http://.../users/id) - request.params
//Body: corpo da requisição, enviar dados complexos,de forms,etc - request.body

//MVC 
  //Model (representatividade de um dado,entidade)
  //Views (como sao disponibilizados pro front)
  //Controllers (logica das rotas)

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);
export default routes;
