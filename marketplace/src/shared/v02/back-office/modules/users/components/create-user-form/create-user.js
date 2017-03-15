import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { reduxForm } from 'redux-form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Collapse from 'react-bootstrap/lib/Collapse';
import Fade from 'react-bootstrap/lib/Fade';
import CreateCompanyCmpt from './create-company';
import FormFieldCmpt from './field';
import Validation from './validation.js';
import { FormattedMessage } from 'react-intl';

const validate = (values, props) => {
  values.auth_provider = 'local';
  if (!props.showCompany) {
    delete values.company;
  }
  return Validation.validate(values, !props.isNewUser);
};

const hasError = field => field.touched ? { hasFeedback: true, bsStyle: field.invalid ? 'error' : 'success' } : {};

class CreateUser extends Components {
  constructor(props) {
    super(props);
    this.state = { showDisclaimer: false };
    if (this.props.getReset) {
      this.props.getReset(this.props.resetForm);
    }
  }
  static propTypes = {
    isNewUser: React.PropTypes.bool,
    showCompany: React.PropTypes.bool,
  };
  static defaultProps = {
    isNewUser: true,
    showCompany: false,
  };

  static contextTypes = {
    intl: React.PropTypes.object,
  };

  render() {
    const [CreateCompany, FormField] = [CreateCompanyCmpt, FormFieldCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const formattedMessage = this.context.intl.formatMessage;
    const {
      fields: {
        sex,
        name,
        lastname,
        display_name,
        email,
        password,
        passwordConfirmation,
        company,
        },
      valid,
      values,
      }
      = this.props;

    return (
      <div>
        {this.props.isNewUser ? (
          <Row>
            <Col md={10} mdOffset={1}>
              <Row className="form-group">
                <Col md={3}>
                  <label>*<FormattedMessage id="sex" /></label>
                </Col>
                <Col md={9}>
                  <Col md={6}>
                    <Input type="radio" {...sex} value="F" checked={sex.value === 'F'} label={ formattedMessage({ id: 'mrs' }) } />
                  </Col>
                  <Col md={6}>
                    <Input type="radio" {...sex} value="M" checked={sex.value === 'M'} label={ formattedMessage({ id: 'mr' }) } />
                  </Col>
                  <div className={`help-text ${sex.touched && sex.invalid ? 'has-error' : 'hide'}`}>
                    <label >{sex.touched ? sex.error : ''}</label>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={3}><label>*<FormattedMessage id="surname" /></label></Col>
                <Col md={9}><FormField field={lastname}><Input type="text" /></FormField></Col>
              </Row>
              <Row className={'form-group'}>
                <Col md={3}><label>*<FormattedMessage id="firstname" /></label></Col>
                <Col md={9}><FormField field={name}><Input type="text" /></FormField></Col>
              </Row>
              <Row className="form-group">
                <Col md={3}><label><FormattedMessage id="pseudo" /></label></Col>
                <Col md={9}><FormField field={display_name}><Input type="text" /></FormField></Col>
              </Row>
            </Col>
          </Row>
        ) : (<div></div>) }
        <Collapse in={this.props.showCompany}>
          <div>
            <hr />
            <CreateCompany company={ company } hasError={hasError} t={ Math.random() } />
          </div>
        </Collapse>
        {this.props.isNewUser ? (
          <Row>
            <hr />
            <Col md={10} mdOffset={1}>
              <Row className="form-group">
                <Col md={3}><label>*<FormattedMessage id="email" /></label></Col>
                <Col md={9}><FormField field={email}><Input type="email" /></FormField></Col>
              </Row>
              <Row className="form-group">
                <Col md={3}><label>*<FormattedMessage id="password" /></label></Col>
                <Col md={9}><FormField field={password}><Input type="password" id="passwordInput" /></FormField></Col>
              </Row>
              <Row className="form-group">
                <Col md={3}><label>*<FormattedMessage id="confirm_password" /></label></Col>
                <Col md={9}><FormField field={passwordConfirmation}><Input type="password" id="passwordConfirmationInput" /></FormField></Col>
              </Row>
              <Row>
                <Fade in={this.props.showCompany} className="form-group" style={{ textAlign: 'center' }} >
                  <Col>
                    <FormattedMessage id="by_clicking_create_account" />
                    {' '}
                    <span style={{ color: 'blue', fontWeight: 'bold', cursor: 'pointer' }} onClick = {() => this.setState({ showDisclaimer: !this.state.showDisclaimer })} >
                    { <FormattedMessage id="terms_of_use" /> }
                    </span>
                    <Collapse in={this.props.showCompany && this.state.showDisclaimer}>
                      <Col md={12} style={{ textAlign: 'left' }}>
                        <ul>
                          <li>j'atteste que tous les renseignements fournis dans le présent formulaire sont
                            exacts
                            et complets, en mon nom ou en celui de la société dont je suis un représentant
                            dûment
                            habilité,
                          </li>
                          <li>je m’engage, en mon nom et/ou au nom et pour le compte de la société que je
                            représente, selon le cas, à ce que l’ensemble des contenus, informations,
                            éléments de
                            communication de quelque nature et sur quelque support que ce soit, que j’édite
                            sur le
                            site www.mobility-for-work.com soit exact, loyal et soit conforme aux lois
                            applicables
                            en particulier en France, au sein de l’Union Européenne et aux Etats-Unis, et ne
                            puissent porter atteinte aux droits ou à l’image d’HP France SAS ou des tiers,
                            et
                            reconnaît que, de manière générale, ces contenus, informations et éléments
                            relèvent de
                            mon exclusive responsabilité ou de celle de la société que je représente,
                          </li>
                          <li>je m’engage, en mon nom et/ou au nom et pour le compte de la société que je
                            représente, à garantir HP France et ses filiales contre toute action de tiers ou
                            d’autorités administratives qu’HP aura promptement porté à ma connaissance et/ou
                            celle
                            de la société que je représente et à l’indemniser de toute condamnation mise à
                            sa charge
                            en résultant et/ou de tous dommages et intérêts qu’elle aura effectivement subis
                            en lien
                            avec les informations, contenus ou élément fournis par moi ou la société que je
                            représente
                          </li>
                        </ul>
                      </Col>

                    </Collapse>
                  </Col>
                </Fade>
              </Row>
            </Col>
          </Row>
        ) : undefined }

      </div>
    );
  }
}


const connect = reduxForm(
  {
    form: 'createUser',
    fields: [
      'sex',
      'name',
      'lastname',
      'display_name',
      'email',
      'password',
      'passwordConfirmation',
      'company.siret',
      'company.name',
      'company.activity_fields',
      'company.platforms',
      'company.usecase',
    ],
    getFormState: state => state.get('form'),
    validate,
  },
    state => ({
      tenant: state.get('v02').get('common').get('tenant').get('name'),
    }),
  null, null, {
    withRef: true,
  }
);


const _components = {
  default: connect(CreateUser),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
