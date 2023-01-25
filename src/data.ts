export interface DataType {
    skills: Skill[],
    experiences: Experience[],
    educations: Education[]
}

export interface Skill {
    id: number,
    logo: string,
    title: string,
    description: string
}

export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export interface Experience {
    company: string,
    startYear: number,
    startMonth: Month,
    current: boolean,
    endYear?: number,
    endMonth?: Month,
    description: string
}

export type GradeType = 'percentage' | 'cgpa';

export interface Education {
    institution: string,
    educationType: string,
    grade: number,
    gradeType: GradeType,
    startYear: number,
    endYear: number,
}

export const Data: DataType = {
    skills: [
        {
            id: 1,
            logo: 'java',
            title: 'Java',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A architecto ea enim laborum praesentium quasi tempore! 
                            Ad, alias, animi assumenda cum distinctio eaque eius, 
                            minima recusandae repellendus sunt temporibus ullam?`
        },
        {
            id: 2,
            logo: 'spring-boot',
            title: 'Spring Boot',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A architecto ea enim laborum praesentium quasi tempore! 
                            Ad, alias, animi assumenda cum distinctio eaque eius, 
                            minima recusandae repellendus sunt temporibus ullam?`
        },
        {
            id: 3,
            logo: 'mysql',
            title: 'MySQL',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A architecto ea enim laborum praesentium quasi tempore! 
                            Ad, alias, animi assumenda cum distinctio eaque eius, 
                            minima recusandae repellendus sunt temporibus ullam?`
        }
    ],
    experiences: [
        {
            company: 'Applied Reserach Works',
            startMonth: 'Feb',
            startYear: 2023,
            current: true,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A architecto ea enim laborum praesentium quasi tempore! 
                            Ad, alias, animi assumenda cum distinctio eaque eius, 
                            minima recusandae repellendus sunt temporibus ullam?`
        }, {
            company: 'Cognizant',
            startMonth: 'Oct',
            startYear: 2020,
            current: false,
            endMonth: 'Feb',
            endYear: 2023,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A architecto ea enim laborum praesentium quasi tempore! 
                            Ad, alias, animi assumenda cum distinctio eaque eius, 
                            minima recusandae repellendus sunt temporibus ullam?`
        }
    ],
    educations: [
        {
            institution: "Government College of Leather Technology",
            educationType: "B. Tech in Information Technology",
            gradeType: "cgpa",
            grade: 8.34,
            startYear: 2018,
            endYear: 2020
        }, {
            institution: "B.D.M. International",
            educationType: "Higher Secondary",
            gradeType: "percentage",
            grade: 89,
            startYear: 2016,
            endYear: 2018
        }
    ]
}