// libs
var React = require('react');

class LimitType extends React.Component {
    constructor(props) {
        super(props);
        this.updateLimitType = this.updateLimitType.bind(this);
    }
    updateLimitType(e) {
        var limitType = e.target.value;
        switch(limitType) {
            case 'default':
                limitType = '';
                break;
            case '10':
                limitType = 'limit=10';
                break;
            case '50':
                limitType = 'limit=50';
                break;
            case '100':
                limitType = 'limit=100';
                break;
            case '1K':
                limitType = 'limit=1000';
                break;
            case '10K':
                limitType = 'limit=10000';
                break;
            case '50K':
                limitType = 'limit=50000';
                break;
            case '100K':
                limitType = 'limit=100000';
                break;
        }
        this.props.updateLimitType(limitType);
    }
    render() {
        return(
            <select name="limitType" onChange={this.updateLimitType}>
                <option value="default">--</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="1K">1 000</option>
                <option value="10K">10 000</option>
                <option value="50K">50 000</option>
                <option value="100K">100 000</option>
            </select>
        );
    }
}

module.exports = LimitType;
