import Models from 'helpers/repositories';

export function getAll(req, res) {
  const { Bundle, ItemResource, Keyword } = Models(req.tenant);
  Bundle.findAll({
    where: {
      state_id: 1,
    },
    order: [
      ['creation_date', 'DESC'],
    ],
    include: [
      {
        model: ItemResource,
        as: 'resources',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
    ],
  }).then(bundles => {
    res.json(
      bundles.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });
}

export function get(req, res) {
  const id = req.swagger.params.idBundle.value;
  const { Bundle, Product, Corner, Keyword, UserProfile, ItemResource, Resource } = Models(req.tenant);

  Bundle.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Product,
        as: 'products',
        include: [
          {
            model: Resource,
            as: 'resources',
          },
        ],
      },
      {
        model: Corner,
        as: 'domains',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: UserProfile,
        as: 'owner',
      },
      {
        model: ItemResource,
        as: 'resources',
      },
    ],
  }).then(article => {
    if (!article) {
      return res.status(404).json({
        message: 'product not found',
      });
    }
    res.json(article.parse());
  }).catch(err => {
    console.error(err);
  });
}
