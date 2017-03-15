import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import { FormattedMessage, FormattedDate } from 'react-intl';
import HorizontalMenuCmpt from 'v02/back-office/modules/layout/horizontal-menu';
import axios from 'axios';
import moment from 'moment';
import Actions from 'flux/actions';
import IconComment from 'react-icons/lib/md/comment';
import Timelines from 'v02/back-office/generic-components/timelines';

class ModalTimeLine extends Components {
  static propTypes = {
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    assignment: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      tab: 'timeline',
      comment: '',
      timelines: null,
    };
  }

  onChangeComment = e => {
    return this.setState({ comment: e.target.value });
  }

  onSubmitComment = () => {
    const comment = this.state.comment;
    if (!this.isCommentValid(comment)) {
      return this.props.notification.add({ message: this.format({ id: 'invalid_comment' }), level: 'error' });
    }
    const payload = {
      body: comment,
      userId: this.props.user.toJS().id,
      workflowId: this.props.workflowId,
    };

    return new Actions(this.props.tenant).LogComments.create(payload)
    .then(action => this.props.dispatch(action))
    .then(() => this.setState({ comment: '' }))
    .then(() => this.props.notification.add({ message: this.format({ id: 'comment_added' }), level: 'success' }));
  }

  isCommentValid = comment => {
    if (!comment || comment === '') {
      return false;
    }
    return true;
  }

  getLogsAndCommentsMarkup = (logs, comments) => {
    const users = this.props.users.toJS();
    // TODO - match agains workflow id - need this from log ajax call!
    const logsAndComments = logs.concat(comments)
    .map(item => {
      const copy = Object.assign(item);
      if (copy.body) {
        copy.type = 'comment';
        copy.date = copy.created_at;
        copy.user = users.find(user => user.id === copy.id_user);
      } else {
        copy.type = 'log';
      }
      return copy;
    })
    .sort((a, b) => a.date - b.date);
    const logsJsx = logsAndComments.map(item => {
      const type = item.type;
      if (type === 'comment') {
        return (
          <Row className="rows-alt comment">
            <Col xs={6} className="col">
            <FormattedDate value={ item.date } day="numeric" month="long" year="numeric" />
            &nbsp;{ moment(item.date).format('hh:mm:ss') }
            </Col>
            <Col xs={6} className="col" >"{item.body}"<span className="author"> - {item.user && `${item.user.name} ${item.user.lastname}`}</span>
              <IconComment className="ico-comment" /></Col>
          </Row>
        );
      }
      return (
        <Row className="rows-alt log">
          <Col xs={6}>
          <FormattedDate value={ item.date } day="numeric" month="long" year="numeric" />
          &nbsp;{ moment(item.date).format('hh:mm:ss') }
          </Col>
          <Col xs={6}><FormattedMessage id={ item.step } /></Col>
        </Row>
      );
    });
    const formattedMessage = this.context.intl.formatMessage;
    return (
      <div className="table-static">
        <Row>
          <Col xs={6} className="th"><FormattedMessage id="Date" /></Col>
          <Col xs={6} className="th"><FormattedMessage id="steps/comments" /></Col>
        </Row>
        {logsJsx}
        <Row style={{ padding: '25px' }}></Row>
        <Row>
          <Col xs={9}>
            <Input type="textarea" onChange={this.onChangeComment} value={this.state.comment} style={{ height: '48px', minHeight: 'initial' }} placeholder={`${formattedMessage({ id: 'comment' })} ...`} />
          </Col>
          <Col xs={3}>
            <Button onClick={this.onSubmitComment} className="btn-green" style={{ width: '100%', marginTop: '4px' }}><FormattedMessage id="add_log" /></Button>
          </Col>
        </Row>
      </div>
    );
  }

  hide = () => {
    this.setState({
      tab: 'timeline',
      logs: false,
    });
    this.props.onHide();
  }

  onEnter = () => {
    console.log('onEnter!!!');
    this.getTimelineLogsDirty();
    this.getTimelinesDataDirty();
  }

  componentDidMount() {
  }

  getTimelineLogsDirty = () => {
    // This is a quick and dirty ajax call to get the timeline data
    axios.get(`${this.props.workflow.endpoint.front}workflow/${this.props.workflowId}/log`).then(({ data }) => {
      this.setState({ logs: data });
    });
  }

  getTimelinesDataDirty = () => {
    axios.get(`${this.props.workflow.endpoint.front}workflow/${this.props.workflowId}`)
    .then(({ data }) => {
      console.log('endpoint data', data);
      this.setState({ timelines: data });
    });
  }

  render() {
    if (!this.props.show || !this.props.workflowId) {
      return null;
    }

    const timelines = this.state.timelines || [];

    // TODO: QUICK AND DIRTY TO SHOW LOGS..
    if (!this.state.logs) {
      this.getTimelineLogsDirty();
    }
    if (!this.state.timelines) {
      this.getTimelinesDataDirty();
    }
    console.log('this.props.workflow.endpoint', this.props.workflow.endpoint);
    const [HorizontalMenu] = [HorizontalMenuCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <Modal show={this.props.show} onHide={this.hide} onEnter={this.onEnter} dialogClassName="modal-half">
        <Modal.Header><FormattedMessage id="track" /></Modal.Header>
        <Modal.Body>
          <div>
            <HorizontalMenu>
              <a onClick={() => this.setState({ tab: 'timeline' })} className={this.state.tab === 'timeline' ? 'active' : ''}><FormattedMessage id="timelines" /></a>
              <a onClick={() => this.setState({ tab: 'log' })} className={this.state.tab !== 'timeline' ? 'active' : ''}><FormattedMessage id="timeline_details" /></a>
            </HorizontalMenu>
            <div style={{ margin: '20px auto' }}>
              {
                this.state.tab === 'timeline' ?
                  <Timelines timelines={timelines} /> :
                  <div>
                    {!this.state.logs ?
                      <FormattedMessage id="loading" /> : this.getLogsAndCommentsMarkup(this.state.logs, this.props.logComments.toJS().filter(comment => comment.id_workflow === this.props.workflowId))}
                  </div>
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer><Button bsStyle="primary" onClick={this.hide}><FormattedMessage id="close" /></Button></Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    workflow: state.get('backoffice').get('workflow').toJS(),
    logComments: state.get('logComments'),
    users: state.get('backoffice').get('users'),
    user: state.get('v02').get('common').get('user'),
    notification: state.get('notification'),
  };
}

const _components = { default: connect(stateToProps)(ModalTimeLine) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
