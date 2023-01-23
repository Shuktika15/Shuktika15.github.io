export interface DataType {
    skills: Skill[]
}

export interface Skill {
    id: number,
    logo: string,
    title: string,
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
    ]
}