import { BootstrapFactory } from '../src/index';
import { expect } from 'chai';


describe("Factory creation", function() {
    it("User requests an edit factory", function(done) {

        let correctConfig = {
            'string': 'TextBox',
            'array': 'ArrayContainer',
            'datetime': 'DateTimePicker',
            'time': 'DateTimePicker',
            'date': 'DateTimePicker',
            'int' : 'TextBox',
            'float': 'TextBox',
            'bool': 'Checkbox',
            'group': 'FieldGroup'
        };

        let factory = BootstrapFactory.createComponentFactory("edit");

        expect(factory.defaultFieldComponents).to.be.deep.equal(correctConfig);
        done()
    })

    it("User requests an details factory", function(done) {
        let correctConfig = {
            'string': 'Static',
            'array': 'ArrayContainer',
            'datetime': 'Static',
            'time': 'Static',
            'date': 'Static',
            'int': 'Static',
            'float': 'Static',
            'bool': 'Static',
            'group': 'FieldGroup'
        };

        let factory = BootstrapFactory.createComponentFactory("details");

        expect(factory.defaultFieldComponents).to.be.deep.equal(correctConfig);
        done()
    })
});