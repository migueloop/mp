import React from 'react';
import Editor from 'react-medium-editor';

if (process.browser) {
  require('medium-editor/dist/css/medium-editor.min.css');
  require('medium-editor/dist/css/themes/default.min.css');
}

export default class HtmlEditor extends React.Component {

  static contextTypes = {
    intl: React.PropTypes.object,
  };

  static defaultProps = {
    style: { height: 'auto', minHeight: '185' },
    className: 'form-control',
  };

  onChange = value => {
    this.props.onChange(value);
  };

  render() {
    const options = {
      placeholder: {
        text: this.context.intl.formatMessage({ id: 'your_text_here' }),
      },
    };
    const props = { ...this.props, ...{ options } };
    if (!props.style.height) {
      props.style.height = 'auto';
    }
    if (!props.text) {
      props.text = props.value;
    }
    const editor = (
      <Editor { ...props } />
    );
    return editor;
  }
}
