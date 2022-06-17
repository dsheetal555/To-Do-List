
export interface PeriodicElement {
    taskName: string | undefined;
    workTime: string | undefined;
    position: number;
  }
  
 export const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, taskName: 'Hydrogen', workTime: 'House clining'},
  ];