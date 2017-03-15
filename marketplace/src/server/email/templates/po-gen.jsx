// TODO: fill this in when we have the data/template
import React from 'react';
import ReactHTMLEmail, { Email, Item, A } from 'react-html-email';
import path from 'path';
import { hasAllOwnProperties } from 'helpers/object-helpers';
class Template extends React.Component {

  static requiredProps = ['subject', 'tenant', 'tenantUrl', 'assigneeFirstname', 'assigneeLastname', 'downloadUrl', 'productName', 'orderId'];

  render() {
    // validate the props needed for the template
    if (!hasAllOwnProperties(this.props, Template.requiredProps)) {
      throw new Error(`Missing props from Email Template "${path.basename(__filename)}". Required props: ${Template.requiredProps.join(', ')}.`);
    }
    const defaultStyles = { fontFamily: 'Verdana', fontSize: 16 };
    const commandeUrl = `${this.props.tenantUrl}/admin/assignments`; // TODO: confirm this
    return (
      <Email title={this.props.subject} style={defaultStyles}>
        <Item>
          <h1 style={{ fontSize: 26 }}>{this.props.subject}</h1>
        </Item>
        <Item >
          <p>Bonjour,</p>
          <p>Veuillez trouver ici <a target="_blank" href={this.props.downloadUrl}>{this.props.downloadUrl}</a> le document associé au bon de commande {this.props.productName} à destination de Monsieur (ou Madame) {this.props.assigneeLastname}, {this.props.assigneeFirstname}.</p>
          <p>Pour informer de l'avancement de cette commande, merci de vous connecter à votre Espace en suivant ce lien:</p>
          <p><A style={{ color: '#000' }} href={commandeUrl}>{commandeUrl}</A></p>
          <p>Bonne journée,</p>
          <p>L'équipe {this.props.tenant}</p>
        </Item>
      </Email>
    );
  }
}
export default Template;
