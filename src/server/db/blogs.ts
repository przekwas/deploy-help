import { Query } from '../db/index';

const getAll = () => Query(`SELECT * FROM blogs`);

export default {
    getAll
}