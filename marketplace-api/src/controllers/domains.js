import Models from 'helpers/repositories';

export function getAll(req, res) {
  const { Corner, Product, ProductAvailableFeature } = Models(req.tenant);
  Corner.findAll({
    include: [
      {
        model: Product,
        as: 'products',
        required: false,
        attributes: ['id', 'name', 'logo'],
        include: [
          {
            model: ProductAvailableFeature,
            as: 'availableFeatures',
          },
        ],
        where: {
          state: 'published',
        },
      },
    ],
  }).then(corners => {
    res.json(
      corners.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });

}

export function get(req, res) {
  const id = req.swagger.params.id.value;
  const { Corner, Keyword } = Models(req.tenant);

  Corner.findOne({
    where: {
      id,
    },
    order: [
      ['creation_date', 'DESC'],
    ],
    include: [
      {
        model: Keyword,
        required: false,
        as: 'keywords',
      },
    ],
/*    include: [
      {
        model: Product,
        as: 'products',
        required: false,
        include: [
          {
            model: UserProfile,
            as: 'owner',
          },
          {
            model: Resource,
            as: 'resources',
          },
          {
            model: Keyword,
            as: 'keywords',
          },
        ],
        where: {
          state: 'published',
        },
      },

      {
        model: Article,
        as: 'articles',
        required: false,
        where: {
          state: 1,
        },
        include: [
          {
            model: ItemResource,
            as: 'resources',
          },
          {
            model: Keyword,
            required: false,
            as: 'keywords',
          },
          {
            model: Corner,
            required: false,
            as: 'domains',
          },
        ],
      },
      {
        model: Bundle,
        as: 'bundles',
        required: false,
        where: {
          stateId: 1,
        },
        include: [
          {
            model: ItemResource,
            as: 'resources',
          },
          {
            model: Keyword,
            required: false,
            as: 'keywords',
          },
          {
            model: Corner,
            required: false,
            as: 'domains',
          },
        ],
      },
    ],*/
  }).then(domain => {
    if (!domain) {
      return res.status(404).json({
        message: 'domain not found',
      });
    }
    res.json(domain.parse());
  }).catch(err => {
    console.error(err);
  });
}

export function getProducts(req, res) {
  const id = req.swagger.params.id.value;
  const { Resource, Product, Corner, UserProfile, Keyword, ProductAvailableFeature } = Models(req.tenant);
  Product.findAll({
    where: {
      state: 'published',
    },
    include: [
      {
        model: UserProfile,
        as: 'owner',
      },
      {
        model: ProductAvailableFeature,
        as: 'availableFeatures',
      },
      {
        model: Resource,
        as: 'resources',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: Corner,
        as: 'domains',
        where: {
          id,
        },
      },
    ],
  }).then(products => {
    res.json(products.map(p => p.parse()));
  }).catch(err => {
    console.error(err);
  });
}

export function getArticles(req, res) {
  const id = req.swagger.params.id.value;
  const { ItemResource, Article, Corner, Keyword } = Models(req.tenant);
  Article.findAll({
    where: {
      state: 1,
    },
    include: [
      {
        model: ItemResource,
        as: 'resources',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: Corner,
        as: 'domains',
        where: {
          id,
        },
      },
    ],
  }).then(articles => {
    res.json(articles.map(p => p.parse()));
  }).catch(err => {
    console.error(err);
  });
}

export function getBundles(req, res) {
  const id = req.swagger.params.id.value;
  const { ItemResource, Bundle, Corner, Keyword } = Models(req.tenant);
  Bundle.findAll({
    where: {
      stateId: 1,
    },
    include: [
      {
        model: ItemResource,
        as: 'resources',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: Corner,
        as: 'domains',
        where: {
          id,
        },
      },
    ],
  }).then(articles => {
    res.json(articles.map(p => p.parse()));
  }).catch(err => {
    console.error(err);
  });
}
