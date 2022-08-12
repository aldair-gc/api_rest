class HomeController {
  async index(req, res) {
    res.send('Home Page');
  }
}

export default new HomeController();
