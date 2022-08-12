import { Router } from 'express';

import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> lista todos os usuarios : GET
store/create -> cria um novo usuario : POST
delete -> aparaga um usuario : DELETE
show -> mostra um usuario : GET
update -> atualiza um uruario : PATCH ou PUT
*/
