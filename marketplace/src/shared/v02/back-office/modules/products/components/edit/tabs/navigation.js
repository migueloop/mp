import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';
import MenuHorizontal from 'v02/back-office/generic-components/layout/horizontal-menu-new';

export default class Navigation extends Components {

  render() {
    const product = this.props.product.toJS();
    const features = this.props.features.toJS();
    let links = [
      {
        url: 'summary',
        id: 'summary',
        // title: 'En synthèse',
        title: this.format({ id: 'product_tabs_in_summary' }),
        available: features.products.features.summary.available,
      },
      {
        url: 'features',
        id: 'features',
        // title: 'En détail',
        title: this.format({ id: 'product_tabs_in_detail' }),
        available: features.products.features.features.available,
      },
      {
        url: 'resources',
        id: 'resources',
        // title: 'En images',
        title: this.format({ id: 'product_tabs_in_images' }),
        available: features.products.features.resources.available,
      },
      {
        url: 'editor',
        id: 'editor',
        // title: 'A propos de l\'éditeur',
        title: this.format({ id: 'product_tabs_about_editor' }),
        available: features.products.features.editor.available,
      },
      {
        url: 'timeline',
        id: 'timeline',
        // title: 'Timeline',
        title: this.format({ id: 'product_tabs_timeline' }),
        available: features.products.features.timeline.available,
      },
      {
        url: 'follow-up-timelines',
        id: 'follow-up-timelines',
        title: this.format({ id: 'follow_up_timelines' }),
        available: features.products.features.followUpTimelines.available,
      },
      {
        url: 'settings',
        id: 'settings',
        // title: 'Settings',
        title: this.format({ id: 'product_tabs_settings' }),
        available: features.products.features.settings.available,
      },
      {
        url: 'assignment-options',
        id: 'assignment-options',
        // title: <FormattedMessage id="assignment_options" />,
        title: this.format({ id: 'product_tabs_assignment_options' }),
        available: features.products.features.lineOptions.available,
      },
    ];

    links = links.map(item => {
      return (
        item.available && (<Link className={item.id} key={item.url} to={`/admin/product/edit/${product.id}/${item.url}`} activeClassName="active"> {item.title} </Link>)
      );
    });
    return (
    <div className="container">
      <div className="page-header">
        <MenuHorizontal align="right" { ...this.props }>{links}</MenuHorizontal>
      </div>
    </div>
    );
  }
}
