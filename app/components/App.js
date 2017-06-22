// libs
var React = require('react');
var axios = require('axios');
// utils
var config = require('../utils/config');
//components

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            harmitus1: 0,
            harmitus2: 0,
            harmitus3: 0,
            harmitus4: 0
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(config.rest_api_url)
            .then(function (response) {
                // console.log(response.data);
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

                    // console.log(x.harmitusLvl);
                });
                console.log("harmitus1:", harmitus1, "harmitus2:", harmitus2, "harmitus3:", harmitus3, "harmitus4:", harmitus4);
                this.setState({
                    harmitus1: harmitus1,
                    harmitus2: harmitus2,
                    harmitus3: harmitus3,
                    harmitus4: harmitus4
                });
                console.log(this.state);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        );
    }
}

module.exports = App;
