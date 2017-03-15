import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'tenant', 'tenantUrl'];

  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const tenantContactUrl = `${this.props.tenantUrl}/admin`;
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>Nous avons le plaisir de vous compter parmi nos Éditeurs au sein de notre MarketPlace.</p>
          <p>Vous pouvez accéder à votre Espace Editeur en suivant ce lien:</p>
          <p><A style={{ color: '#000' }} href={tenantContactUrl}>{tenantContactUrl}</A></p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}
export default Template;
