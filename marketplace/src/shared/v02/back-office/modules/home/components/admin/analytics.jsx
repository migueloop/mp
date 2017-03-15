import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import LineChart from 'react-chartjs/lib/line';
import Pie from 'react-chartjs/lib/pie';
import Col from 'react-bootstrap/lib/Col';

@connect(state => ({tenant: state.get('tenant')}))
class Analytics extends Components {

  constructor(props) {
    super(props);
    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.pieChartData = [
      {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Applications Web"
      },
      {
        value: 100,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Applications Mobile"
      },
      {
        value: 50,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Jeux"
      }
    ]
  }

  render() {
    let {title, ...otherProps} = this.props;
    return (
      <div>
        <div className="canvas"><LineChart data={this.lineChartData} width="610" height="305" /></div>
        <hr />
        <div className="canvas"><Pie data={this.pieChartData} width="610" height="305" /></div>
      </div>
    );
  }
}

let _components = {
  default: Analytics
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default
  }
}
