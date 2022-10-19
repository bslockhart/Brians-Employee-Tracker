const db = require('../db/connection');
const cTable = require('console.table');

// Class for all sql queries
class getQuery {
    allDepartments() {
        const sql = `SELECT * FROM department`;
        db.promise().query(sql)
            .then(([rows, fields]) => {
                // Console logs table
                console.table('\n', 'Departments', rows);
            })
            .catch(err => {
                console.log(err);
            });
    };

    allRoles() {
        const sql = `SELECT role.title, role.id AS role_id, department.name AS department_name, role.salary
                        FROM role
                        LEFT JOIN department
                        ON role.department_id = department.id;                
                    `
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table('\n', 'Roles', rows);
            })
            .catch(err => {
                console.log(err);
            });
    };

    allEmployees() {
        // Sql query to pull relevant information
        const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, 
                        department.name AS department,role.salary AS salary, CONCAT(manager.first_name, SPACE(1) ,manager.last_name) AS manager_name
                        FROM employee
                        LEFT JOIN role ON employee.role_id = role.id
                        LEFT JOIN department ON role.department_id = department.id
                        LEFT JOIN employee manager ON employee.manager_id = manager.id
                        `

        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table('\n', 'Employees', rows);
            })
            .catch(err => {
                console.log(err);
            });
    };
}

module.exports = getQuery;