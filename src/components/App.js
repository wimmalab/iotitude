// libs
import React from 'react';
import axios from 'axios';
import Moment from 'moment';
//components
import SideBar from './SideBar';
import Chart from './Chart';
import ChartType from './ChartType';
import QueryType from './QueryType';
import LimitType from './LimitType';
import EndPoint from './EndPoint';
import Logo from '../assets/IoTitude_logo.png';
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
            chartData: {},
            color1: '#4caf50',
            color2: '#e6ee9c',
            color3: '#ffeb3b',
            color4: '#f44336',
            label1: 'Good',
            label2: 'OK',
            label3: 'Slightly Annoyed',
            label4: 'Pissed Off',
            chartTitle: 'Mood-o-Meter'
        }
        this.getData = this.getData.bind(this);
        this.getDataInterval = this.getDataInterval.bind(this);
        this.updateChartType = this.updateChartType.bind(this);
        this.updateQueryType = this.updateQueryType.bind(this);
        this.updateLimitType = this.updateLimitType.bind(this);
        this.updateEndPoint = this.updateEndPoint.bind(this);
        this.displayData = this.displayData.bind(this);
        this.updateColor1 = this.updateColor1.bind(this);
        this.updateColor2 = this.updateColor2.bind(this);
        this.updateColor3 = this.updateColor3.bind(this);
        this.updateColor4 = this.updateColor4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(title, label1, label2, label3, label4) {
        console.log(title, label1, label2, label3, label4);
        this.setState({
            chartTitle: title,
            label1: label1,
            label2: label2,
            label3: label3,
            label4: label4
        });
    }
    updateColor1(newColor) {
        this.setState({
            color1: newColor
        });
    }
    updateColor2(newColor) {
        this.setState({
            color2: newColor
        });
    }
    updateColor3(newColor) {
        this.setState({
            color3: newColor
        });
    }
    updateColor4(newColor) {
        this.setState({
            color4: newColor
        });
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
                    harmitus4 += 1;
                    break;
                case 1:
                    harmitus3 += 1;
                    break;
                case 2:
                    harmitus2 += 1;
                    break;
                case 3:
                    harmitus1 += 1;
                    break;
            }
        });
        // !!! to add a label to the tooltip (example: "Inputs:"), add below as label value
        this.setState({
            inputAmount: inputAmount,
            chartData: {
                labels: [this.state.label1, this.state.label2, this.state.label3, this.state.label4],
                datasets: [{
                    label: "",
                    data: [harmitus1, harmitus2, harmitus3, harmitus4],
                    backgroundColor: [this.state.color1, this.state.color2, this.state.color3, this.state.color4]
                }]
            }
        });
    }
    getData(endPoint, query, limit) {
        var apiCall = config.rest_api_url + endPoint + query + limit;
        console.log('query:', apiCall);
        axios.get(apiCall)
            .then(function (response) {
                console.log(response);
                this.displayData(response.data);
                this.setState({
                    responseData: response.data
                });
            }.bind(this))
            .catch(function (error) {
                console.log('Response error:', error);
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
        // !!! change interval value (5000) to change frequency of GET calls
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
            <div className="wrapper">
                <header>
                    <img src={Logo} alt={'IoTitude'} />
                    <h1>{this.state.chartTitle}</h1>
                </header>
                <SideBar
                    updateColor1={this.updateColor1}
                    updateColor2={this.updateColor2}
                    updateColor3={this.updateColor3}
                    updateColor4={this.updateColor4}
                    handleSubmit={this.handleSubmit}>
                    <ChartType updateChartType={this.updateChartType} />
                    <QueryType updateQueryType={this.updateQueryType} />
                    <LimitType updateLimitType={this.updateLimitType} />
                    <EndPoint updateEndPoint={this.updateEndPoint} />
                </SideBar>
                <div className="chart-wrapper">
                    <Chart chartTitle={this.state.chartTitle} chartType={this.state.chartType} chartData={this.state.chartData} inputAmount={this.state.inputAmount}/>
                </div>
                <footer>IoTitude @ <a href='http://iotitude.gitlab.io/' target='_blank'>iotitude.gitlab.io</a></footer>
            </div>
        );
    }
}
