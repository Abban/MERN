import mongoose, { Schema } from 'mongoose';

export default class Block {

    _composition;
    _order;
    _type;
    _blockData;
    _created;
    _updated;


    /**
     * @param {string} composition
     * @param {string} type
     * @param {number} order
     * @param {object} blockData
     * @param {number} created
     * @param {number} updated
     */
    constructor({
                    composition,
                    order,
                    type,
                    blockData,
                    created,
                    updated
                }) {
        this._composition = composition;
        this._order = order;
        this._type = type;
        this._blockData = blockData;
        this._created = created;
        this._updated = updated;
    }


    /**
     * @returns {string}
     */
    getComposition = () => this._composition;


    /**
     * @returns {number}
     */
    getOrder = () => this._order;


    /**
     * @returns {string}
     */
    getType = () => this._type;


    /**
     * @returns {object}
     */
    getBlockData = () => this._blockData;

    /**
     * @returns {number}
     */
    getCreated = () => this._created;


    /**
     * @returns {number}
     */
    getUpdated = () => this._updated;


    /**
     *
     * @returns {{composition: string, created: number, order: number, type: string, updated: number, blockData: object}}
     */
    getData = () => ({
        composition: this._composition,
        order: this._order,
        type: this._type,
        blockData: this._blockData,
        created: this._created,
        updated: this._updated,
    });
}

export const BlockSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    composition : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Composition'
    },
    order: Number,
    type: String,
    blockData: Object,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
});

export const BlockModel = mongoose.model('Block', BlockSchema);