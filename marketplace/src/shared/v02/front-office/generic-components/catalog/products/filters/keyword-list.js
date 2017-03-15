import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';

class KeywordList extends Components {

  static propTypes = {
    selected: React.PropTypes.array,
    keywords: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    link: React.PropTypes.bool,
  };

  static defaultProps = {
    onSelect: () => { },
    selected: [],
    link: true,
  };

  render() {
    let component = null;
    const aProductKeywords = this.props.keywords.map(keyword => {
      if (this.props.link) {
        component = (
          <Link to={ keyword.name ? '/catalog/keywords/' + keyword.name : '#' }
            className={ this.props.selected.find(k => k.name === keyword.name) ? 'active' : '' }
            onClick={this.props.onSelect(keyword)} >
            #{keyword.name}
          </Link>
        );
      } else {
        component = (
          <a href={`#${keyword.name}`} className={ this.props.selected.find(k => k.name === keyword.name) ? 'active' : '' }
            onClick={e => {e.preventDefault(); this.props.onSelect(keyword)();}} >
            #{keyword.name}
          </a>
        );
      }
      return (
        <li className="category p-category" key={keyword.id} >
          {component}
        </li>
      );
    });

    return (
      <ul className="mp-keywords categories" >
        {aProductKeywords}
      </ul>
    );
  }

}

const _components = { default: KeywordList };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
