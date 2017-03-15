import Billing from './drivers/billing';
import queueDriverFactory from 'repositories/drivers/queue-driver-factory';
import config from 'config';

export default class BillingRepository {
  constructor(tenant) {
    this.tenant = tenant;
  }

  createProduct(product) {
    const billingConfig = config.get(this.tenant).billing;
    if (billingConfig.disable) {
      return;
    }
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        params: {
          ReferenceFeature: product.id,
          Name: product.name,
          TypeFeature: 'OnOff',
        },
        endpoint: `${billingConfig.endpoint.extended}Organization/Features`,
        method: 'post',
        options: {
          auth: billingConfig.credentials,
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        webhook: {
          endpoint: `${config.getHost(this.tenant)}/api/v01/products/billing`,
          method: 'post',
          params: {
            token: product.billing_token,
          },
        },
      },
    });
  }

  updateProduct(product) {
    const billingConfig = config.get(this.tenant).billing;
    if (billingConfig.disable || !product.id_billing) {
      return;
    }
    const data = {
      data: {
        params: {
          Id: product.id_billing,
          ReferenceFeature: product.id,
          Name: product.name,
          Order: 1,
          StateLife: 'Ok',
          IsVisible: true,
        },
        endpoint: `${billingConfig.endpoint.extended}Organization/Features/${product.id_billing}`,
        method: 'put',
        options: {
          auth: billingConfig.credentials,
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    };

    const common = {
      options: {
        auth: billingConfig.credentials,
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        params: product.name,
        endpoint: `${billingConfig.endpoint.extended}HostedPages/LocalizationByBusinesses/Single?idBusiness=${billingConfig.id}&typeContent=Html&language=en&code=Feature.Title.${product.id_billing}`,
        method: 'post',
        ...common,
      },
    });
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        params: product.name,
        endpoint: `${billingConfig.endpoint.extended}HostedPages/LocalizationByBusinesses/Single?idBusiness=${billingConfig.id}&typeContent=String&language=en&code=Feature.Title.${product.id_billing}`,
        method: 'post',
        ...common,
      },
    });
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        params: {
          Id: product.id_billing,
          ReferenceFeature: product.id,
          Name: product.name,
          Order: 1,
          StateLife: 'Ok',
          IsVisible: true,
        },
        endpoint: `${billingConfig.endpoint.extended}Organization/Features/${product.id_billing}`,
        method: 'put',
        ...common,
      },
    });
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        endpoint: `${billingConfig.endpoint.extended}HostedPages/LocalizationByBusinesses/RefreshHostedPages`,
        method: 'get',
        ...common,
      },
    });
  }

  deleteProduct(product) {
    const billingConfig = config.get(this.tenant).billing;
    if (billingConfig.disable || !product.id_billing) {
      return;
    }
    queueDriverFactory(this.tenant).addApiQueue({
      data: {
        endpoint: `${billingConfig.endpoint.extended}Organization/Features/${product.id_billing}`,
        method: 'delete',
        options: {
          auth: billingConfig.credentials,
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    });
  }

  fetch() {
    const billingConfig = config.get(this.tenant).billing || { disable: true };
    if (billingConfig.disable) {
      return Promise.resolve({
        disable: true,
      });
    }
    return Promise.resolve({
      disable: billingConfig.disable,
      endpoint: billingConfig.endpoint,
    });
  }

  getOffersOfProduct(idBilling) {
    const billing = new Billing(this.tenant);
    const billingConfig = config.get(this.tenant).billing;
    if (billingConfig.disable) {
      return Promise.resolve([]);
    }
    return billing.get({
      endpoint: `Sub/OfferFeatures?idFeature=${idBilling}&extra=Offer&SizePage=1000`,
    }, false).then(result => {
      if (!result) {
        return Promise.resolve([]);
      }
      return Promise.all(result.Items.map(item => this.getOffer(item.IdOffer)));
    });
  }

  getOffer(id) {
    const billingConfig = config.get(this.tenant).billing;
    if (billingConfig.disable) {
      return Promise.resolve({});
    }
    const billing = new Billing(this.tenant);
    return billing.get({
      endpoint: `v1/Offer?IdOffer=${id}`,
    });
  }
}
