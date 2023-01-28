export interface DataType {
    skills: Skill[],
    experiences: Experience[],
    educations: Education[]
}

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

export const Data: DataType = {
    skills: [
        {
            id: 1,
            logo: 'java',
            title: 'Java',
            descriptions: [
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A architecto ea enim laborum praesentium quasi tempore! 
                Ad, alias, animi assumenda cum distinctio eaque eius, 
                minima recusandae repellendus sunt temporibus ullam?`
            ]
        },
        {
            id: 2,
            logo: 'spring-boot',
            title: 'Spring Boot',
            descriptions: [
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A architecto ea enim laborum praesentium quasi tempore! 
                Ad, alias, animi assumenda cum distinctio eaque eius, 
                minima recusandae repellendus sunt temporibus ullam?`
            ]
        },
        {
            id: 3,
            logo: 'mysql',
            title: 'MySQL',
            descriptions: [
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A architecto ea enim laborum praesentium quasi tempore! 
                Ad, alias, animi assumenda cum distinctio eaque eius, 
                minima recusandae repellendus sunt temporibus ullam?`
            ]
        }
    ],
    experiences: [
        {
            id: 1,
            company: 'Applied Reserach Works',
            startMonth: 'Feb',
            startYear: 2023,
            current: true,
            descriptions: [
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A architecto ea enim laborum praesentium quasi tempore! 
                Ad, alias, animi assumenda cum distinctio eaque eius, 
                minima recusandae repellendus sunt temporibus ullam?`,
                `mollitia, nulla perferendis quasi quibusdam rerum sit 
                vel veniam voluptatibus voluptatum! Blanditiis dignissimos 
                ducimus exercitationem impedit incidunt non perspiciatis 
                similique tenetur! Ducimus, voluptates!`
            ]
        }, {
            id: 2,
            company: 'Cognizant',
            startMonth: 'Oct',
            startYear: 2020,
            current: false,
            endMonth: 'Feb',
            endYear: 2023,
            descriptions: [
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A architecto ea enim laborum praesentium quasi tempore! 
                Ad, alias, animi assumenda cum distinctio eaque eius, 
                minima recusandae repellendus sunt temporibus ullam?`
            ]
        }
    ],
    educations: [
        {
            id: 1,
            institution: "Government College of Leather Technology",
            educationType: "B. Tech in Information Technology",
            gradeType: "cgpa",
            grade: 8.34,
            startYear: 2018,
            endYear: 2020
        }, {
            id: 2,
            institution: "B.D.M. International",
            educationType: "Higher Secondary",
            gradeType: "percentage",
            grade: 89,
            startYear: 2016,
            endYear: 2018
        }
    ]
}