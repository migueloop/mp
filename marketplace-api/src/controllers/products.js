import Models from 'helpers/repositories';
import ProabonoDriver from 'helpers/repositories/drivers/proabono';
import configuration from 'configuration';
export function getLatest(req, res) {
  const { Company, Product, UserProfile, Resource, ProductAvailableFeature, ProductFollowUps, Timeline, TimelineStep } = Models(req.tenant);
  const amount = req.swagger.params.amount ? parseInt(req.swagger.params.amount.value, 10) : 5;
  Product.findAll({
    where: {
      state: 'published',
    },
    limit: amount,
    order: [
      ['creation_date', 'DESC'],
    ],
    include: [
      {
        model: ProductAvailableFeature,
        as: 'availableFeatures',
      },
      {
        model: ProductFollowUps,
        as: 'followUps',
      },
      {
        model: Timeline,
        as: 'timeline',
        include: [
          {
            model: TimelineStep,
            as: 'timelineSteps',
          },
        ],
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
      {
        model: Resource,
        as: 'resources',
      },
    ],
  }).then(products => {
    res.json(
      products.map(p => p.parse())
    );
  }).catch(err => {
    console.error(err);
  });
}

export function getAll(req, res) {
  const { Company, Product, UserProfile, Resource, ProductAvailableFeature, Keyword, ProductTimelineStepExecutors, ProductFollowUps } = Models(req.tenant);
  Product.findAll({
    where: {
      state: 'published',
    },
    order: [
      ['creation_date', 'DESC'],
    ],
    include: [
      {
        model: ProductTimelineStepExecutors,
        as: 'timelineStepExecutors',
      },
      {
        model: ProductAvailableFeature,
        as: 'availableFeatures',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: ProductFollowUps,
        as: 'followUps',
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
      {
        model: Resource,
        as: 'resources',
      },
    ],
  })
  .then(products => res.json(products.map(p => p.parse())))
  .catch(err => console.error(err));
}

export function get(req, res) {
  const idProduct = req.swagger.params.idProduct.value;
  const { Language, Resource, Bundle, Keyword, User, Company, Product, ProductLink, Corner, ProductFeature, ProductFollowUps, UserProfile, ProductAvailableFeature, ProductTimelineStepExecutors } = Models(req.tenant);

  Product.findOne({
    where: {
      id: idProduct,
    },
    order: [
      ['creation_date', 'DESC'],
    ],
    include: [
      {
        model: ProductLink,
        as: 'links',
      },
      {
        model: ProductFeature,
        as: 'features',
      },
      {
        model: Keyword,
        as: 'keywords',
      },
      {
        model: Bundle,
        as: 'bundles',
      },
      {
        model: Resource,
        as: 'resources',
      },
      {
        model: Language,
        as: 'languages',
      },
      {
        model: ProductFollowUps,
        as: 'followUps',
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
        model: ProductTimelineStepExecutors,
        as: 'timelineStepExecutors',
      },
      {
        model: ProductAvailableFeature,
        as: 'availableFeatures',
      },
      {
        model: Corner,
        as: 'domains',
      },
    ],
  }).then(product => {
    if (!product) {
      return res.status(404).json({
        message: 'product not found',
      });
    }
    res.json(product.parse());
  }).catch(err => {
    console.error(err);
  });
}

export function getOffers( req, res, next) {
  const id = req.swagger.params.idProduct.value;
  const { Product } = Models(req.tenant);
  const proabonoDriver = new ProabonoDriver(req.tenant);
  const tenantConfig = configuration.get(req.tenant);
  Product.findOne({
    where: {
      id,
    },
  })
    .then(product => {
      if (!product.idBilling) {
        return Promise.resolve(false);
      }
      return proabonoDriver.get({
        endpoint: `Sub/OfferFeatures?idFeature=${product.idBilling}&extra=Offer&SizePage=1000`,
      }, false);
    })
    .then(offers => {
      if (!offers) {
        return Promise.resolve([]);
      }
      return Promise.all(offers.Items.map(item => (
        proabonoDriver.get({
          endpoint: `v1/Offer?IdOffer=${item.Offer.Id}`,
        })
      )));
    })
    .then(offers => {
      res.json(offers.map(offer => ({
        id: offer.Id,
        name: offer.Name,
        amountRecurrence: offer.AmountRecurrence,
        price: offer.Pricing,
        currency: offer.Currency,
        links: offer.Links.concat({
          rel: 'subscribe',
          href: `${tenantConfig.billing.endpoint.front}subscribe?refo=${offer.ReferenceOffer}`,
        }).reduce((links, link) => {
          links[link.rel] = link.href;
          return links;
        }, {}),
        unitRecurrence: offer.UnitRecurrence,
        products: offer.Features.map(feature => ({
          id: parseInt(feature.ReferenceFeature, 10),
          name: feature.TitleLocalized,
          type: feature.TypeFeature,
          isIncluded: feature.IsIncluded,
          isEnabled: feature.IsEnabled,
        })),
      })));
    })
    .catch(next);
}
