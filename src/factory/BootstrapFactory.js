import ComponentFactory from 'redux-autoform-utils/lib/factory/ComponentFactory';
import TextBox from '../components/field/TextBox';
import Password from '../components/field/Password';
import Select from '../components/field/Select';
import TextArea from '../components/field/TextArea';
import Group from '../components/group/Group';
import TabGroup from '../components/group/TabGroup';
import ArrayContainer from '../components/field/ArrayContainer';
import DateTimePicker from '../components/field/DateTimePicker';
import Lookup from '../components/field/Lookup';
import Static from '../components/field/Static';
import FieldGroup from '../components/field/FieldGroup';
import Checkbox from '../components/field/CheckBox';
import Radio from '../components/field/Radio';
import FileUpload from '../components/field/FileUpload';

import Root from '../components/common/Root';

class BootstrapFactory extends ComponentFactory {
    constructor(config) {
        super();
        this.setBaseComponents();
        this.setDefaultConfiguration(config);
    }
    
    setBaseComponents = () => {
        this.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], TextBox);
        this.registerFieldComponent('Password', ['string'], Password);
        this.registerFieldComponent('Select', ['string'], Select);
        this.registerFieldComponent('Radio', ['string'], Radio);
        this.registerFieldComponent('Lookup', ['string'], Lookup);
        this.registerFieldComponent('TextArea', ['string'], TextArea);
        this.registerFieldComponent('ArrayContainer', ['array'], ArrayContainer);
        this.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], DateTimePicker);
        this.registerFieldComponent('Checkbox', ['bool'], Checkbox);
        this.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], Static);
        this.registerFieldComponent('FieldGroup', ['group'], FieldGroup);
        this.registerFieldComponent('FileUpload', ['string'], FileUpload);



        this.registerGroupComponent('Group', Group);
        this.registerGroupComponent('TabGroup', TabGroup);
    };
    
    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');
    };

    getRoot = () => {
        return Root;
    }

}

export default BootstrapFactory;