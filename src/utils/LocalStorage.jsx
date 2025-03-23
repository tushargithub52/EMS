const employees = [
    {
        "id": 1,
        "firstname": "Rahul",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage design.",
                "taskDate": "2024-11-20",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Bug #101",
                "taskDescription": "Resolve the login page error.",
                "taskDate": "2024-11-15",
                "category": "Bug Fix",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update Database",
                "taskDescription": "Optimize database schema.",
                "taskDate": "2024-11-18",
                "category": "Backend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write API Documentation",
                "taskDescription": "Document the REST API endpoints.",
                "taskDate": "2024-11-19",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Deploy App",
                "taskDescription": "Deploy the latest release to the server.",
                "taskDate": "2024-11-17",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstname": "Arjun",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Create Marketing Plan",
                "taskDescription": "Draft a marketing plan for the new product launch.",
                "taskDate": "2024-11-21",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Run a campaign on social media.",
                "taskDate": "2024-11-16",
                "category": "Social Media",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstname": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Data Analysis",
                "taskDescription": "Analyze user data for Q4.",
                "taskDate": "2024-11-22",
                "category": "Data Science",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with the client.",
                "taskDate": "2024-11-15",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Ravi",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Content Writing",
                "taskDescription": "Write content for the new blog post.",
                "taskDate": "2024-11-19",
                "category": "Content",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve SEO for the website.",
                "taskDate": "2024-11-18",
                "category": "SEO",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create Infographics",
                "taskDescription": "Design infographics for social media.",
                "taskDate": "2024-11-17",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
    }
];

// localStorage.clear()

// JSON.stringify() converts a JavaScript object into a JSON string.
// JSON.parse() converts a valid JSON string back into a JavaScript object.

export const SetLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}
// SetLocalStorage()
