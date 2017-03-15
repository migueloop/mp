import Models from 'helpers/repositories';

export function getAll(req, res) {
  const { Company, Article, UserProfile, ItemResource, Keyword } = Models(req.tenant);
  Article.findAll({
    where: {
      state: 1,
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
      {
        model: UserProfile,
        as: 'owner',
        include: [
          {
            model: Company,
            as: 'company',
          },
        ],
      },
    ],
  }).then(articles => {
    res.json(
      articles.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });

}

export function get(req, res) {
  const idArticle = req.swagger.params.idArticle.value;
  const { Article, ItemResource, Keyword, User, Company, Corner, UserProfile } = Models(req.tenant);

  Article.findOne({
    where: {
      id: idArticle,
    },
    include: [
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: ItemResource,
        as: 'resources',
      },
      {
        model: UserProfile,
        as: 'owner',
        include: [
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['password'],
            },
          },
          {
            model: Company,
            as: 'company',
          },
        ],
      },
      {
        model: Corner,
        as: 'domains',
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
