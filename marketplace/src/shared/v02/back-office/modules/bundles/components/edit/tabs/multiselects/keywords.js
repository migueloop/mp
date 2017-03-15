import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { MultiSelect } from 'react-selectize';

class Keywords extends Components {

  static childContextTypes = {
    item: React.PropTypes.string.isRequired,
    item_info: React.PropTypes.string.isRequired,
    corners: React.PropTypes.array.isRequired,
    update: React.PropTypes.object.isRequired,
    save: React.PropTypes.object.isRequired,
  };


  render() {
    return (
      <MultiSelect onBlur={this.props.save.keywords} className="keywords-multiselect"
        options={this.props.item_info.corners ? this.props.item_info.corners.reduce((keywords, itemCorner) => {
          const corner = this.props.corners.find(c => c.id == itemCorner.id);

          return keywords.concat(
                             corner.keywords.reduce((prev, keyword) => {
                               if (!keywords.find(k => k.value == keyword.id)) {
                                 prev.push({
                                   label: keyword.name,
                                   value: keyword.id,
                                 });
                               }
                               return prev;
                             }, [])
                           );
        }, []) : []
                   }
        values={this.props.item_info.keywords ? this.props.item_info.keywords.map(k => ({ label: k.name, value: k.id })) : []}
        onValuesChange={(keywords, callback) => {
          this.props.update.keywords(keywords.map(k => ({ id: k.value, name: k.label })));
          callback();
        }
                   }
        renderValue={ itemToRender => {
          return (
                              <div className="simple-value">
                                <span onClick={() => {
                                  this.props.update.keywords(this.props.item_info.keywords
                                      .filter(clickedItem => itemToRender.value !== clickedItem.id));
                                }}>
                                  {itemToRender.label}
                                </span>
                              </div>
                            );
        }
                   }
        />
    );
  }
}

const _components = {
  default: Keywords,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
