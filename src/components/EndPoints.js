// libs
import React from 'react';
// components
import { MenuItem, SelectField } from 'material-ui';

export default class EndPoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [1,2,3,4,5,6,7]
        }
        this.updateEndPoints = this.updateEndPoints.bind(this);
    }
    updateEndPoints(e, index, values) {
        this.setState({values});
        console.log(values);
    }
    render() {
        return(
            <SelectField
                floatingLabelText="active"
                floatingLabelFixed={true}
                multiple={true}
                value={this.state.values}
                onChange={this.updateEndPoints}>
                <MenuItem value={''} primaryText="All" />
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={3} primaryText="3" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={6} primaryText="6" />
                <MenuItem value={7} primaryText="7" />
            </SelectField>
        );
    }
}
