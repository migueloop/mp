import config from 'config';
import GDP from './drivers/gdp';

export default class GDPRepository {

  constructor(tenant) {
    this.tenant = tenant;
    this.config = config.get(tenant).gdp;
  }

  create(assignation) {
    // TODO: Refactor this, it's hardcoded
    console.log('assignation.timelines', JSON.stringify(assignation.timelines, null, 2));
    const orderLines = [];
    assignation.timelines.forEach(item => {
      const orderline = { id: item.definitions.marketplaceOrderId };
      if (item.label === 'line') {
        orderline.Line = Object.assign({}, item.definitions);// { Id: 36404, PhoneNumber: '0781080000' };
      }
      if (item.label === 'device') {
        orderline.Device = Object.assign({}, item.definitions);// { Id: 31297, SerialNumber: '1234' };
      }
      orderLines.push(orderline);
    });
    console.log('orderLines');
    console.log(orderLines, null, 2);
    const gdpParams = {
      Orders: {
        EmployeeId: assignation.definitions.employee.id, // 31, // this.config.params.EmployeeId, // assignation.definitions.employee.id,
        OrderPackageId: assignation.definitions.assignmentId,
        UserId: assignation.definitions.user.id, // 29, // this.config.params.UserId,
        OrderLines: orderLines,
        Email: { Address: 'test@test.fr"' },
      },
    };
    console.log('PRETTY PARAMS:');
    console.log(JSON.stringify(gdpParams, null, 2));
    return new GDP(this.tenant).post({ endpoint: 'orders', data: gdpParams })
    .then(gdpResponse => {
      console.log('gdpResponse');
      console.log(JSON.stringify(gdpResponse, null, 2));
      const response = assignation.timelines.reduce((assignationOrderGdp, item) => {
        if (item.label === 'line' && gdpResponse.OrderLinesResponse[0].LineId !== undefined) {
          assignationOrderGdp.push({ assignationOrderId: item.id, gdpId: gdpResponse.OrderLinesResponse.find(res => parseInt(res.Id, 10) === item.definitions.marketplaceOrderId).LineId });
        }
        if (item.label === 'device' && gdpResponse.OrderLinesResponse[0].DeviceId !== undefined) {
          assignationOrderGdp.push({ assignationOrderId: item.id, gdpId: gdpResponse.OrderLinesResponse.find(res => parseInt(res.Id, 10) === item.definitions.marketplaceOrderId).DeviceId });
        }
        return assignationOrderGdp;
      }, []);
      return Promise.resolve(response);
    });
  }

  // TODO: AGAIN! need to refactor its hardcoded!
  getItemsInfo(payload) {
    const gdp = new GDP(this.tenant);
    return Promise.all(
      payload.map(item => {
        let endpoint = 'device';
        switch (item.type) {
          case 'line':
            endpoint = 'lines';
            break;
          case 'device':
            endpoint = 'devices';
            break;
          default:
            endpoint = 'devices';
            break;
        }
        return gdp.get({
          endpoint: `${endpoint}/${item.idGdp}`,
        });
      }))
      .then(res => (
        payload.map((item, index) => ({
          item,
          gdpInfo: res[index].Result[0],
        }))
      )).catch(err => {
        console.error(err);
        return [];
      });
  }
}
