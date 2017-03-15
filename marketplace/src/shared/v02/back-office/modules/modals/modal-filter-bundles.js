import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { ITEM } from 'helpers/constants';
import BundlesCmpt from 'components/shared/bundles';

class ModalFilterBundles extends Components {

  constructor(props) {
    super(props);
    this.state = {
      bundles: [],
    };
  }


  static propTypes = {
    hide: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
  };


  filterBundles = oFilter => {
    // const filterBundlesAlgorithm = filterBundlesAlgorithmFactory(oFilter);
    // this.setState({ products: this.props.products.filter(filterBundlesAlgorithm) });
  };


  componentDidMount() {
    this.setState({
      bundles: this.props.bundles,
    });
  }


  onSelect = oBundle => {
    const oBundleData = {
      alias: oBundle.alias,
      id: oBundle.id,
      logo: oBundle.logo_info.url,
      name: oBundle.title,
    };
    console.log('SELECTED BUNDLE: ', oBundleData);
    this.props.onSelect(oBundleData);
  };


  render() {
    const [Bundles] = [BundlesCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (

      <Modal
        show={this.props.show}
        onHide={this.props.hide}
        bsSize="large"
        className="modal-select-resource"
        id="modal-select-bundle" >

        <Modal.Header>
          <Col md={12}>
            <Modal.Title><FormattedMessage id="select_bundle_to_add" /></Modal.Title>
          </Col>
        </Modal.Header>

        <Modal.Body>
          <Row style={{ marginTop: '5%', marginLeft: '6%' }}>
            <Filter
              keywords={this.props.keywords}
              showFilters
              hasCornerFilter
              onFilter={this.filterBundles}
            />
            <Bundles
              bundles={this.state.bundles}
              onSelect={this.onSelect}
            />
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <Button
              bsStyle="primary"
              onClick={this.props.hide} ><FormattedMessage id="close" /></Button>
          </div>
        </Modal.Footer>

      </Modal>

    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    keywords: state.get('misc').get('keywords').toJS(),
    bundles: state.get('bundles').toJS().filter(oBundle => oBundle.state === ITEM.STATE.KEY.PUBLISHED),
  };
}


const _components = {
  default: connect(stateToProps)(ModalFilterBundles),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
