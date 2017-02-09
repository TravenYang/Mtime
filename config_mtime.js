/**
 * Created by Traven on 2017/1/15.
 */
let configObj = {
    dev: {
        mtime: {
            port: 13666
        },
        mysql_mtime: {
            host: '45.32.73.184',
            port: 3306,
            pool: 1000,
            timeout: 500000,
            user: 'root',
            password: 'q1w2e3',
            database: 'mtime',
            multipleStatements: true
        }
    }
};
module.exports = configObj;
