const db = require('../db/connection');

class updateQuery{
    employee(full_name, role) {
        const sql = `SELECT id FROM role WHERE title = '${role}'`
        db.promise().query(sql)
        .then(( [roleId] ) => {
            const sql = `UPDATE employee SET role_id = ${roleId[0].id} WHERE CONCAT(first_name, SPACE(1) , last_name) = '${full_name}'`;
            db.promise().query(sql)
            .then(( [result] ) => {
                if(!result.affectedRows) {
                    console.log('Employee not updated! Please try again');
                };

                console.log('Employee role updated successfully!');
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    };
};

module.exports = updateQuery;