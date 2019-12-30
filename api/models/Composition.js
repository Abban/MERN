export default class Composition {

    _id;
    _name;
    _startSpeed;
    _startNotes;
    _created;
    _updated;


    /**
     * Constructor
     *
     * @param {string} id
     * @param {string} name
     * @param {number} startSpeed
     * @param {array} startNotes
     * @param {number} created
     * @param {number} updated
     */
    constructor(
        id,
        name,
        startSpeed,
        startNotes,
        created,
        updated) {
        this._id = id;
        this._name = name;
        this._startSpeed = startSpeed;
        this._startNotes = startNotes;
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
    getName = () => this._name;


    /**
     * @returns {number}
     */
    getStartSpeed = () => this._startSpeed;


    /**
     * @returns {array}
     */
    getStartNotes = () => this._startNotes;


    /**
     * @returns {number}
     */
    getCreated = () => this._created;


    /**
     * @returns {number}
     */
    getUpdated = () => this._updated;


    /**
     * @returns {{startSpeed: string, startNotes: array, created: number, name: string, id: string, updated: number}}
     */
    getData = () => ({
        id: this._id,
        name: this._name,
        startSpeed: this._startSpeed,
        startNotes: this._startNotes,
        created: this._created,
        updated: this._updated,
    });
}