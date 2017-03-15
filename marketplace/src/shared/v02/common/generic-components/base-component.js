import React from 'react';
import Actions from 'flux/actions';
import { ACTION } from 'flux/actions';
import { GUID } from 'helpers/constants';
import _ from 'underscore';
import { Actions as V02Actions } from 'v02/flux';
import getComponentActions from 'helpers/getComponentActions';

export default class Component extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    intl: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    tenant: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.tenant = this.props.tenant;
    if (!this.tenant) { /* throw new Error('Not receiving tenant in this component') */ }
  }

  // This method renders fills the store on the client
  componentDidMount() {
    const requiredActionKeys = this.constructor.requiredActionKeys;
    const clientRequiredActionKeys = this.constructor.clientRequiredActionKeys;
    console.log('REQUIRED ACTION KEYS', this.constructor.name, requiredActionKeys);
    const dispatch = this.props.dispatch;
    if (!dispatch) { return; }
    const v02Actions = new V02Actions(this.tenant);
    const actions = getComponentActions(v02Actions, this.props.params, this.props.query, requiredActionKeys);
    actions.map(dispatch);
    const clientActions = getComponentActions(v02Actions, this.props.params, this.props.query, clientRequiredActionKeys);
    clientActions.map(dispatch);
  }

  Error = (code, message, reactChildren) => {
    throw new Error(JSON.stringify({
      code,
      message,
      reactChildren,
    }));
  };

  addListener = events => {
    if (!Array.isArray(events)) {
      events = [events];
    }
    const guid = GUID();
    this.props.dispatch({ type: ACTION.LISTEN, guid, events });
    return guid;
  };

  removeListener = guid => {
    this.props.dispatch({ type: ACTION.UNLISTEN, guid });
  };

  reloadStore = () => {
    const actions = new Actions(this.props.tenant);
    actions.reloadStore().then(action => this.props.dispatch(action));
  };

  link = to => evt => {
    this.context.router.push(to);
  };

  navigate = to => {
    this.context.router.push(to);
  };

  format = msg => {
    const id = msg.id;
    if (!_.isString(id)) {
      throw new Error('Formatted message id must be a string. Value supplied:', id);
    }
    return this.context.intl.formatMessage(msg);
  }
}
