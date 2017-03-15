import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { FormattedMessage } from 'react-intl';
import { SimpleSelect } from 'react-selectize';
import Actions from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import getForm from 'v02/back-office/modules/assignments/components/assignment-option-forms/get-form';

class AssignmentOptions extends Components {

  constructor(props) {
    super(props);
    this.state = {
      id_assignment_option_form: props.product.id_assignment_option_form,
      form: getForm(props.tenant, props.product.id_assignment_option_form),
    };
  }

  static featureName() {
    return 'products.features.assignmentOptions';
  }

  onSubmitForm = e => {
    e.preventDefault();
    new Actions(this.props.tenant).Products.Edit(this.props.product.id, { id_assignment_option_form: this.state.id_assignment_option_form })
    .then(action => {
      this.props.dispatch(action);
      this.props.notification.add({ message: this.format({ id: 'product_updated' }), level: 'success' });
    })
    .catch(err => this.props.notification.add({ message: this.format({ id: 'error_updating_product' }), level: 'error' }));
  }

  onValueChange = value => {
    this.setState({ id_assignment_option_form: value.value, form: getForm(this.props.tenant, value.value) });
  }

  static propsTypes = {
    onChangeFeatureAvailability: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const defaultOption = { value: null, label: this.format({ id: 'no_form' }) };
    const Form = this.state.form;
    const assignmentOptions = [
      defaultOption,
      { value: 1, label: this.format({ id: 'line_form_1' }) },
      { value: 2, label: this.format({ id: 'line_form_2' }) },
    ];
    const defaultValue = this.state.id_assignment_option_form ? { value: this.state.id_assignment_option_form, label: this.format({ id: `line_form_${this.state.id_assignment_option_form}` }) } : defaultOption;
    return (
      <div className="mp-tab mp-tab-assignment-options">
        <form onSubmit={this.onSubmitForm}>
          <h2><FormattedMessage id="assignment_options" /></h2>
          <p className="help-block"><FormattedMessage id="select_assignment_options_form_description" /></p>
          <Row className="row-eq-height">
            <Col md={6}>
              <div className="form-group"><SimpleSelect defaultValue = {defaultValue} options={assignmentOptions} placeholder={this.format({ id: 'select_assignment_options_form' })} onValueChange={this.onValueChange} /></div>
            </Col>
            <Col md={6} className="col-hcenter col-vcenter">
              <button type="submit" className="btn btn-primary"><FormattedMessage id="save" /></button>
            </Col>
          </Row>
        </form>
        <Form disabled={true} onSubmit={e => e.preventDefault()} />
      </div>
    );
  }
}

const _components = { default: AssignmentOptions };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
