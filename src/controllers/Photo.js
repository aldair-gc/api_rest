import multer from 'multer';
import multerConfig from '../config/multer';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });

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
      await Photo.destroy({ where: { aluno_id: id } });
      return res.json({ photoDeleted: true });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: e.errors.map((er) => er.message) });
    }
  }
}

export default new PhotoController();
