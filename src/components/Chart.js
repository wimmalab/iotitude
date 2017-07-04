// libs
import React from 'react';
import { Bar, Pie, Line, Doughnut, Radar, Polar } from 'react-chartjs-2';

export default class Chart extends React.Component {
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
                            text: 'Mielialamittari',
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
                            text: 'Mielialamittari',
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
                            text: 'Mielialamittari',
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
                            text: 'Mielialamittari',
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
                            text: 'Mielialamittari',
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
                            text: 'Mielialamittari',
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
