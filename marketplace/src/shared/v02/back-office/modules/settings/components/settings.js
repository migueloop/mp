import React from 'react';
import Action from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  settings: state.get('settings').toJS(),
  notification: state.get('notification'),
}))

class Settings extends Components {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.settings.seo.description,
      tagline: this.props.settings.seo.tagline,
      title: this.props.settings.seo.title,
    };

    this.previousValues = Object.assign({}, this.state);
  }

  changeValue = evt => {
    const params = {};
    params[evt.currentTarget.name] = evt.currentTarget.value;
    this.setState(params);
  };

  updateForm = evt => {
    // check if really the value has changed
    if (this.previousValues[evt.currentTarget.name] !== evt.currentTarget.value) {
      const params = {};
      const event = Object.assign({}, evt);

      params[evt.currentTarget.name] = evt.currentTarget.value;
      // API Call
      new Action(this.props.tenant)
        .BackOffice.Settings.setSEO(params).then(action => {
          // dispatch Action to Store/Reducer
          this.props.dispatch(action);

          // set the value to check again
          this.previousValues[event.currentTarget.name] = event.currentTarget.value;
          // show notification
          this.props.notification.add({ message: 'Settings saved', level: 'success' });
        }
      ).catch(() => {
        const state = Object.assign({}, this.state);

          // rollback changes of state
        state[event.currentTarget.name] = this.previousValues[event.currentTarget.name];
        this.setState(state);
          // show notification
        this.props.notification.add({ message: 'There was an error saving settings', level: 'error' });
      });
    }
  };

  _getMenuItems() {
    const formattedMessage = this.context.intl.formatMessage;
    // const permissions = this.props.user.toJS().permissions;
    const menuitems = [];
    menuitems.push({ url: '/admin/settings', title: formattedMessage({ id: 'general' }) });
    return menuitems;
  }

  render() {
    const menuitems = this._getMenuItems();
    const menu = menuitems.map(data => (
      <Link key={data.id} to={data.url} activeClassName="active" id={data.id}>{data.title}</Link>
    ));

    return (

      <div className="container">

        <div className="page-header">
          <Menu>{menu}</Menu>
        </div>

        <Row>

          <div className="boSettingsContent">
            <div id="divGeneral">
              <form id="#generalInformationForm">
                <label>
                  Site Name
                  <input type="text" name="title" className="form-control" value={this.state.title}
                    onChange={this.changeValue} onBlur={this.updateForm} />
                </label>
                <label>
                  Tag Line
                  <input type="text" name="tagline" className="form-control" value={this.state.tagline}
                    onChange={this.changeValue} onBlur={this.updateForm} />
                </label>
                <label>
                  Site Description
                    <textarea required name="description" className="form-control" value={this.state.description}
                      onChange={this.changeValue} onBlur={this.updateForm}>
                    </textarea>
                </label>
              </form>
            </div>
          </div>

        </Row>

      </div>
    );
  }
}

const _components = {
  default: Settings,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
