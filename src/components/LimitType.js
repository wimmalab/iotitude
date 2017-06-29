// libs
import React from 'react';
import { MenuItem, SelectField } from 'material-ui';

export default class LimitType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.updateLimitType = this.updateLimitType.bind(this);
    }
    updateLimitType(e, index, value) {
        this.setState({value});
        this.props.updateLimitType(value);
    }
    render() {
        return(
            <SelectField
                floatingLabelText="Limit inputs"
                floatingLabelFixed={true}
                value={this.state.value}
                onChange={this.updateLimitType}>
                <MenuItem value={''} primaryText="--" />
                <MenuItem value={'limit=10'} primaryText="10" />
                <MenuItem value={'limit=50'} primaryText="50" />
                <MenuItem value={'limit=100'} primaryText="100" />
                <MenuItem value={'limit=1000'} primaryText="1 000" />
                <MenuItem value={'limit=10000'} primaryText="10 000" />
                <MenuItem value={'limit=50000'} primaryText="50 000" />
                <MenuItem value={'limit=100000'} primaryText="100 000" />
            </SelectField>
        );
    }
}
