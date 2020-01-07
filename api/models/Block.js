import mongoose, { Schema } from 'mongoose';

export default class Block {

    _compositionId;
    _type;
    _blockData;
    _created;
    _updated;


    /**
     * @param {string} compositionId
     * @param {string} type
     * @param {object} blockData
     * @param {number} created
     * @param {number} updated
     */
    constructor({
                    compositionId,
                    type,
                    blockData,
                    created,
                    updated
                }) {
        this._compositionId = compositionId;
        this._type = type;
        this._blockData = blockData;
        this._created = created;
        this._updated = updated;
    }


    /**
     * @returns {string}
     */
    getCompositionId = () => this._compositionId;


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
     * @returns {{compositionId: string, created: number, type: string, updated: number, blockData: object}}
     */
    getData = () => ({
        compositionId: this._compositionId,
        type: this._type,
        blockData: this._blockData,
        created: this._created,
        updated: this._updated,
    });
}

export const BlockSchema = new Schema({
    type: String,
    blockData: Object,
    created: Number,
    updated: Number
});

export const BlockModel = mongoose.model('Block', BlockSchema);