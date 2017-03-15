// This is email is sent to the supplier of each product
import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'tenant', 'tenantUrl', 'assigneeFirstname', 'assigneeLastname', 'productName', 'assignorFirstname', 'assignorLastname', 'downloadUrl'];

  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const commandeUrl = `${this.props.tenantUrl}/admin/assignments/all`; // TODO: confirm this
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>Nous vous informons qu'un bon de commande pour {this.props.productName} à destination de Monsieur (ou Madame) {this.props.assigneeLastname}, {this.props.assigneeFirstname} vient d'être émis par {this.props.assignorLastname}, {this.props.assignorFirstname}</p>
          <p>Vous pouvez suivre l'avancement de cette dotation à partir de ce lien :</p>
          <p><A style={{ color: '#000' }} href={commandeUrl}>{commandeUrl}</A></p>
          <p>Lien de téléchargement:</p>
          <p><A style={{ color: '#000' }} href={this.props.downloadUrl} target="_blank">{this.props.downloadUrl}</A></p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}
export default Template;
