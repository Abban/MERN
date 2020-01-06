import Block from '../Block';

test('Block_onCreated_setsAndGets', () => {

    const data = {
        blockData: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        compositionId: "EhY7ajWidJXe",
        created: 0,
        id: "EhY7ajWidJXf",
        type: "notes",
        updated: 0
    };

    const block = new Block(data);

    expect(block.getId()).toBe(data.id);
    expect(block.getBlockData()).toBe(data.blockData);
    expect(block.getCompositionId()).toBe(data.compositionId);
    expect(block.getCreated()).toBe(data.created);
    expect(block.getType()).toBe(data.type);
    expect(block.getUpdated()).toBe(data.updated);
    expect(block.getData()).toEqual(data);
});