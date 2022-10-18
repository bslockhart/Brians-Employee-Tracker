const db = require('../db/connection');

class choiceQuery{
    allDepartments() {
        const sql = `SELECT name FROM department`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                const departmentArr = result.map(row => row.name);
                resolve(departmentArr);
            });
        });
    };

    allRoles() {
        const sql = `SELECT title FROM role`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                const roleArr = result.map(row => row.title);
                resolve(roleArr);
            });
        });
    };

    allEmployees() {
        const sql = `SELECT CONCAT(first_name, SPACE(1) ,last_name) AS manager_names FROM employee`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                const employeeArr = result.map(row => row.manager_names);
                resolve(employeeArr);
            });
        });
    };
}

module.exports = choiceQuery;