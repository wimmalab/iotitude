// libs
import React from 'react';
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
    render() {
        return(
            <SelectField
                floatingLabelText="Chart"
                value={this.state.value}
                onChange={this.updateChartType}>
                <MenuItem value={'bar'} primaryText="Bar" />
                <MenuItem value={'pie'} primaryText="Pie" />
                <MenuItem value={'doughnut'} primaryText="Doughnut" />
                <MenuItem value={'polar'} primaryText="Polar" />
                <MenuItem value={'radar'} primaryText="Radar" />
                <MenuItem value={'line'} primaryText="Line" />
            </SelectField>
        );
    }
}
