const startNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const block1Data = {data: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]};
const block2Data = {data: [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]};

// noinspection JSUnresolvedVariable,ES6ModulesDependencies,JSUnresolvedFunction
db.compositions.insertOne({
    name: "Composition 01",
    startNotes: startNotes,
    startSpeed: 10,
    blocks: [{
        type: 'notes',
        blockData: block1Data,
        created: Date.now(),
        updated: Date.now()
    }, {
        type: 'notes',
        blockData: block2Data,
        created: Date.now(),
        updated: Date.now()
    }],
    created: Date.now(),
    updated: Date.now()
});

// noinspection JSUnresolvedVariable,ES6ModulesDependencies,JSUnresolvedFunction
db.compositions.insert({
    created: Date.now(),
    name: "Composition 02",
    startNotes: startNotes,
    startSpeed: 10,
    blocks: [],
    updated: Date.now()
});