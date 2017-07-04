// libs
import React from 'react';
import { MenuItem, SelectField } from 'material-ui';

export default class EndPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.updateEndPoint = this.updateEndPoint.bind(this);
    }
    updateEndPoint(e, index, value) {
        this.setState({value});
        this.props.updateEndPoint(value);
    }
    render() {
        return(
            <SelectField
                floatingLabelText="Endpoint"
                floatingLabelFixed={true}
                value={this.state.value}
                onChange={this.updateEndPoint}>
                <MenuItem value={''} primaryText="All" />
                <MenuItem value={'9JQgtPwRfHxVUhp12QX/sIVYpa0='} primaryText="1" />
                <MenuItem value={'ONltbQpsTErfDxfTm92syBU0EMg='} primaryText="2" />
                <MenuItem value={'nQSFLfSWb9yQt1o2qRRYE8Ct6IQ='} primaryText="3" />
                <MenuItem value={'iGE/C0ew1SRt6Qu0iP3O4nN3Qwc='} primaryText="4" />
                <MenuItem value={'Nu4W6wHRhTBifmy64ld74EqDWF4='} primaryText="5" />
                <MenuItem value={'TLYMdLOR9hZ13d4Uq/d0zevYNRg='} primaryText="6" />
                <MenuItem value={'cksXdpmFk+xWg19kNaaUeM/IAio='} primaryText="7" />
            </SelectField>
        );
    }
}
