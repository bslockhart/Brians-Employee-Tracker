INSERT INTO department(name)
VALUES
    ('Sales'),
    ('Finance'),
    ('Engineering'),
    ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Lead Engineer', 150000, 3),
    ('Software Engineer', 120000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Taimur', 'Hasan', 4, NULL),
    ('Tony', 'Stark', 5, 1),
    ('Crash', 'Bandicoot', 2, NULL),
    ('Jerry', 'The Mouse', 1, 3),
    ('Tom', 'Holland', 3, 3);