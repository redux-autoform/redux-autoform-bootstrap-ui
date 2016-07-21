import ComponentFactory from './ComponentFactory'; //TODO Move to Util repo
import { registerBaseComponents } from './helper/BootstrapComponentFactoryHelper';

class BootstrapFactory extends ComponentFactory {

    constructor(config) {
        super();
        registerBaseComponents(this);
        this.setDefaultConfiguration(config);

    }

    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');
    }

    static createComponentFactory(type) {
        switch (type) {
            case 'edit':
                return new BootstrapFactory({
                    'string': 'TextBox',
                    'array': 'ArrayContainer',
                    'datetime': 'DateTimePicker',
                    'time': 'DateTimePicker',
                    'date': 'DateTimePicker',
                    'int' : 'TextBox',
                    'float': 'TextBox',
                    'bool': 'Checkbox',
                    'group': 'FieldGroup'
                });
            case 'details':
                return new BootstrapFactory({
                    'string': 'Static',
                    'array': 'ArrayContainer',
                    'datetime': 'Static',
                    'time': 'Static',
                    'date': 'Static',
                    'int': 'Static',
                    'float': 'Static',
                    'bool': 'Static',
                    'group': 'FieldGroup'
                });
        }
    }
}

export default BootstrapFactory;