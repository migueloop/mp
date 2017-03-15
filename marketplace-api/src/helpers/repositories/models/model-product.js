import { cleanObject } from 'helpers';
import { PRODUCT } from 'helpers/constants';

export default (sequalize, DataTypes) => {
  return sequalize.define('product', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('MobileApp', 'SaaS', 'MaterialNDevice', 'Service', 'Line'),
      allowNull: true,
    },
    state: {
      type: DataTypes.ENUM('draft', 'pending', 'published', 'deleted'),
      allowNull: true,
      defaultValue: 'draft',
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    baseline: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    createdAt: {
      field: 'creation_date',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lastUpdate: {
      field: 'last_update',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    publicationDate: {
      field: 'publication_date',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    submitObservation: {
      field: 'submit_observation',
      type: DataTypes.TEXT,
      allowNull: true,
    },
    logo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    specification: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    editorDescription: {
      field: 'editor_description',
      type: DataTypes.TEXT,
      allowNull: true,
    },
    editorLogo: {
      field: 'editor_logo',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    editorHomepage: {
      field: 'editor_homepage',
      type: DataTypes.STRING,
      allowNull: true,
    },
    editorLegalMentions: {
      field: 'editor_legal_mentions',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idBilling: {
      field: 'id_billing',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    billingToken: {
      field: 'billing_token',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idTimeline: {
      field: 'id_timeline',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idAssignmentOptionForm: {
      field: 'id_assignment_option_form',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    instanceMethods: {
      getEditorLogoUrl: function getEditorLogoUrl() {
        const editorLogo = this.getDataValue('editorLogo');
        const resources = this.getDataValue('resources');
        if (editorLogo && resources) {
          const resource = resources.find(r => r.id === editorLogo);
          return `/public/uploads/products/${this.getDataValue('id')}/${resource.name}`;
        }
        return '/public/images/placeholders/product.png';
      },
      getLogoUrl: function getLogoUrl() {
        const idLogo = this.getDataValue('logo');
        const resources = this.getDataValue('resources');
        if (!resources || !idLogo) {
          return '/public/images/placeholders/product.png';
        }
        const resource = resources.find(r => r.id === idLogo);
        return `/public/uploads/products/${this.getDataValue('id')}/${resource.name}`;
      },
      getUrl: function getUrl() {
        const availableFeatures = this.getDataValue('availableFeatures');
        if (!availableFeatures) {
          return `/product/${this.getDataValue('alias')}`;
        }

        const lowest = PRODUCT.AVAILABLE_FEATURES
        // Sort by order asc
          .sort((a, b) => a.order > b.order)
          // find first feature on the product
          .find(productFeature => (
            availableFeatures.find(innerProductFeature =>
              innerProductFeature.idFeature === productFeature.id
            )
          )) || 'summary';
        return `/product/${this.getDataValue('alias')}/${lowest.route}`;
      },
      parseFollowUps: function parseFollowUps() {
        const steps = this.getDataValue('followUps');
        if (!steps) {
          return [];
        }
        return steps.reduce((followsUpsTimelines, step) => {
          const timelines = followsUpsTimelines.concat([]);
          let timeline = timelines.find(t => t.id === step.idTimeline);
          if (!timeline) {
            timeline = {
              id: step.idTimeline,
              idFollowUpTask: step.idFollowUpTask,
              steps: [],
            };
            timelines.push(timeline);
          }
          timeline.steps = timeline.steps.concat([{
            id: step.idStep,
            includeProductOwner: step.includeProductOwner,
            userIds: step.userIds ? step.userIds.split(',').map(id => parseInt(id, 10)) : [],
            roleIds: step.roleIds ? step.roleIds.split(',').map(id => parseInt(id, 10)) : [],
          }]);
          return timelines;
        }, []);
      },
      parseTimelineStepExecutors: function parseTimelineStepExecutors() {
        const timelineStepExecutors = this.getDataValue('timelineStepExecutors') || [];
        const newExecutorSteps = timelineStepExecutors.reduce((p, n) => {
          const previouslyAddedStepMatch = p.find(step => step.idTimelineStep === n.idTimelineStep);
          if (previouslyAddedStepMatch) {
            const matchIndex = p.indexOf(previouslyAddedStepMatch);
            if (n.executorType === 'role') {
              p[matchIndex].roleIds.push(n.idExecutor);
            }
            if (n.executorType === 'user') {
              p[matchIndex].userIds.push(n.idExecutor);
            }
            if (n.executorType === 'product_owner') {
              p[matchIndex].includeProductOwner = true;
            }
          } else {
            const includeProductOwner = n.executorType === 'product_owner';
            const newEntry = {
              idTimelineStep: n.idTimelineStep,
              roleIds: n.executorType === 'role' ? [n.idExecutor] : [],
              userIds: n.executorType === 'user' ? [n.idExecutor] : [],
              includeProductOwner,
            };
            p.push(newEntry);
          }
          return p;
        }, []);
        return newExecutorSteps;
      },
      parse: function parse() {
        const parsedProduct = cleanObject({
          ...this.toJSON(),
          editorLogoUrl: this.getEditorLogoUrl(),
          logoUrl: this.getLogoUrl(),
          url: this.getUrl(),
          followUps: this.parseFollowUps(),
          timelineStepExecutors: this.parseTimelineStepExecutors(),
        });
        const timelineStepExecutors = parsedProduct.timelineStepExecutors || [];
        return parsedProduct;
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
