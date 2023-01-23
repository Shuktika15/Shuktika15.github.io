export interface DataType {
    skills: Skill[],
    experiences: Experience[],
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
    ]
}