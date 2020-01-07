import Block from '../Block';

test('Block_onCreated_setsAndGets', () => {

    const data = {
        composition: "EhY7ajWidJXe",
        order: 1,
        type: "notes",
        blockData: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        created: Date.now(),
        updated: Date.now()
    };

    const block = new Block(data);

    expect(block.getComposition()).toBe(data.composition);
    expect(block.getOrder()).toBe(data.order);
    expect(block.getType()).toBe(data.type);
    expect(block.getBlockData()).toBe(data.blockData);
    expect(block.getCreated()).toBe(data.created);
    expect(block.getUpdated()).toBe(data.updated);
    expect(block.getData()).toEqual(data);
});