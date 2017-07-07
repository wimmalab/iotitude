// libs
import React from 'react';
// components
import { MenuItem, SelectField, FlatButton, TextField } from 'material-ui';

// !!! add <MenuItem /> with corresponding values if adding new colors
const colors = [
    <MenuItem key={1} value={'#F44336'} primaryText="Red" />,
    <MenuItem key={2} value={'#E91E63'} primaryText="Pink" />,
    <MenuItem key={3} value={'#9C27B0'} primaryText="Purple" />,
    <MenuItem key={4} value={'#673AB7'} primaryText="Deep Purple" />,
    <MenuItem key={5} value={'#3F51B5'} primaryText="Indigo" />,
    <MenuItem key={6} value={'#2196F3'} primaryText="Blue" />,
    <MenuItem key={7} value={'#03A9F4'} primaryText="Light Blue" />,
    <MenuItem key={8} value={'#00BCD4'} primaryText="Cyan" />,
    <MenuItem key={9} value={'#009688'} primaryText="Teal" />,
    <MenuItem key={10} value={'#4CAF50'} primaryText="Green" />,
    <MenuItem key={11} value={'#8BC34A'} primaryText="Light Green" />,
    <MenuItem key={12} value={'#CDDC39'} primaryText="Lime" />,
    <MenuItem key={13} value={'#FFEB3B'} primaryText="Yellow" />,
    <MenuItem key={14} value={'#FFC107'} primaryText="Amber" />,
    <MenuItem key={15} value={'#FF9800'} primaryText="Orange" />,
    <MenuItem key={16} value={'#FF5722'} primaryText="Deep Orange" />
];

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNavWidth: '0px',
            rightNavWidth: '0px',
            color1: '#4CAF50',
            color2: '#CDDC39',
            color3: '#FFEB3B',
            color4: '#F44336',
            label1: 'Good',
            label2: 'OK',
            label3: 'Slightly Annoyed',
            label4: 'Pissed Off',
            chartTitle: 'Mood-o-Meter'
        }
        this.updateColor1 = this.updateColor1.bind(this);
        this.updateColor2 = this.updateColor2.bind(this);
        this.updateColor3 = this.updateColor3.bind(this);
        this.updateColor4 = this.updateColor4.bind(this);
    }
    openSlideMenu() {
        var leftNavWidth = '260px';
        var rightNavWidth = '260px';
        this.setState({
            leftNavWidth: leftNavWidth,
            rightNavWidth: rightNavWidth
        });
    }
    closeSlideMenu() {
        var leftNavWidth = '0px';
        var rightNavWidth = '0px';
        this.setState({
            leftNavWidth: leftNavWidth,
            rightNavWidth: rightNavWidth
        });
    }
    updateColor1(e, index, value) {
        this.setState({color1: value});
        this.props.updateColor1(value);
    }
    updateColor2(e, index, value) {
        this.setState({color2: value});
        this.props.updateColor2(value);
    }
    updateColor3(e, index, value) {
        this.setState({color3: value});
        this.props.updateColor3(value);
    }
    updateColor4(e, index, value) {
        this.setState({color4: value});
        this.props.updateColor4(value);
    }
    onChangeTitle = e => {
        this.setState({ chartTitle: e.target.value });
    }
    onChangeLabel1 = e => {
        this.setState({ label1: e.target.value });
    }
    onChangeLabel2 = e => {
        this.setState({ label2: e.target.value });
    }
    onChangeLabel3 = e => {
        this.setState({ label3: e.target.value });
    }
    onChangeLabel4 = e => {
        this.setState({ label4: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        var title = this.state.chartTitle;
        var label1 = this.state.label1;
        var label2 = this.state.label2;
        var label3 = this.state.label3;
        var label4 = this.state.label4;
        this.props.handleSubmit(title, label1, label2, label3, label4);
    }
    render() {
        return (
            <div>
                <span className="open-slide" style={{
                        opacity: this.state.burgerOpacity,
                        transform: this.state.burgerRotation,
                        marginLeft: this.state.burgerMargin,
                        pointerEvents: this.state.clickEvents}}>
                    <a onClick={() => this.openSlideMenu()} >
                        <svg width="30" height="30">
                            <path d="M0,1 30,1" strokeWidth="2" />
                            <path d="M0,15 30,15" strokeWidth="2" />
                            <path d="M0,29 30,29" strokeWidth="2" />
                        </svg>
                    </a>
                </span>
                <div className="left-bar" style={{width: this.state.leftNavWidth}}>
                    <a className="btn-close" onClick={() => this.closeSlideMenu()}>
                        <svg width="30" height="30">
                            <path d="M0,1 30,1" strokeWidth="2" />
                            <path d="M0,15 30,15" strokeWidth="2" />
                            <path d="M0,29 30,29" strokeWidth="2" />
                        </svg>
                    </a>
                    <div className="side-options">
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                style={{width: '200px', marginLeft: '30px'}}
                                onChange={this.onChangeTitle}
                                defaultValue={this.state.chartTitle}
                                floatingLabelText="Title"
                            />
                            <TextField
                                style={{width: '200px', marginLeft: '30px'}}
                                onChange={this.onChangeLabel1}
                                defaultValue={this.state.label1}
                                floatingLabelText="Input 1"
                            />
                            <TextField
                                style={{width: '200px', marginLeft: '30px'}}
                                onChange={this.onChangeLabel2}
                                defaultValue={this.state.label2}
                                floatingLabelText="Input 1"
                            />
                            <TextField
                                style={{width: '200px', marginLeft: '30px'}}
                                onChange={this.onChangeLabel3}
                                defaultValue={this.state.label3}
                                floatingLabelText="Input 1"
                            />
                            <TextField
                                style={{width: '200px', marginLeft: '30px'}}
                                onChange={this.onChangeLabel4}
                                defaultValue={this.state.label4}
                                floatingLabelText="Input 1"
                            />
                            <br /><br/>
                            <FlatButton
                                style={{width: '200px', marginLeft: '30px'}}
                                primary={true}
                                label="Set"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className="right-bar" style={{width: this.state.leftNavWidth}}>
                    {this.props.children}
                    <SelectField
                        floatingLabelText="Color 1"
                        value={this.state.color1}
                        style={{width: '200px', marginLeft: '30px'}}
                        onChange={this.updateColor1}>
                        {colors}
                    </SelectField>
                    <SelectField
                        floatingLabelText="Color 2"
                        value={this.state.color2}
                        style={{width: '200px', marginLeft: '30px'}}
                        onChange={this.updateColor2}>
                        {colors}
                    </SelectField>
                    <SelectField
                        floatingLabelText="Color 3"
                        value={this.state.color3}
                        style={{width: '200px', marginLeft: '30px'}}
                        onChange={this.updateColor3}>
                        {colors}
                    </SelectField>
                    <SelectField
                        floatingLabelText="Color 4"
                        value={this.state.color4}
                        style={{width: '200px', marginLeft: '30px'}}
                        onChange={this.updateColor4}>
                        {colors}
                    </SelectField>
                </div>
            </div>
        );
    }
}
