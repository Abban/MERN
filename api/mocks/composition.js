import Composition from '../models/Composition';

const startNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const composition1 = new Composition({
    created: 0,
    id: "EhY7ajWidJXe",
    name: "Composition 01",
    startNotes: startNotes,
    startSpeed: 10,
    updated: 0
});

const composition2 = new Composition({
    created: 0,
    id: "EhY7ajWidJXg",
    name: "Composition 02",
    startNotes: startNotes,
    startSpeed: 10,
    updated: 0
});

export default [composition1, composition2]