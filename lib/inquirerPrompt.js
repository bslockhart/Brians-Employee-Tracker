const inquirer = require('inquirer');
const choiceQuery = require('../queries/choiceQueries');

// Getting department choices from sql query for inquirer prompts
const getDepartmentList = () => {
    const getChoices = new choiceQuery;
    const choices = getChoices.allDepartments()
    return choices;
};

// Getting role choices from sql query for inquirer prompts
const getRoleList = () => {
    const getChoices = new choiceQuery;
    const choices = getChoices.allRoles()
    return choices;
};

const getEmployeeList = () => {
    const getChoices = new choiceQuery;
    const choices = getChoices.allEmployees()

    return choices;
};

// Getting manager/employee choices from sql query
// Main Employee Manager Prompt 
const promptEmployeeManager = () => {
    console.log(`
    =================
     Employee Manager
    =================
    `)
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'Delete a department', 'Delete a role', 'Delete an employee']
        },
        {
            name: 'department',
            type: 'input',
            message: 'Please enter a name for the new department',
            when: ({ action }) => action === 'Add a department',
            validate: (input) => {
                if (!input) {
                    console.log('Please enter a valid response!');
                    return false;
                };
                return true;
            }
        },
        {
            name: 'roleName',
            type: 'input',
            message: 'Please enter the name of this role',
            when: ({ action }) => action === 'Add a role',
            validate: (input) => {
                if (!input) {
                    console.log('Please enter a valid response!');
                    return false;
                };
                return true;
            }
        },
        {
            name: 'roleSalary',
            type: 'input',
            message: 'Please enter the salary for this role',
            when: ({ action }) => action === 'Add a role',

            validate: (input) => {
                if (input && !isNaN(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        },
        {
            name: 'roleDepartment',
            type: 'list',
            message: 'Please choose a department for this role',
            choices: getDepartmentList,
            when: ({ action }) => action === 'Add a role'
        },
        {
            name: 'employeeFirstName',
            type: 'input',
            message: 'Please enter this employee\'s first name',
            when: ({ action }) => action === 'Add an employee',
            validate: (input) => {
                if (!input) {
                    console.log('Please enter a valid response!');
                    return false;
                };
                return true;
            }
        },
        {
            name: 'employeeLastName',
            type: 'input',
            message: 'Please enter this employee\'s last name',
            when: ({ action }) => action === 'Add an employee',
            validate: (input) => {
                if (!input) {
                    console.log('Please enter a valid response!');
                    return false;
                };
                return true;
            }
        },
        {
            name: 'employeeRole',
            type: 'list',
            message: 'Please choose this employee\'s role',
            choices: getRoleList,
            when: ({ action }) => action === 'Add an employee',
        },
        {
            name: 'employeeManager',
            type: 'list',
            message: 'Please choose this employee\'s manager',
            choices: getEmployeeList,
            when: ({ action }) => action === 'Add an employee',
        },
        {
            name: 'employeeToUpdate',
            type: 'list',
            message: 'Please choose the employee you wish to update',
            choices: getEmployeeList,
            when: ({ action }) => action === 'Update employee role',
        },
        {
            name: 'employeeNewRole',
            type: 'list',
            message: 'Please choose this employee\'s new role',
            choices: getRoleList,
            when: ({ action }) => action === 'Update employee role',
        },
        {
            name: 'departmentToDelete',
            type: 'list',
            message: 'Please choose the department you wish to remove',
            choices: getDepartmentList,
            when: ({ action }) => action === 'Delete a department'
        },
        {
            name: 'roleToDelete',
            type: 'list',
            message: 'Please choose the role you wish to remove',
            choices: getRoleList,
            when: ({ action }) => action === 'Delete a role'
        },
        {
            name: 'employeeToDelete',
            type: 'list',
            message: 'Please choose the employee you wish to remove',
            choices: getEmployeeList,
            when: ({ action }) => action === 'Delete an employee'
        }
    ])
};

module.exports = promptEmployeeManager;