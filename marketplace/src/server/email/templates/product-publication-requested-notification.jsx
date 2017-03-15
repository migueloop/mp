import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'name', 'lastname', 'siret', 'companyName', 'corners', 'tenant', 'tenantUrl', 'sex', 'productName'];

  renderCorners() {
    return this.props.corners.map(c => <li>{c}</li>);
  }
  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const tenantContactUrl = `${this.props.tenantUrl}/admin/notifications/products`;
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>{this.props.sex === 'M' ? 'Monsieur' : 'Madame' } {this.props.lastname}, {this.props.name}, souhaite publier la solution {this.props.productName} de la société {this.props.companyName}, ({this.props.siret}) dans le ou les corners:</p>
          <ul>{this.renderCorners()}</ul>
          <p>Votre validation est requise pour permettre la publication dans la MarketPlace.</p>
          <p><A style={{ color: '#000' }} href={tenantContactUrl}>{tenantContactUrl}</A></p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}
export default Template;
