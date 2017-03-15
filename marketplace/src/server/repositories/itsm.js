import ITSMEasyVista from './drivers/easyvista';
import * as ITSM_CONSTANTS from 'helpers/constants/itsm';
import config from 'config';
import WorkflowRepository from './workflow';
import Repository from './drivers/mysql';


export default class ITSMRepository {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = config.get(tenant).easyVista;
    this.workflowRepository = new WorkflowRepository(tenant);
  }


  _getCreateRequestObject() {
    return {
      Account: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: this.config.account,
      },
      Login: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: this.config.login,
      },
      Pass: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: this.config.password,
      },
      Catalog_GUID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Catalog_Code: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      AssetID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      AssetTag: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      ASSET_NAME: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Urgency_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '2',
      },
      Severity_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      External_reference: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Phone: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Requestor_Identification: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Requestor_Mail: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Requestor_Name: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Location_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Location_Code: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Department_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Department_Code: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Recipient_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Recipient_Identification: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Recipient_Mail: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Recipient_Name: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Origin: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      Description: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      ParentRequest: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      CI_ID: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      CI_ASSET_TAG: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      CI_NAME: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
      SUBMIT_DATE: {
        attributes: { 'xsi:type': 'xsd:string' },
        $value: '',
      },
    };
  }


  createRequest = ({ id }) => {
    const orderId = id;
    let ticketId;
    return this.createEasyvistaTicket()
    .then(res => Promise.resolve(res.return.$value))
    .then(easyvistaTicketId => {
      ticketId = easyvistaTicketId;
      return Promise.resolve(ticketId);
    })
    .then(() => {
      const data = {
        label: 'testing',
        definitions: {},
        timelines: [
          {
            label: 'Easyvista',
            id: ticketId,
            definitions: { idTicket: ticketId },
          },
        ],
      };
      return this.workflowRepository.create(data);
    })
    .then(workflowId => Promise.resolve({ orderId, externalId: ticketId, workflowId }))
    .then(externalWorkflowObject => {
      console.log('externalWorkflowObject', externalWorkflowObject);
      return this.saveExternalWorkflow(externalWorkflowObject);
    });
  }

  createEasyvistaTicket = () => {
    const itsm = new ITSMEasyVista(this.tenant);
    const payload = this._getCreateRequestObject();
    payload.Account.$value = this.config.account;
    payload.Login.$value = this.config.login;
    payload.Pass.$value = this.config.password;
    payload.Catalog_Code.$value = ITSM_CONSTANTS.CATALOG_CODE.AFTER_SALES_BREAKDOWN_BROKEN.ID;
    payload.Description.$value = 'Testing description';
    return itsm.createRequest(payload);
  }

  saveExternalWorkflow = externalWorkflowObject => {
    const { orderId, workflowId, externalId } = externalWorkflowObject;
    const externalWorkflowRepository = new Repository(this.tenant, 'external_workflows');
    return externalWorkflowRepository.query('INSERT INTO external_workflows (id_assignment_order, id_workflow, id_external) VALUES(?, ?, ?)', [orderId, workflowId, externalId])
    .then(res => Promise.resolve(externalWorkflowObject));
  }

  // TODO: createRequest does both calls, separate out Easyvista and our timeline
}
