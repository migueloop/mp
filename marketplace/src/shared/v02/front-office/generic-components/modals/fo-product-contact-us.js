import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import { MODELS } from 'helpers/constants';

class FOProductContactUs extends Components {

  render() {
    return (
      <div>
        <input type="hidden" name="c[product]" value="" />
        <input id ="submitContactForm" type="submit" className="hidden" />
        <div className="global-row voffset-top-2">
          <Row>
            <Col md={8} className="col-md-offset-2">
              <div className="form-group formRadioInput">
                <label className="col-md-2">*Civilité</label>
                <Col md={10} className="formRadioOptions" onChange={this.props.onChangeFormField}>
                  <Col md={3} >
                    <input type="radio" name={MODELS.MESSAGE.PRODUCT.SEX} value="F" defaultChecked required="required" />
                    &nbsp;Madame
                  </Col>
                  <Col md={3}>
                    <input type="radio" name={MODELS.MESSAGE.PRODUCT.SEX} value="M" required="required" />
                    &nbsp;Monsieur
                  </Col>
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-2 labelInputTxt">*Nom</label>
                <Col md={10}>
                  <input type="text" name={MODELS.MESSAGE.PRODUCT.NAME} required="required" className="form-control" onBlur={this.props.onChangeFormField} />
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-2 labelInputTxt">*Prénom</label>
                <Col md={10}>
                  <input type="text" name={MODELS.MESSAGE.PRODUCT.LASTNAME} required="required" className="form-control" onBlur={this.props.onChangeFormField} />
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-2 labelInputTxt">*E-mail</label>
                <Col md={10}>
                  <input type="email" name={MODELS.MESSAGE.PRODUCT.EMAIL} required="required" className="form-control" onBlur={this.props.onChangeFormField} />
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-2 labelInputTxt">Téléphone</label>
                <Col md={10}>
                  <input type="tel" name={MODELS.MESSAGE.PRODUCT.PHONE} required="required" className="form-control" onBlur={this.props.onChangeFormField} />
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-2 labelInputTxt">Société</label>
                <Col md={10}>
                  <input type="text" name={MODELS.MESSAGE.PRODUCT.COMPANY} required="required" className="form-control" onBlur={this.props.onChangeFormField} />
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-4 labelInputTxt">*Je vous contacte à propos</label>
                <Col md={8}>
                  <select name={MODELS.MESSAGE.PRODUCT.SUBJECT} required="required" onChange={this.props.onChangeFormField}>
                    <option value="" disabled defaultValue style={{ display: 'none' }}>Label</option>
                    <option value="Je souhaite des renseignements">Je souhaite des renseignements</option>
                    <option value="J'ai un projet à court terme (- de 2 mois)">J'ai un projet à court terme (- de 2 mois)</option>
                    <option value="J'ai une question technique/fonctionnelle">J'ai une question technique/fonctionnelle</option>
                    <option value="Je souhaite avoir un devis">Je souhaite avoir un devis</option>
                  </select>
                </Col>
              </div>
              <div className="form-group">
                <label className="col-md-4">Expliquez-nous vos attentes</label>
                <Col md={8}>
                  <textarea name={MODELS.MESSAGE.PRODUCT.MESSAGE} rows="5" className="form-control" onBlur ={this.props.onChangeFormField}></textarea>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const _components = {
  default: FOProductContactUs,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
