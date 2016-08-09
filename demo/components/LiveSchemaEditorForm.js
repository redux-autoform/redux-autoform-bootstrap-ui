import React, {Component, PropTypes} from 'react';
import CodeEditor from './CodeEditor';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import presets from '../presets';

class LiveSchemaEditorForm extends Component {
    onPresetChange = (event) => {
        browserHistory.push(`/redux-autoform/demo.html?preset=${event.target.value}`);
    };
    
    getOptions = () => {
        return presets.map((item, index) => (
            <option key={index} value={item.name}>
                {item.displayName}
            </option>
        ));  
    };

    getNewProps = (prop) => {
        const {initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, active, touched, visited, autofilled, ...rest} = prop;
        
        return rest;
    };

    render() {
        const { fields: {entityName, layoutName, schema}, selectedPreset, formOptionActions } = this.props;
        const newLayout = this.getNewProps(layoutName);
        const newEntity = this.getNewProps(entityName);
        const newSchema = this.getNewProps(schema);
        
        console.log(JSON.stringify(newLayout))
        return <div>
            <div className='row'>
                <div className="col-md-12">
                    <span className="pull-right">
                        <a target="blank" href="https://github.com/redux-autoform/redux-autoform/blob/master/docs-md/documentation.md">metadata documentation</a>
                    </span>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>
                            Select a <span style={{color: 'red'}}>preset</span> 
                            <i className="fa fa-level-down" aria-hidden="true"/>
                        </ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={this.onPresetChange} value={selectedPreset}>
                            { this.getOptions() }
                        </FormControl>
                    </FormGroup>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6">
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>
                            Entity name
                        </ControlLabel>
                        <FormControl type="text" value="" placeholder="Enter text" {...newEntity}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup controlId="formBasicText2">
                        <ControlLabel>
                            Layout name
                        </ControlLabel>
                        <FormControl type="text" value="" placeholder="Enter text" {...newLayout}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <FormGroup controlId="formBasicText3">
                        <ControlLabel>
                            Schema
                        </ControlLabel>
                        <CodeEditor { ...newSchema}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            </div>
        </div>;
    }
}

LiveSchemaEditorForm.propTypes = {};

export default reduxForm({
    form: 'meta',
    fields: ['entityName', 'layoutName', 'schema']
})(LiveSchemaEditorForm);