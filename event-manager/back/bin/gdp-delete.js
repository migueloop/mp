import axios from 'axios';

const associations = [
  {
    "$id": "2",
    "id": "427114344",
    "sqlDeviceId": 7539,
    "sqlLineId": 7458,
    "sqlEmployeeId": 6237
  },
  {
    "$id": "3",
    "id": "717b598aa",
    "sqlDeviceId": 7540,
    "sqlLineId": 7459,
    "sqlEmployeeId": 6237
  }
];

Promise.all(
  associations.map(a =>
    axios({
      data: {
        userId: 'f12d6f0e-ae4d-41f4-8d1f-202636c57f4b',
        orderPackageId: a.id,
      },
      method: 'delete',
      url: 'https://api-gdp.digitaldimension.services/api/associations',
    })
  )
)
  .then(() => { console.log('finish'); })
  .catch(e => console.error('ERROR', e));
