import Block from '../models/Block';

const block1Data = {
    data: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block2Data = {
    data: [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block1 = new Block({
    blockData: block1Data,
    composition: "EhY7ajWidJXe",
    type: "notes",
    created: Date.now(),
    updated: Date.now()
});

const block2 = new Block({
    blockData: block2Data,
    composition: "EhY7ajWidJXe",
    type: "notes",
    created: Date.now(),
    updated: Date.now()
});

export default [block1, block2]