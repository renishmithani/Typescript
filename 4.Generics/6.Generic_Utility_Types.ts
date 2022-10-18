//Generics Utility Types
interface taskGoal {
    title: string;
    startDate: Date;
    endDate: Date;
}

function Goal(title: string, startDate: Date, endDate: Date): taskGoal {
    let taskGoal: Partial<taskGoal> = {}; 
    taskGoal.title = title;
    taskGoal.startDate = startDate;
    taskGoal.endDate = endDate;
    return taskGoal as taskGoal; //Type Casting
}


const _arr: Readonly<string[]> = ['person1', 'person2']
