import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import FormCmpt from 'v02/back-office/modules/users/components/create-user-form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { USER } from 'helpers/constants';
import Actions from 'flux/actions';
import { FormattedMessage } from 'react-intl';

// TODO: this.reset is hardcoded. need to refactor in some react-way
class CreateUser extends Components {

  register = values => {
    delete values.passwordConfirmation;
    values.id_role = USER.ROLE.AUTHOR;
    new Actions(this.props.tenant).Users.Create(values)
    .then(action => {
      this.props.dispatch(action);
      this.reset();
      this.props.notification.add({ message: 'User Created', level: 'success' });
    })
    .catch(e => {
      const message = e.status === 403 ? 'Ce mail est déjà enregistré' : 'Oops! something happen :\'( ';
      this.props.notification.add({ message, level: 'error' });
    });
  };

  render() {
    const [Form] = [FormCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <div>
        <Form showCompany ref="myForm" isNewUser getReset={reset => { this.reset = reset; }} onSubmit={this.register} />
        <Row>
          <Col xs={4} xsOffset={8}>
            <Button
              id="submitButton"
              bsStyle="primary"
              onClick={() => { this.refs.myForm.submit(); }}>
                <FormattedMessage id="create_account" />
            </Button>
            <Button
              bsStyle="primary" onClick={() => { this.reset(); }}>
              <FormattedMessage id="reset" />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    notification: state.get('notification'),
  };
}

const _components = { default: connect(stateToProps)(CreateUser) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
