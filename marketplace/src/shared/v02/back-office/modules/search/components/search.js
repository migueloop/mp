import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';
import { Actions } from 'v02/flux';
import Panel from 'react-bootstrap/lib/Panel';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  searchResults: state.get('v02').get('backOffice').get('searchResults').get('all'),
  user: state.get('v02').get('common').get('user'),
  users: state.get('backoffice').get('users'),
}));

class Search extends Components {

  constructor(props) {
    super(props);
    this.state = {
      query: props.location.query,
    };
  }

  static getActions(tenant, params = {}, query = {}, user) {
    const actions = new Actions(tenant, user.get('token'));
    return [actions.BackOffice.Search.search(query.query)];
  }

  getLinkUrl = item => {
    // TODO: check links are correct.
    switch (item.type) {
      case 'product':
        return `/admin/product/edit/${item.id}/summary`;
      case 'assignment':
        return `/admin/assignments/draft?assignmentId=${item.id}`;
      case 'user':
        return `/admin/user/edit/${item.id}/summary`;
      default:
        return '/admin';
    }
  }

  getLinkContents = item => {
    // TODO: check links are correct.
    switch (item.type) {
      case 'product':
        return `${item.type}::${item.alias}::${item.idPoSystem}`;
      case 'assignment':
        const title = `${item.assignedTo && item.assignedTo.name} - ${item.type}::${item.alias}::${item.idPoSystem}`;
        return (
          <div>
           <Panel header={title}>
             <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
             <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
           </Panel>
          </div>
        );
      case 'user':
        return `${item.type}::${item.alias}::${item.idPoSystem}`;
      default:
        return '/admin';
    }
  }
// TODO: GET THIS REQUEST HAPPENING ON EVERY QUERY CHANGE
// PASS the toolbar props down somehow - that value needs to be global...?
  componentDidMount() {
    const query = this.props.location.query.query;
    this.runSearch(query);
  }

  componentWillReceiveProps(nextProps) {
    const newQuery = nextProps.location.query.query;
    if (newQuery !== this.props.location.query.query) {
      this.runSearch(newQuery);
    }
  }

  runSearch = query => {
    console.log('runSearch::query', query);
    Promise.all(
      Search.getActions(this.props.tenant, this.props.params, { query }, this.props.user)
      .map(this.props.dispatch)
    );
  }

  render() {
    const query = this.props.location.query.query;
    const searchResults = this.props.searchResults.toJS();
    const resultsJsx = searchResults.map(result => <Link to={this.getLinkUrl(result)}>{this.getLinkContents(result)}</Link>);
    // const users = this.props.users.toJS();
    return (
      <div>
        <h3>Search Results - query: <pre>{query}</pre></h3>
        <div>{resultsJsx}</div>
      </div>
    );
  }
}

const _components = { default: connector(Search) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
