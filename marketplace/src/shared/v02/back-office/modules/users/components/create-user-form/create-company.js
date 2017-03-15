import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Collapse from 'react-bootstrap/lib/Collapse';
import Input from 'react-bootstrap/lib/Input';
import Alert from 'react-bootstrap/lib/Alert';
import FormFieldCmpt from './field';


@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  activityFields: ['activity 1', 'activity 2'], // state.get('misc').get('activityFields').toJS(),
  platforms: ['platforms 1', 'platforms 2'], // state.get('misc').get('platforms').toJS(),
  companies: ['companies 1', 'companies 2'], // state.get('misc').get('companies').toJS(),
})) class CreateCompany extends Components {

  static propTypes = {
    company: React.PropTypes.object.isRequired,
  };

  render() {
    const { company } = this.props;

    const { siret, name, usecase } = company;

    const currentCompany = this.props.companies.find(c => !!siret.value && c.siret.replace(/\D/g, '') === siret.value.replace(/\D/g, ''));

    const [FormField] = [FormFieldCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div>
        <Row>
          <Col md={10} mdOffset={1}>
            <Row className="form-group" style={{ marginBottom: 0 }}>
              <Col md={3}>
                <label>*Siret</label>
              </Col>
              <Col md={9}>
                <FormField field={siret} style={{ marginBottom: 0 }}>
                  <Input type="text" />
                </FormField>
              </Col>
            </Row>
          </Col>
        </Row>

        <Collapse in={siret.value && siret.touched && siret.valid && !currentCompany}>
          <div>
            <Row>
              <Col md={10} mdOffset={1}>
                <Row className="form-group">
                  <Col md={3}>
                    <label>*Nom société</label>
                  </Col>
                  <Col md={9}>
                    <FormField field={name}>
                      <Input type="text" />
                    </FormField>
                  </Col>

                </Row>
                <Row className="form-group">
                  <Col md={3}>
                    <label>*Quels sont les cas d'usage principaux de votre solution et la cible utilisateurs ?</label>
                  </Col>
                  <Col md={9}>
                    <FormField field={usecase}>
                      <Input type="textarea" />
                    </FormField>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Collapse>
        <Collapse in={!!currentCompany}>
          <Row>
            <Col md={10} mdOffset={1}>
              <Col md={9} mdOffset={3}>
                <Alert bsStyle="danger">
                  <h4>Company already registered</h4>
                </Alert>
              </Col>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

const _components = { default: CreateCompany };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
