import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import { Link } from 'react-router';
import EditableLogo from './logo';

class Header extends Components {

  static propTypes = {
    changeImage: React.PropTypes.func.isRequired,
    editor: React.PropTypes.object.isRequired,
    logoUrl: React.PropTypes.string.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    resources: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
    showEditorLink: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired,
  };


  onUpload = (files, sImage) => {
    this.props.onUpload(files, sImage);
   /* .then( (action) => {
        console.log('HEADER ACTION: ', action)
        //this.setState({logoUrl: action.item.resource.url})
      });*/
  };


  render() {
    const editorLink = this.props.editor && this.props.editor.alias ? `/editor/${this.props.editor.alias}` : '#';
    const editorTitle = this.props.editor && this.props.editor.title;
    return (
      <header>
        <EditableLogo name={this.props.title}
          changeImage={this.props.changeImage}
          onUpload={this.onUpload}
          resources={this.props.resources}
          logoUrl={this.props.logoUrl ? this.props.logoUrl : this.props.logoUrl} />
        <Col md={8}>
          <p className="brand p-brand h-card">
            {
              this.props.showEditorLink ?
                <Link to={editorLink}>{editorTitle}</Link> : ''
            }
          </p>
          <Input type="text"
            value={this.props.title}
            onChange={({ target }) => {this.props.update('title')(target.value);}}
            onBlur={this.props.save('title')}
            style={{ marginTop: 5 }} />
        </Col>
      </header>
    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

export default connect(stateToProps)(Header);
