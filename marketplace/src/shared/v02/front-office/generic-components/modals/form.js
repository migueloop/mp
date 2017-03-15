import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { FORM } from 'helpers/constants';
import FOProductContactUs from './fo-product-contact-us';

class Form extends Components {

  render() {
    const self = this;
    let oForm = '';
    switch (this.props.formToShow) {
      case FORM.FO.PRODUCT.CONTACTUS:
        oForm = <FOProductContactUs fields={this.props.fields} onChangeFormField={this.props.onChangeFormField} />;
        break;
    }
    return <form className="form-horizontal">{oForm}</form>;
  }
}

export default Form;
