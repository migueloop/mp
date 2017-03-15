// This email is sent when a fleet manager (Gerard) assigns a bundle to another user
import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'tenant', 'tenantUrl', 'assignorFirstname', 'assignorLastname', 'assigneeFirstname', 'assigneeLastname'];

  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const commandeUrl = `${this.props.tenantUrl}/admin/notifications/assignments`; // TODO: confirm this
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>Monsieur (ou madame) {this.props.assignorLastname}, {this.props.assignorFirstname}, souhaite réaliser une dotation pour Monsieur (ou madame) {this.props.assigneeLastname}, {this.props.assigneeFirstname}.</p>
          <p>Votre validation est requise pour permettre la dotation.</p>
          <p>Suivez ce lien :</p>
          <p><A style={{ color: '#000' }} href={commandeUrl}>{commandeUrl}</A></p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}
export default Template;
