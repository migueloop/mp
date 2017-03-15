import Models from 'helpers/repositories';

export function getAll(req, res) {
  const { HomeCarousel} = Models(req.tenant);
  HomeCarousel.findAll({}).then(carousel => {
    res.json(
      carousel.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });
}

export function get(req, res) {
  const { HomeCarousel} = Models(req.tenant);
  HomeCarousel.findAll({}).then(carousel => {
    res.json(
      carousel.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });
}
