// libs
import React from 'react';
import axios from 'axios';
//components
import Chart from './Chart';
import ChartType from './ChartType';
import QueryType from './QueryType';
import LimitType from './LimitType';
import EndPoint from './EndPoint';
// utils
import config from '../utils/config';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            responseData: [],
            interval: '',
            query: '?',
            chartType: 'bar',
            limit: '',
            endpoint: 'all',
            chartData: {}
        }
        this.getData = this.getData.bind(this);
        this.getDataInterval = this.getDataInterval.bind(this);
        this.updateChartType = this.updateChartType.bind(this);
        this.updateQueryType = this.updateQueryType.bind(this);
        this.updateLimitType = this.updateLimitType.bind(this);
        this.updateEndPoint = this.updateEndPoint.bind(this);
        this.displayData = this.displayData.bind(this);
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
    updateEndPoint(newEndPoint) {
        this.setState({
            endpoint: newEndPoint
        });
    }
    displayData(data) {

        console.log(this.state.endpoint);

        var xData = [];
        var harmitus1 = 0;
        var harmitus2 = 0;
        var harmitus3 = 0;
        var harmitus4 = 0;
        data.map(function (harmitus) {
            if (this.state.endpoint !== 'all' && harmitus.endpoint === this.state.endpoint) {
                xData.push(harmitus);
            }

            switch(xData.harmitusLvl) {
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
        }.bind(this));
        console.log(xData);
        // console.log(response);

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
    }
    getData(query, limit) {
        var apiCall = config.rest_api_url + query + limit;
        console.log(apiCall);
        axios.get(apiCall)
            .then(function (response) {
                this.displayData(response.data);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
    getDataInterval() {
        this.getData(this.state.query, this.state.limit);
        // console.log(this.state.interval);
    }
    componentDidMount() {
        this.getData(this.state.query, this.state.limit);
        var dataInterval = setInterval(this.getDataInterval, 5000);
        // console.log(dataInterval);
        this.setState({
            interval: dataInterval
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
        // console.log('clear', this.state.interval);
    }
    render() {
        return (
            <div>
                <form className="selection-form">
                    <ChartType updateChartType={this.updateChartType} />
                    <QueryType updateQueryType={this.updateQueryType} />
                    <LimitType updateLimitType={this.updateLimitType} />
                    <EndPoint updateEndPoint={this.updateEndPoint} />
                </form>
                <Chart chartType={this.state.chartType} chartData={this.state.chartData} />
            </div>
        );
    }
}
