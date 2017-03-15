import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData, injectIntl } from 'react-intl';
import en from 'react-intl/lib/locale-data/en';
import es from 'react-intl/lib/locale-data/es';
import fr from 'react-intl/lib/locale-data/fr';

const connector = connect(state => ({
  locale: state.get('v02').get('common').get('locale'),
}));

class InternationalizationWrapper extends React.Component {
  static childContextTypes = {
    intl: React.PropTypes.object,
  };
  getChildContext() {
    return { intl: this.props.intl };
  }
  render() {
    return this.props.children;
  }
}

const Wrapper = injectIntl(InternationalizationWrapper);

class Internationalization extends React.Component {
  constructor(props) {
    super(props);
    addLocaleData(en);
    addLocaleData(es);
    addLocaleData(fr);
  }

  render() {
    const formats = {
      number: {
        eur: { style: 'currency', currency: 'EUR' },
        usd: { style: 'currency', currency: 'USD' },
      },
    };

    const locale = this.props.locale.toJS();
    return (
      <IntlProvider
        defaultLocale="fr"
        locale={locale.language}
        messages={locale.messages}
        formats={formats}
        defaultFormats={formats}
        >
        <Wrapper>{this.props.children}</Wrapper>
      </IntlProvider>
    );
  }
}

export default connector(Internationalization);
