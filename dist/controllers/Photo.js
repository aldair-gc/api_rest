"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multer4.default).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await _Photo2.default.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({ errors: ['id nao corresponde a um aluno registrado'] });
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      await _Photo2.default.destroy({ where: { aluno_id: id } });
      return res.json({ photoDeleted: true });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: e.errors.map((er) => er.message) });
    }
  }
}

exports. default = new PhotoController();
