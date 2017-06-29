// libs
import React from 'react';
import axios from 'axios';
//components
import Chart from './Chart';
import ChartType from './ChartType';
import QueryType from './QueryType';
import LimitType from './LimitType';
// import EndPoints from './EndPoints';
// utils
import config from '../utils/config';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '?',
            chartType: 'bar',
            limit: '',
            chartData: {}
        }
        this.getData = this.getData.bind(this);
        this.updateChartType = this.updateChartType.bind(this);
        this.updateQueryType = this.updateQueryType.bind(this);
        this.updateLimitType = this.updateLimitType.bind(this);
    }
    updateQueryType(newQueryType) {
        this.setState({
            query: newQueryType
        });
        var currentLimit = this.state.limit;
        this.getData(newQueryType, currentLimit);
    }
    updateChartType(newChartType) {
        this.setState({
            chartType: newChartType
        });
    }
    updateLimitType(newLimit) {
        this.setState({
            limit: newLimit
        });
        var currentQuery = this.state.query;
        this.getData(currentQuery, newLimit);
    }
    getData(query, limit) {
        var apiCall = config.rest_api_url + query + limit;
        console.log(apiCall);
        axios.get(apiCall)
            .then(function (response) {
                var harmitus1 = 0;
                var harmitus2 = 0;
                var harmitus3 = 0;
                var harmitus4 = 0;
                response.data.map(function (harmitus) {
                    switch(harmitus.harmitusLvl) {
                        case 0:
                            harmitus1 += 1;
                            break;
                        case 1:
                            harmitus2 += 1;
                            break;
                        case 2:
                            harmitus3 += 1;
                            break;
                        case 3:
                            harmitus4 += 1;
                            break;
                    }
                });
                // var currentTitle = this.state.title;
                this.setState({
                    chartData: {
                        labels: ['Mahtava', 'Ihan jees', 'Harmittaa', 'Vituttaa'],
                        datasets: [{
                            label: "Harmitus",
                            data: [harmitus1, harmitus2, harmitus3, harmitus4],
                            backgroundColor: ['#4caf50', '#e6ee9c', '#ffeb3b', '#f44336']
                        }]
                    }
                });
                console.log('State after getting data:', this.state);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getData(this.state.query, this.state.limit);
    }
    render() {
        return (
            <div>
                <form className="selection-form">
                    <ChartType updateChartType={this.updateChartType} />
                    <QueryType updateQueryType={this.updateQueryType} />
                    <LimitType updateLimitType={this.updateLimitType} />

                </form>
                <Chart chartType={this.state.chartType} chartData={this.state.chartData} />
            </div>
        );
    }
}
