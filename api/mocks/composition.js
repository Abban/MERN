import Composition from '../models/Composition';

const startNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const composition1 = new Composition({
    name: "Composition 01",
    startNotes: startNotes,
    startSpeed: 10,
    created: Date.now(),
    updated: Date.now()
});

const composition2 = new Composition({
    name: "Composition 02",
    startNotes: startNotes,
    startSpeed: 10,
    created: Date.now(),
    updated: Date.now()
});

export default [composition1, composition2]