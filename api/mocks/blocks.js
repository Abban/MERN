import Block from '../models/Block';

const block1Data = {
    data: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block2Data = {
    data: [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block1 = new Block({
    blockData: block1Data,
    compositionId: "EhY7ajWidJXe",
    created: 0,
    id: "EhY7ajWidJXf",
    type: "notes",
    updated: 0
});

const block2 = new Block({
    blockData: block2Data,
    compositionId: "EhY7ajWidJXe",
    created: 0,
    id: "EhY7ajWidJXg",
    type: "notes",
    updated: 0
});

export default [block1, block2]