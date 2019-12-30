export default class Block {
    _id;
    _compositionId;
    _type;
    _blockData;
    _created;
    _updated;


    /**
     * @param {string} id
     * @param {string} compositionId
     * @param {string} type
     * @param {object} blockData
     * @param {number} created
     * @param {number} updated
     */
    constructor({
                    id,
                    compositionId,
                    type,
                    blockData,
                    created,
                    updated
                }) {

        this._id = id;
        this._compositionId = compositionId;
        this._type = type;
        this._blockData = blockData;
        this._created = created;
        this._updated = updated;
    }

    /**
     * @returns {string}
     */
    getId = () => this._id;


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
     * @returns {{compositionId: string, created: number, id: string, type: string, updated: number, blockData: object}}
     */
    getData = () => ({
        id: this._id,
        compositionId: this._compositionId,
        type: this._type,
        blockData: this._blockData,
        created: this._created,
        updated: this._updated,
    });
}