import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import KeywordListCmpt from './keyword-list';

class KeywordFilter extends Components {

  constructor(props) {
    super(props);
    this.state = { keywords: props.selectedKeywords || [] };
  }

  onSelectKeyword = keyword => () => {
    let keywords = this.state.keywords.concat([]);
    const itemInArray = keywords.find(kw => kw.name === keyword.name);
    if (itemInArray) {
      keywords = keywords.filter(kw => kw.name !== keyword.name);
    } else {
      keywords.push(keyword);
    }
    this.setState({ keywords });
    this.props.onFilter({ keywords });
  }

  render() {
    const [KeywordList] = [KeywordListCmpt]
      .map(Component => Component.get(this.props.tenant));

    return (
      <div className="keywords">
        <label className="control-label"><FormattedMessage id="keyword_label" /></label>
        <KeywordList
          link={false}
          keywords={this.props.keywords}
          onSelect={this.onSelectKeyword}
          selected={this.state.keywords.concat([])}
          />
      </div>
    );
  }
}

const connector = connect(state => ({ tenant: state.get('tenant') }));
const _components = { default: connector(KeywordFilter) };
export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
