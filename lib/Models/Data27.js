/**
 * FlowrouteNumbersAndMessagingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Data27
 */
class Data27 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.attributes = this.constructor.getValue(obj.attributes);
        this.id = this.constructor.getValue(obj.id);
        this.links = this.constructor.getValue(obj.links);
        this.relationships = this.constructor.getValue(obj.relationships);
        this.type = this.constructor.getValue(obj.type, 'number');
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'attributes', realName: 'attributes', type: 'Attributes28' },
            { name: 'id', realName: 'id' },
            { name: 'links', realName: 'links', type: 'Links' },
            { name: 'relationships', realName: 'relationships' },
            { name: 'type', realName: 'type' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Data27;
