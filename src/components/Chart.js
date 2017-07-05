// libs
import React from 'react';
import { Bar, Pie, Line, Doughnut, Radar, Polar } from 'react-chartjs-2';

export default class Chart extends React.Component {
    static defaultProps = {
        displayTitle: true,
        displayTitleText: 'Mielialamittari',
        displayLegend: false,
        legendPosition: 'bottom',
        beginAtZero: true
    }
    render() {
        var chartTitle = this.props.displayTitleText + ' - syötteiden määrä: ' + this.props.inputAmount;
        return(
            <div className="chart">
                {this.props.chartType === 'bar' &&
                <Bar
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.displayTitleText,
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: this.props.beginAtZero
                                }
                            }]
                        }
                    }}
                />}
                {this.props.chartType === 'pie' &&
                <Pie
                    data={this.props.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
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
                            display: this.props.displayTitle,
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
                            text: this.props.displayTitleText,
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
                            text: this.props.displayTitleText,
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
                            text: this.props.displayTitleText,
                            fontSize: 22
                        },
                        legend:{
                            display: this.props.displayLegend
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: this.props.beginAtZero
                                }
                            }]
                        }
                    }}
                />}
            </div>
        );
    }
}
