// libs
import React from 'react';
// components
import { MenuItem, SelectField } from 'material-ui';

export default class ChartType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'bar'
        }
        this.updateChartType = this.updateChartType.bind(this);
    }
    updateChartType(e, index, value) {
        this.setState({value});
        this.props.updateChartType(value);
    }
    /// !!! add <MenuItem /> with corresponding values if adding new type of chart
    render() {
        return(
            <SelectField
                floatingLabelText="Chart"
                value={this.state.value}
                style={{maxWidth: '200px', marginLeft: '30px'}}
                onChange={this.updateChartType}>
                <MenuItem value={'bar'} primaryText="Bar" />
                <MenuItem value={'pie'} primaryText="Pie" />
                <MenuItem value={'doughnut'} primaryText="Doughnut" />
                <MenuItem value={'polar'} primaryText="Polar" />
            </SelectField>
        );
    }
}
