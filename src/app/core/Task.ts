export interface Task {
    id: number;
    description: string;
    isOpen: boolean;
}

export enum Status {
    Open = 0, 
    InProgress = 1,
    Done = 2,
}