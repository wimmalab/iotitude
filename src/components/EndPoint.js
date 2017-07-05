// libs
import React from 'react';
import { MenuItem, SelectField } from 'material-ui';

export default class EndPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'range?'
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
                <MenuItem value={'range?'} primaryText="All" />
                <MenuItem value={'endpointrange?endpoint=Nu4W6wHRhTBifmy64ld74EqDWF4%3D&'} primaryText="D404 - D405" />
                <MenuItem value={'endpointrange?endpoint=9JQgtPwRfHxVUhp12QX/sIVYpa0%3D&'} primaryText="2" />
                <MenuItem value={'endpointrange?endpoint=ONltbQpsTErfDxfTm92syBU0EMg%3D&'} primaryText="3" />
                <MenuItem value={'endpointrange?endpoint=nQSFLfSWb9yQt1o2qRRYE8Ct6IQ%3D&'} primaryText="4" />
                <MenuItem value={'endpointrange?endpoint=iGE/C0ew1SRt6Qu0iP3O4nN3Qwc%3D&'} primaryText="5" />
                <MenuItem value={'endpointrange?endpoint=TLYMdLOR9hZ13d4Uq/d0zevYNRg%3D&'} primaryText="6" />
                <MenuItem value={'endpointrange?endpoint=cksXdpmFk+xWg19kNaaUeM/IAio%3D&'} primaryText="7" />
            </SelectField>
        );
    }
}
