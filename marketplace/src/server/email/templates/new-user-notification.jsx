import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'tenantUrl', 'tenant', 'name', 'lastname', 'society', 'activityFields', 'sex'];

  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const tenantContactUrl = `${this.props.tenantUrl}/admin/notifications/users`;
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>Vous avez une nouvelle demande d'inscription d'Éditeur.</p>
          <p>{ this.props.sex === 'M' ? 'Monsieur' : 'Madame' } {this.props.lastname}, {this.props.name},
          de la société {this.props.society}, (SIRET {this.props.siret})
          dont les domaines d'activité sont: {this.props.activityFields.join(', ')}</p>
          <p>souhaite votre validation pour participer à votre MarketPlace et proposer ses offres.</p>
          <p>Pour valider son inscription suivez ce lien:
          <br />
          <A style={{ color: '#000' }} href={tenantContactUrl}>{tenantContactUrl}</A>
          </p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}

export default Template;
