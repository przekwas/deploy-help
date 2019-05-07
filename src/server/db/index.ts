import * as mysql from 'mysql';
import config from '../config';

import blogs from './blogs';

export const connection = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
    return new Promise<Array<any>>((resolve, reject) => {
        connection.query(query, [values], (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

export default {
    blogs
}