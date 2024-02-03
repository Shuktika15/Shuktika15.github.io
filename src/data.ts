export interface DataType {
    skills: Skill[],
    experiences: Experience[],
    educations: Education[],
    projects: Project[]
}

/**
 * Download logos from {@link [skill-icons](https://github.com/tandpfun/skill-icons)}
 */
export interface Skill {
    id: number,
    logo: string,
    title: string,
    descriptions: string[]
}

export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export interface Experience {
    id: number,
    company: string,
    designation: string,
    startYear: number,
    startMonth: Month,
    current: boolean,
    endYear?: number,
    endMonth?: Month,
    descriptions: string[]
}

export type GradeType = 'percentage' | 'cgpa';

export interface Education {
    id: number,
    institution: string,
    educationType: string,
    grade: number,
    gradeType: GradeType,
    startYear: number,
    endYear: number,
}

export interface Project {
    id: number,
    title: string,
    background: string,
    github: string,
    descriptions: string[],
    stack: string[]
}

export const Data: DataType = {
    skills: [
        {
            id: 1,
            logo: 'java',
            title: 'Java',
            descriptions: [
                `I personally like Java as it's highly desirable due to 
                its platform independence, object-oriented programming 
                capabilities, vast libraries, and widespread industry adoption.`
            ]
        },
        {
            id: 2,
            logo: 'spring-boot',
            title: 'Spring Boot',
            descriptions: [
                `Spring Boot is sought-after for its simplicity, rapid development, 
                auto-configuration, dependency management, and seamless integration
                with other Spring ecosystem components.`
            ]
        },
        {
            id: 3,
            logo: 'mysql',
            title: 'MySQL',
            descriptions: [
                `Desirability of MySQL stems from its reliability, scalability, 
                performance, ease of use, strong community support, and extensive 
                compatibility with various platforms and programming languages.`
            ]
        }
    ],
    experiences: [
        {
            id: 1,
            company: 'Applied Research Works',
            designation: 'SDE II',
            startMonth: 'Jan',
            startYear: 2023,
            current: true,
            descriptions: [
                `Worked in Node.js, Express.js and still learning and 
                improving on them. Working on implementing a better grid 
                system to replace the old one, which can drastically 
                improve the performance and add a whole set of new features.`
            ]
        }, {
            id: 2,
            company: 'Cognizant',
            designation: 'Programmer Analyst',
            startMonth: 'Oct',
            startYear: 2020,
            current: false,
            endMonth: 'Jan',
            endYear: 2023,
            descriptions: [
                `Worked on multiple insurance based client projects in
                upgrade team and development team.
                Increased efficiency by 90% by automating the process of
                finding upgrade files.`
            ]
        }
    ],
    educations: [
        {
            id: 1,
            institution: "Government College of Engineering & Leather Technology",
            educationType: "B. Tech in Information Technology",
            gradeType: "cgpa",
            grade: 8.34,
            startYear: 2016,
            endYear: 2020
        }, {
            id: 2,
            institution: "B.D.M. International",
            educationType: "CBSE 12th standard Board Exam",
            gradeType: "percentage",
            grade: 89,
            startYear: 2014,
            endYear: 2016
        }, {
            id: 3,
            institution: "B.D.M. International",
            educationType: "CBSE 10th standard Board Exam",
            gradeType: "cgpa",
            grade: 10,
            startYear: 2012,
            endYear: 2014
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Pension Management System',
            background: 'pension-management.webp',
            github: 'https://github.com/Shuktika15/pension-management',
            descriptions: [
                `A full stack application to calculate pension given the Aadhar Number of a pensioner. 
                Backend uses Microservices architecture provided by Spring Cloud. Also uses Service Discovery, 
                Feign Client, API Gateway, JWT based authorization to structure the application and 
                containerized with Docker. Used H2 as database. Frontend utilizes Angular Material to create the UI. 
                JUnit-5 and Mockito used for testing.`
            ],
            stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker', 'AWS'],
        },
        {
            id: 2,
            title: 'Airline Management System',
            background: 'airline-reservation.webp',
            github: 'https://github.com/Shuktika15/airline_ticket_reservation_system',
            descriptions: [
                `A full stack web application to book ticket for flight.
                Spring Boot frame work is used. Web pages are built with JSP.
                Used H2 and MySQL as database. Schemas are generated using JPA.
                JUnit-4 and Mockito are used for testing.`,
                "", "", "", "", "", "", ""
            ],
            stack: ['Java', 'Spring Boot', 'JSP', 'MySQL'],
        }
    ]
}