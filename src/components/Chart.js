// libs
import React from 'react';
// components
import { Bar, Pie, Line, Doughnut, Radar, Polar } from 'react-chartjs-2';
import { Toggle } from 'material-ui';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yAxesToggled: true
        }
        this.handleChangeToggle = this.handleChangeToggle.bind(this);
    }
    // !!! set displayTitle to true to display chart title above the chart
    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        // !!! changes legend position
        legendPosition: 'bottom'
    }
    handleChangeToggle(event) {
        this.setState({
            yAxesToggled: !this.state.yAxesToggled
        });
    }
    render() {
        var chartTitle = 'Inputs: ' + this.props.inputAmount;
        return(
            <div className="chart">
                {this.props.chartType === 'bar' &&
                <div>
                <Bar
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.chartTitle,
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: this.state.yAxesToggled
                                }
                            }]
                        }
                    }}
                />
                <Toggle
                    label="Y-axis: 0"
                    style={{maxWidth: '150px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}
                    toggled={this.state.yAxesToggled}
                    onToggle={this.handleChangeToggle}
                />
                </div>}
                {this.props.chartType === 'pie' &&
                <Pie
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: true,
                            text: chartTitle,
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    var dataset = data.datasets[tooltipItem.datasetIndex];
                                    var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                                        return previousValue + currentValue;
                                    });
                                    var currentValue = dataset.data[tooltipItem.index];
                                    var precentage = Math.floor(((currentValue / total) * 100) + 0.5);
                                    return precentage + "%";
                                }
                            }
                        }
                    }}
                />}
                {this.props.chartType === 'doughnut' &&
                <Doughnut
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: true,
                            text: chartTitle,
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    var dataset = data.datasets[tooltipItem.datasetIndex];
                                    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                        return previousValue + currentValue;
                                    });
                                    var currentValue = dataset.data[tooltipItem.index];
                                    var precentage = Math.floor(((currentValue/total) * 100)+0.5);
                                    return precentage + "%";
                                }
                            }
                        }
                    }}
                />}
                {this.props.chartType === 'polar' &&
                <Polar
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.chartTitle,
                            fontSize: 22
                        },
                        legend:{
                            display: true,
                            position: this.props.legendPosition
                        }
                    }}
                />}
                {/* to add new types of charts, example below */}
                {/*this.props.chartType === 'radar' &&
                <Radar
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.displayTitleText,
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        }
                    }}
                />*/}
            </div>
        );
    }
}
