import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Actions from 'flux/actions';
import Button from 'react-bootstrap/lib/Button';

const connector = connect(state => ({ tenant: state.get('v02').get('common').get('tenant').get('name') }));

class Disclaimer extends Components {
  acceptCookie = () => {
    this.props.dispatch(new Actions(this.props.tenant).Common.Cookie.setCookieDisclaimer(true))
    .then(() => this.navigate('/'));
  };

  render() {
    return (
      <div className="container" style={{ paddingBottom: 10 }}>
        <h2>Données personnelles de l'utilisateur</h2><br />

        <p>L'accès à certains contenus du site Mobility For Work suppose que l'utilisateur nous transmette des données
          personnelles le concernant.</p><br />

        <p>Ces informations et leur nature sont indiquées sur la page du site qui comporte ces demandes
          d'information.</p><br />

        <p>L'utilisateur est informé que lors de ses visites sur le site Mobility For Work, un cookie peut être implanté
          dans son ordinateur. Un cookie ne permet pas d'identifier l'utilisateur. De manière générale, il enregistre
          des informations relatives à la navigation de son ordinateur sur le site (les pages consultées, la date et
          l'heure de la consultation) qui pourront être lues lors de ses visites ultérieures.</p><br /><br />

        <p>L'utilisateur peut s'opposer à l'enregistrement de cookies, ou être prévenu avant d'accepter les cookies, en
          configurant son ordinateur de la manière suivante :</p><br />

        <p>Pour Microsoft Internet Explorer 6 et au delà :
        </p>
        <ol>
          <li>Choisissez le menu " Outils " (ou " Tools "), puis " Options Internet " (ou " Internet Options ")</li>
          <li>Cliquez sur l'onglet " Confidentialité " (ou " Confidentiality ")</li>
          <li> Sélectionnez le niveau souhaité à l'aide du curseur ou cliquez sur le bouton " avancé " pour
            personnaliser votre gestion des cookies
          </li>
        </ol>
        <p></p><br />

        <p>Pour Microsoft Internet Explorer 5 :
        </p>
        <ol>
          <li>Choisissez le menu " Outils " (ou " Tools "), puis " Option Internet " (ou " Internet Options ")</li>
          <li>Cliquez sur l'onglet " Sécurité " (ou " Security ")</li>
          <li>Sélectionnez " Internet " puis " Personnaliser le niveau " (ou " Custom Level ")</li>
          <li>Repérez la rubrique " cookies " et choisissez l'option qui vous convient</li>
        </ol>
        <p></p><br />

        <p>Pour Firefox :
        </p>
        <ol>
          <li>Choisissez le menu " Outils "&gt; " Options "</li>
          <li>Cliquez sur l'option " Vie privée "</li>
          <li>Rubrique " Cookies "</li>
        </ol>
        <p></p><br />

        <p>Pour Opéra :
        </p>
        <ol>
          <li>Choisissez le menu " Fichier "&gt; " Préférences "</li>
          <li>Vie privée</li>
        </ol>
        <p></p><br />

        <p>Pour Google Chrome :
        </p>
        <ol>
          <li>Cliquez sur l'icône représentant une clé à molette qui est située dans la barre d'outils du navigateur.
          </li>
          <li>Sélectionnez Options (Préférences sous Mac et Linux, Paramètres sur un Chromebook).</li>
          <li>Choisissez l'onglet Options avancées.</li>
          <li>Cliquez sur l'option Paramètres de contenu de la section "Confidentialité".</li>
          <li>Dans la boîte de dialogue Paramètres de contenu qui s'affiche, cliquez sur l'onglet Cookies.</li>
        </ol>
        <p></p><br />

        <p>Les données personnelles concernant l'utilisateur sont destinées à Mobility For Work. L'utilisateur dispose
          d'un droit d'accès et de rectification des données personnelles communiquées par le biais de ce mécanisme de
          suivi de navigation dans les conditions indiquées ci-dessus.</p><br />

        <p>Par ailleurs, les utilisateurs sont informés que les données les concernant font l'objet d'un traitement et
          qu'ils bénéficient d'un droit d'accès et de rectification relativement aux données qui les concernent ainsi
          que d'un droit d'information complémentaire.</p><br />

        <p>Ils peuvent exercer ces droits et obtenir communication des données les concernant auprès de HP France,
          Immeuble Arcs de Seine , 20 quai du Point du Jour | 92100 Boulogne Billancourt | France.</p><br />

        <p>En conformité avec les dispositions de la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
          fichiers et aux libertés, les traitements de données réalisés à partir du site 20Minutes.fr ont fait l'objet
          d'une déclaration auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).</p><br />

        <Button bsStyle="primary" onClick={this.acceptCookie}>J'accepte</Button>
      </div>
    );
  }
}

export default connector(Disclaimer);
