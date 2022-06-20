import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {TodoListElement, removedElement, ELEMENT_DATA } from './to-do-list.model.ts.module';
import {MatTable} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  myForm: FormGroup | undefined;
  toDisplay = false;
  centered = false;
  disabled = false;
  unbounded = false;
  displayedColumns: string[] = ['position', 'taskName', 'timeAllocation', 'removeItem'];
  dataSources = [...ELEMENT_DATA];
  dataSources2: any = [];
  displayDataSource = this.dataSources;

  @ViewChild(MatTable) table: MatTable<TodoListElement> | undefined;

  @ViewChild('inputTodoListModel') inputTodoListModel: any;

  constructor(private fb: FormBuilder,
    private modalService: NgbModal,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'taskName': new FormControl(null, Validators.required),
      'timeAllocation': new FormControl(null, Validators.required)
    });
  }

  onSubmit(myFormValue: any) {
    const randomElementIndex = this.dataSources.length + 1;
    this.dataSources.push({
      position: randomElementIndex, 
      taskName: myFormValue.taskName, 
      timeAllocation: myFormValue.timeAllocation,
      isDeleted: false
    });
    this.filterDataSource();
    if(this.table) {
        this.table.renderRows();
      }
  }

  removeData(i: number) {
    this.dataSources.forEach((element: any,index: any)=>{
      if(element.position == i){
        this.dataSources[index].isDeleted = true;
        this.dataSources2.push(element.position)
   }});
   this.filterDataSource();
    if(this.table) {
      this.table.renderRows();
    }
  }

  unDoItem() {
    let undoItem: any;
    undoItem = this.dataSources2.pop();
    this.dataSources.forEach((element: any,index: any)=>{
      if(element.position == undoItem){
        this.dataSources[index].isDeleted = false;
   }});
   this.filterDataSource();
    if(this.table) {
      this.table.renderRows();
    }
  }

  filterDataSource() {
    this.displayDataSource = this.dataSources.filter(el => {
      return el.isDeleted == false;
    });
  }

  openDialog(){
    this.modalService.open(this.inputTodoListModel);
}
}
