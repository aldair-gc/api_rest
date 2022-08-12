import { Router } from 'express';

import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index); // listar usuarios // SEGURANCA!
router.get('/me', loginRequired, userController.show);
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios : GET
store/create -> cria um novo usuario : POST
delete -> aparaga um usuario : DELETE
show -> mostra um usuario : GET
update -> atualiza um uruario : PATCH ou PUT
*/
