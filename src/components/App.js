// libs
var React = require('react');
var axios = require('axios');
// utils
var config = require('../utils/config');
//components
var Chart = require('./Chart');
var Menu = require('./Menu');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartType: 'bar',
            chartData: {}
        }
        this.getData = this.getData.bind(this);
        this.updateChartType = this.updateChartType.bind(this);
    }

    updateChartType(newChartType) {
        this.setState({
            chartType: newChartType
        });
    }

    getData() {
        axios.get(config.rest_api_url)
            .then(function (response) {
                var harmitus1 = 0;
                var harmitus2 = 0;
                var harmitus3 = 0;
                var harmitus4 = 0;
                response.data.map(function (x) {
                    switch(x.harmitusLvl) {
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
                this.setState({
                    chartData: {
                        labels: ['Mahtava', 'Ihan jees', 'Harmittaa', 'Vituttaa'],
                        datasets: [{
                            label: "Harmitus",
                            data: [harmitus1, harmitus2, harmitus3, harmitus4],
                            backgroundColor: ['lightgreen', 'lightyellow', 'orange', 'indianred'],
                            borderWidth: 1
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
        this.getData();
    }

    render() {
        return (
            <div>
                <Menu updateChartType={this.updateChartType} />
                <Chart chartType={this.state.chartType} chartData={this.state.chartData} />
            </div>
        );
    }
}

module.exports = App;