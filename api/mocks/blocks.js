import Block from '../models/Block';

const block1Data = {
    data: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block2Data = {
    data: [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
};

const block1 = new Block("EhY7ajWidJXf", "EhY7ajWidJXe", "notes", block1Data, 0, 0);
const block2 = new Block("EhY7ajWidJXg", "EhY7ajWidJXe", "notes", block2Data, 0, 0);

export default [block1, block2]