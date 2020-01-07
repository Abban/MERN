import Composition from '../Composition';

test('Composition_onCreated_setsAndGets', () => {
    const startNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    const data = {
        name: "Composition 01",
        startNotes: startNotes,
        startSpeed: 10,
        created: Date.now(),
        updated: Date.now()
    };

    const composition = new Composition(data);

    expect(composition.getName()).toBe(data.name);
    expect(composition.getStartNotes()).toBe(data.startNotes);
    expect(composition.getStartSpeed()).toBe(data.startSpeed);
    expect(composition.getCreated()).toBe(data.created);
    expect(composition.getUpdated()).toBe(data.updated);
    expect(composition.getData()).toEqual(data);
});