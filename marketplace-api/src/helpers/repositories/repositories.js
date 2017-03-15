import Sequelize from 'sequelize';
import configuration from 'configuration';

const sequalizeByTenant = configuration.tenants.reduce((instances, tenant) => {
  const databaseConfiguration = configuration.getDatabase(tenant);
  console.log('tenant', tenant);
  console.log('databaseConfiguration', databaseConfiguration);
  const sequelize = new Sequelize(
    databaseConfiguration.database,
    databaseConfiguration.user,
    databaseConfiguration.password,
    {
      host: databaseConfiguration.host,
      port: databaseConfiguration.port || 3307,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      logging: console.log,
      createdAt: false,
      freezeTableName: true,
      updatedAt: false,
      deletedAt: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );

  const Article = sequelize.import('./models/model-article');
  const ArticleCorner = sequelize.import('./models/model-article-corner');
  const ArticleResource = sequelize.import('./models/model-article-resource');
  const ArticleKeyword = sequelize.import('./models/model-article-keyword');
  const Assignment = sequelize.import('./models/model-assignment');
  const AssignmentOrder = sequelize.import('./models/model-assignment-order');
  const AssignmentOrderFollowUps = sequelize.import('./models/model-assignment-order-follow-ups');
  const Bundle = sequelize.import('./models/model-bundle');
  const BundleCorner = sequelize.import('./models/model-bundle-corner');
  const BundleResource = sequelize.import('./models/model-bundle-resource');
  const BundleKeyword = sequelize.import('./models/model-bundle-keyword');
  const BundleComponent = sequelize.import('./models/model-bundle-component');
  const Company = sequelize.import('./models/model-company');
  const Corner = sequelize.import('./models/model-corner');
  const CornerKeyword = sequelize.import('./models/model-corner-keyword');
  const GeneralSettings = sequelize.import('./models/model-general-setting');
  const HomeCarousel = sequelize.import('./models/model-home-carousel');
  const ItemResource = sequelize.import('./models/model-item-resource');
  const ItemState = sequelize.import('./models/model-item-state');
  const Keyword = sequelize.import('./models/model-keyword');
  const Language = sequelize.import('./models/model-language');
  const PermissionRole = sequelize.import('./models/model-permission-role');
  const Platform = sequelize.import('./models/model-platform');
  const Product = sequelize.import('./models/model-product');
  const ProductAvailableFeature = sequelize.import('./models/model-product-available-feature');
  const ProductCorner = sequelize.import('./models/model-product-corner');
  const ProductFeature = sequelize.import('./models/model-product-feature');
  const ProductFollowUps = sequelize.import('./models/model-product-follow-ups');
  const ProductKeyword = sequelize.import('./models/model-product-keyword');
  const ProductLanguage = sequelize.import('./models/model-product-language');
  const ProductLink = sequelize.import('./models/model-product-link');
  const ProductTimelineStepExecutors = sequelize.import('./models/model-product-timeline-step-executors');
  const Resource = sequelize.import('./models/model-resource');
  const Role = sequelize.import('./models/model-role');
  const Timeline = sequelize.import('./models/model-timeline');
  const TimelineStep = sequelize.import('./models/model-timeline-steps');
  const User = sequelize.import('./models/model-user');
  const UserProfile = sequelize.import('./models/model-user-profile');

  (() => {
    Assignment.hasMany(AssignmentOrder, {
      foreignKey: 'idAssignment',
      as: 'items',
    });

    AssignmentOrderFollowUps.belongsTo(AssignmentOrder, {
      foreignKey: 'idAssignmentOrder',
      as: 'assignmentOrder',
    });

    Assignment.belongsTo(ItemState, {
      foreignKey: 'idState',
      as: 'state',
    });

    AssignmentOrder.belongsTo(Bundle, {
      foreignKey: 'idBundle',
      as: 'bundle',
    });

    AssignmentOrder.belongsTo(Assignment, {
      foreignKey: 'idAssignment',
      as: 'assignment',
    });

    AssignmentOrder.belongsTo(Product, {
      foreignKey: 'idProduct',
      as: 'product',
    });

    Company.hasMany(UserProfile, {
      foreignKey: 'idCompany',
      as: 'users',
    });

    UserProfile.belongsTo(Company, {
      foreignKey: 'idCompany',
      as: 'company',
    });

    User.hasOne(UserProfile, {
      foreignKey: 'idUser',
      as: 'profile',
    });

    UserProfile.belongsTo(User, {
      foreignKey: 'idUser',
      as: 'user',
    });

    UserProfile.hasMany(Product, {
      foreignKey: 'createdBy',
      as: 'products',
    });

    Product.belongsTo(UserProfile, {
      foreignKey: 'createdBy',
      as: 'owner',
    });

    Product.hasMany(ProductTimelineStepExecutors, {
      foreignKey: 'idProduct',
      as: 'timelineStepExecutors',
    });

    Product.hasMany(ProductFollowUps, {
      foreignKey: 'idProduct',
      as: 'followUps',
    });

    Product.belongsTo(Timeline, {
      foreignKey: 'idTimeline',
      as: 'timeline',
    });

    Product.hasMany(ProductFeature, {
      foreignKey: 'idProduct',
      as: 'features',
    });
    ProductFeature.belongsTo(Product, {
      foreignKey: 'idProduct',
      as: 'product',
    });

    Product.hasMany(Resource, {
      foreignKey: 'idProduct',
      as: 'resources',
    });
    Resource.belongsTo(Product, {
      foreignKey: 'idProduct',
      as: 'products',
    });

    Product.hasMany(ProductLink, {
      foreignKey: 'idProduct',
      as: 'links',
    });
    ProductLink.belongsTo(Product, {
      foreignKey: 'idProduct',
      as: 'products',
    });

    Product.hasMany(ProductAvailableFeature, {
      foreignKey: 'idProduct',
      as: 'availableFeatures',
    });

    Product.belongsToMany(Corner, {
      through: {
        model: ProductCorner,
        unique: false,
        foreignKey: 'idProduct',
      },
      as: 'domains',
      foreignKey: 'idProduct',
    });

    Corner.belongsToMany(Product, {
      through: {
        model: ProductCorner,
        unique: false,
        foreignKey: 'idCorner',
      },
      as: 'products',
      foreignKey: 'idCorner',
    });

    Product.belongsToMany(Language, {
      through: {
        model: ProductLanguage,
        unique: false,
        foreignKey: 'idProduct',
      },
      as: 'languages',
      foreignKey: 'idProduct',
    });

    Language.belongsToMany(Product, {
      through: {
        model: ProductLanguage,
        unique: false,
        foreignKey: 'idLanguage',
      },
      as: 'products',
      foreignKey: 'idLanguage',
    });

    Product.belongsToMany(Bundle, {
      through: {
        model: BundleComponent,
        unique: false,
        foreignKey: 'idComponent',
      },
      as: 'bundles',
      foreignKey: 'idComponent',
    });

    Bundle.belongsToMany(Product, {
      through: {
        model: BundleComponent,
        unique: false,
        foreignKey: 'idBundle',
      },
      as: 'products',
      foreignKey: 'idBundle',
    });

    Corner.belongsToMany(Keyword, {
      through: {
        model: CornerKeyword,
        unique: false,
        foreignKey: 'idCorner',
      },
      as: 'keywords',
      foreignKey: 'idCorner',
    });

    Keyword.belongsToMany(Corner, {
      through: {
        model: CornerKeyword,
        unique: false,
        foreignKey: 'idKeyword',
      },
      as: 'corners',
      foreignKey: 'idKeyword',
    });

    Product.belongsToMany(Keyword, {
      through: {
        model: ProductKeyword,
        unique: false,
        foreignKey: 'idProduct',
      },
      as: 'keywords',
      foreignKey: 'idProduct',
    });
    Keyword.belongsToMany(Product, {
      through: {
        model: ProductKeyword,
        unique: false,
        foreignKey: 'idKeyword',
      },
      as: 'products',
      foreignKey: 'idKeyword',
    });

    Article.belongsToMany(Corner, {
      through: {
        model: ArticleCorner,
        unique: false,
        foreignKey: 'idArticle',
      },
      as: 'domains',
      foreignKey: 'idArticle',
    });

    Corner.belongsToMany(Article, {
      through: {
        model: ArticleCorner,
        unique: false,
        foreignKey: 'idCorner',
      },
      as: 'articles',
      foreignKey: 'idCorner',
    });

    Article.belongsToMany(ItemResource, {
      through: {
        model: ArticleResource,
        unique: false,
        foreignKey: 'idArticle',
      },
      as: 'resources',
      foreignKey: 'idArticle',
    });

    ItemResource.belongsToMany(Article, {
      through: {
        model: ArticleResource,
        unique: false,
        foreignKey: 'idResource',
      },
      as: 'articles',
      foreignKey: 'idResource',
    });

    Article.belongsToMany(Keyword, {
      through: {
        model: ArticleKeyword,
        unique: false,
        foreignKey: 'idArticle',
      },
      as: 'keywords',
      foreignKey: 'idArticle',
    });
    Keyword.belongsToMany(Article, {
      through: {
        model: ArticleKeyword,
        unique: false,
        foreignKey: 'idKeyword',
      },
      as: 'articles',
      foreignKey: 'idKeyword',
    });

    UserProfile.hasMany(Article, {
      foreignKey: 'createdBy',
      as: 'articles',
    });

    Article.belongsTo(UserProfile, {
      foreignKey: 'createdBy',
      as: 'owner',
    });
    Bundle.belongsToMany(Corner, {
      through: {
        model: BundleCorner,
        unique: false,
        foreignKey: 'idBundle',
      },
      as: 'domains',
      foreignKey: 'idBundle',
    });

    Corner.belongsToMany(Bundle, {
      through: {
        model: BundleCorner,
        unique: false,
        foreignKey: 'idCorner',
      },
      as: 'bundles',
      foreignKey: 'idCorner',
    });
    Bundle.belongsToMany(ItemResource, {
      through: {
        model: BundleResource,
        unique: false,
        foreignKey: 'idBundle',
      },
      as: 'resources',
      foreignKey: 'idBundle',
    });

    ItemResource.belongsToMany(Bundle, {
      through: {
        model: BundleResource,
        unique: false,
        foreignKey: 'idResource',
      },
      as: 'bundles',
      foreignKey: 'idResource',
    });

    Bundle.belongsToMany(Keyword, {
      through: {
        model: BundleKeyword,
        unique: false,
        foreignKey: 'idBundle',
      },
      as: 'keywords',
      foreignKey: 'idBundle',
    });
    Keyword.belongsToMany(Bundle, {
      through: {
        model: BundleKeyword,
        unique: false,
        foreignKey: 'idKeyword',
      },
      as: 'bundles',
      foreignKey: 'idKeyword',
    });

    UserProfile.hasMany(Bundle, {
      foreignKey: 'createdBy',
      as: 'bundles',
    });
    Bundle.belongsTo(UserProfile, {
      foreignKey: 'createdBy',
      as: 'owner',
    });

    Role.hasMany(PermissionRole, {
      foreignKey: 'idRole',
      as: 'permissions',
    });
    User.belongsTo(Role, {
      as: 'role',
      foreignKey: 'idRole',
    });
    Timeline.hasMany(TimelineStep, {
      foreignKey: 'idTimeline',
      as: 'timelineSteps',
    });
  })();

  instances[tenant] = {
    Assignment,
    AssignmentOrder,
    AssignmentOrderFollowUps,
    ItemState,
    GeneralSettings,
    User,
    UserProfile,
    Corner,
    Product,
    ProductCorner,
    ProductFeature,
    ProductFollowUps,
    ProductKeyword,
    ProductAvailableFeature,
    ProductTimelineStepExecutors,
    Company,
    Resource,
    HomeCarousel,
    Keyword,
    Platform,
    Article,
    ItemResource,
    Bundle,
    Language,
    ProductLink,
    PermissionRole,
    Role,
    Timeline,
    TimelineStep,
  };

  sequelize.sync(
    // {force: true}
  )
    .error(error => {
      console.log('===========================');
      console.error(error);
      console.log('===========================');
      throw error;
    });
  return instances;
}, {});

export default (tenant) => sequalizeByTenant[tenant];
