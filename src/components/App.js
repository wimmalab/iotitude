// libs
import React from 'react';
import axios from 'axios';
import Moment from 'moment';
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
            query: '',
            chartType: 'bar',
            limit: '',
            endPoint: 'range?',
            inputAmount: 0,
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
        var currentEndPoint = this.state.endPoint;
        this.getData(this.state.endPoint, newQueryType, currentLimit);
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
        var currentEndPoint = this.state.endPoint;
        var currentQuery = this.state.query;
        this.getData(currentEndPoint, currentQuery, newLimit);
    }
    updateEndPoint(newEndPoint) {
        // var endPoint = 'endpointrange?endpoint=' + newEndPoint + '&';
        this.setState({
            endPoint: newEndPoint
        });
        var currentQuery = this.state.query;
        var currentLimit = this.state.limit;
        this.getData(newEndPoint, currentQuery, currentLimit);
    }
    displayData(data) {
        var inputAmount = data.length;
        var harmitus1 = 0;
        var harmitus2 = 0;
        var harmitus3 = 0;
        var harmitus4 = 0;
        data.map(function (input) {
            switch(input.harmitusLvl) {
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
        this.setState({
            inputAmount: inputAmount,
            chartData: {
                labels: ['Hyvin menee', 'OK', 'Harmittaa', 'Ärsyttää'],
                datasets: [{
                    label: "Mieliala",
                    data: [harmitus1, harmitus2, harmitus3, harmitus4],
                    backgroundColor: ['#4caf50', '#e6ee9c', '#ffeb3b', '#f44336']
                }]
            }
        });
    }
    getData(endPoint, query, limit) {
        var apiCall = config.rest_api_url + endPoint + query + limit;
        console.log('query:', apiCall);
        axios.get(apiCall)
            .then(function (response) {
                this.displayData(response.data);
                this.setState({
                    responseData: response.data
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
    getDataInterval() {
        this.getData(this.state.endPoint, this.state.query, this.state.limit);
    }
    componentDidMount() {
        var today = Moment().format('YYYY-MM-DD');
        var weekAgo = Moment().subtract(7,'d').format('YYYY-MM-DD');
        var query = `start=${weekAgo}&end=${today}`;
        this.getData(this.state.endPoint, query, this.state.limit);
        var dataInterval = setInterval(this.getDataInterval, 5000);
        this.setState({
            interval: dataInterval,
            query: query
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
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
                <Chart chartType={this.state.chartType} chartData={this.state.chartData} inputAmount={this.state.inputAmount}/>
            </div>
        );
    }
}
