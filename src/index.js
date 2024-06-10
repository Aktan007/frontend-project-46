import path from 'node:path'
import { readFileSync } from 'node:fs'
import getDiffTree from './getDiff.js';

const gendiff = (filepath1, filepath2) => {
    const fullFilepath1 = path.resolve(filepath1);
    const fullFilepath2 = path.resolve(filepath2);
    const file1 = readFileSync(fullFilepath1)
    const file2 = readFileSync(fullFilepath2)
    const fileJson1 = JSON.parse(file1);
    const fileJson2 = JSON.parse(file2);

    console.log(fileJson1);
    console.log(fileJson2);
};

export default gendiff;