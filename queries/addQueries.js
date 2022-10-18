const db = require('../db/connection');

class addQuery{
    department(name) {
        const sql = `INSERT INTO department (name) VALUES ('${name}')`;
        db.promise().query(sql)
        .then( ( [result] ) => {
            if(!result.affectedRows) {
                console.log('Department not added! Please try again.');
                return;
            };

            console.log('Department added successfully!');
        })
        .catch(err => {
            console.log(err);
        });
    };

    role(title, salary, department) {
        const sql = `SELECT id FROM department WHERE name = '${department}'`
        db.promise().query(sql)
        .then(( [result] ) => {
            const sql = `INSERT INTO role (title, salary, department_id) 
                            VALUES ('${title}', '${salary}', ${result[0].id})`;
            db.promise().query(sql)
            .then(( [result] ) => {
                if(!result.affectedRows) {
                    console.log('Role not added! Please try again');
                    return;
                };

                console.log('Role added successfully!');
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    employee(first_name, last_name, role, manager) {
        const sql = `SELECT id FROM role WHERE title = '${role}'`
        db.promise().query(sql)
        .then(( [roleId] ) => {
            return roleId;
        })
        .then(roleId => {
            const sql = `SELECT id FROM employee WHERE CONCAT(first_name, SPACE(1) , last_name) = '${manager}'`
            db.promise().query(sql)
            .then(([ managerId ]) => {
                return { 
                    manager: managerId,
                    role: roleId
                }
            })
            .then(( { manager, role }) => {
                const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                                VALUES ('${first_name}', '${last_name}', ${role[0].id}, ${manager[0].id})`;
                db.promise().query(sql)
                .then(( [result] ) => {
                    if(!result.affectedRows) {
                        console.log('Employee not added! Please try again');
                        return;
                    };

                    console.log('Employee added successfully');
                })
                .catch(err => {
                    console.log(err);
                });
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

module.exports = addQuery;