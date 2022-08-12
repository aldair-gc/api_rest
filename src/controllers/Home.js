import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Aldair',
      sobrenome: 'Garros',
      email: 'aldair.gc@outlook.com',
      idade: 34,
      peso: 80,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
