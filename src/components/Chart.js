// libs
var React = require('react');
var Bar = require('react-chartjs-2').Bar;
var Pie = require('react-chartjs-2').Pie;
var Line = require('react-chartjs-2').Line;

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: false
    }
    render() {
        return(
            <div className="chart">
                {this.props.chartType === 'bar' &&
                <Bar
                    width={300}
                    height={100}
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        }
                    }}
                />}
                {this.props.chartType === 'pie' &&
                <Pie
                    width={300}
                    height={100}
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: true
                        }
                    }}
                />}
                {this.props.chartType === 'line' &&
                <Line
                    style={{width: '500px'}}
                    width={300}
                    height={100}
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        }
                    }}
                />}
            </div>
        );
    }
}

module.exports = Chart;
