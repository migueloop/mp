import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { MultiSelect } from 'react-selectize';

class Corners extends Components {

  static childContextTypes = {
    item: React.PropTypes.string.isRequired,
    item_info: React.PropTypes.string.isRequired,
    corners: React.PropTypes.array.isRequired,
    update: React.PropTypes.object.isRequired,
    save: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <MultiSelect
        className="corners-multiselect"
        onBlur={this.props.save.corners_keywords}
        options={this.props.corners.map(c => ({ label: c.name, value: c.id }))}
        values={ this.props.item_info.corners ? this.props.item_info.corners.map(c => ({ label: c.name, value: c.id })) : [] }
        onValuesChange={ (corners, callback) => {
          this.props.update.corners(corners.map(c => ({ id: c.value, name: c.label })));
          callback();
        }
        }
        renderValue={ itemToRender => {
          return (
            <div className="simple-value">
              <span
                onClick={() => {
                  const corners = this.props.item_info.corners.filter(clickedItem => itemToRender.value !== clickedItem.id);
                  const keywords = corners.reduce((keywords, corner) => {
                    return keywords.concat(
                        this.props.item_info.keywords.filter(k => {
                          return !!this.props.corners.find(c => c.id == corner.id).keywords.find(k2 => k2.id == k.id);
                        })
                      );
                  }, []);

                  this.props.update.corners(corners);

                  setTimeout(() => {
                    this.props.update.keywords(keywords);
                  }, 200);
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

const _components = { default: Corners };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
