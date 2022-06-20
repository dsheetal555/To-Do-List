
export interface TodoListElement {
    taskName: string | undefined;
    timeAllocation: string | undefined;
    position: number;
    isDeleted: boolean;
  }

export interface removedElement {
    removedItem: TodoListElement[];
    index: number;
}
  
export const ELEMENT_DATA: TodoListElement[] = [
    {position: 1, taskName: 'Hydrogen', timeAllocation: 'House clining', isDeleted: false},
];

