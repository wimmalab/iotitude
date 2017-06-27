// libs
var React = require('react');

class ChartType extends React.Component {
    constructor(props) {
        super(props);
        this.updateChartType = this.updateChartType.bind(this);
    }
    updateChartType(e) {
        var chartType = e.target.value;
        this.props.updateChartType(chartType);
    }
    render() {
        return(
            <form>
                <select name="chartType" onChange={this.updateChartType}>
                    <option value="bar">Bar</option>
                    <option value="pie">Pie</option>
                    <option value="line">Line</option>
                </select>
            </form>
        );
    }
}

module.exports = ChartType;
