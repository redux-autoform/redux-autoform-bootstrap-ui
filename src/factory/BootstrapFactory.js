import ComponentFactory from 'redux-autoform-utils/lib/factory/ComponentFactory';
import TextBox from '../components/fields/TextBox';
import Select from '../components/fields/Select';
import TextArea from '../components/fields/TextArea';
import Group from '../components/group/Group';
import ArrayContainer from '../components/fields/ArrayContainer';
import DateTimePicker from '../components/fields/DateTimePicker';
import Lookup from '../components/fields/Lookup';
import Static from '../components/fields/Static';
import FieldGroup from '../components/fields/FieldGroup';
import Checkbox from '../components/fields/CheckBox';
import Radio from '../components/fields/Radio';

class BootstrapFactory extends ComponentFactory {
    constructor(config) {
        super();
        this.setBaseComponents();
        this.setDefaultConfiguration(config);
    }
    
    setBaseComponents = () => {
        this.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], TextBox);
        this.registerFieldComponent('Select', ['string'], Select);
        this.registerFieldComponent('Radio', ['string'], Radio);
        this.registerFieldComponent('Lookup', ['string'], Lookup);
        this.registerFieldComponent('TextArea', ['string'], TextArea);
        this.registerFieldComponent('ArrayContainer', ['array'], ArrayContainer);
        this.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], DateTimePicker);
        this.registerFieldComponent('Checkbox', ['bool'], Checkbox);
        this.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], Static);
        this.registerFieldComponent('FieldGroup', ['group'], FieldGroup);

        this.registerGroupComponent('Group', Group);
    };
    
    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');
    };

}

export default BootstrapFactory;