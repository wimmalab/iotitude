// libs
var React = require('react');
var Bar = require('react-chartjs-2').Bar;
var Pie = require('react-chartjs-2').Pie;
var Line = require('react-chartjs-2').Line;
var Doughnut = require('react-chartjs-2').Doughnut;
var Radar = require('react-chartjs-2').Radar;
var Polar = require('react-chartjs-2').Polar;

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'bottom'
    }
    render() {
        return(
            <div className="chart">
                {this.props.chartType === 'bar' &&
                <Bar
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
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        }
                    }}
                />}
                {this.props.chartType === 'doughnut' &&
                <Doughnut
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        }
                    }}
                />}
                {this.props.chartType === 'polar' &&
                <Polar
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Harmitusmittari',
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        }
                    }}
                />}
                {this.props.chartType === 'radar' &&
                <Radar
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
                {this.props.chartType === 'line' &&
                <Line
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
