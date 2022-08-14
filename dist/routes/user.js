"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get('/', loginRequired, userController.index); // listar usuarios // SEGURANCA!
router.get('/me', _loginRequired2.default, _User2.default.show);
router.post('/', _User2.default.store);
router.put('/', _loginRequired2.default, _User2.default.update);
router.delete('/', _loginRequired2.default, _User2.default.delete);

exports. default = router;

/*
index -> lista todos os usuarios : GET
store/create -> cria um novo usuario : POST
delete -> aparaga um usuario : DELETE
show -> mostra um usuario : GET
update -> atualiza um uruario : PATCH ou PUT
*/
