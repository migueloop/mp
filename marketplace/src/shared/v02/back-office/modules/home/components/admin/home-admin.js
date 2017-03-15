import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AnalyticsCmpt from './analytics';
import TodoCmpt from './todo';
import { FormattedMessage } from 'react-intl';

@connect(state => ({
  backoffice: state.get('backoffice'),
  corners: state.get('corners'),
  products: '',
}))
class HomeBO extends Components {

  constructor(props) {
    super(props);
    this.state = {
      michelAnalytics: 'https://sncf-bi360.digitaldimension.services',
      gerardAnalytics: 'https://sncf-bi360.digitaldimension.services',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        michelAnalytics: 'https://sncf-bi360.digitaldimension.services/Analysis?AnalysisID=150&WhiteLabel=true',
        gerardAnalytics: 'https://sncf-bi360.digitaldimension.services/Analysis?AnalysisID=120&WhiteLabel=true',
      });
    }, 3000);
  }

  render() {
    const Todo = TodoCmpt.get(this.props.tenant);
    const [Analytics] = [AnalyticsCmpt].map(cmpt => cmpt.get(this.tenant));
    const user = this.props.user.toJS();
    let analytics = <Analytics />;
    if (user.role.id === 22 || user.role.id === 24 || user.role.id === 25) {
      console.log('use role', user.role.id);
      const style = { width: '100%', minHeight: '400px' };
      analytics = (
        <div>
          <iframe style={style} src={this.state.michelAnalytics}></iframe>
          <iframe style={style} src={this.state.gerardAnalytics}></iframe>
        </div>
      );
    }
    return (
      <div className="container voffset-top-2">
        <Row>
          <Col lg={6}>
            <h3><FormattedMessage id="analytics" /></h3>
            {analytics}
          </Col>
          <Col lg={5} lgOffset={1}><Todo /></Col>
        </Row>
      </div>
    );
  }
}

export default HomeBO;
