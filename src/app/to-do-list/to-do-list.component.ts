import { MatDialogWrapperService } from './../sharedComponent/model-popup/model-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PeriodicElement, ELEMENT_DATA } from './to-do-list.model.ts.module';
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
  displayedColumns: string[] = ['position', 'taskName', 'timeAllocation'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;

  @ViewChild('inputTodoListModel') inputTodoListModel: any;

  constructor(private fb: FormBuilder,
    private modalService: NgbModal,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'taskName': new FormControl(null, Validators.required),
      'workTime': new FormControl(null, Validators.required)
    });
  }

  onSubmit(myFormValue: any) {
    if(this.table) {
      const randomElementIndex = Math.floor(this.dataSource.length + 1);
      this.dataSource.push({position: randomElementIndex, taskName: myFormValue.taskName, workTime: myFormValue.workTime});
        this.table.renderRows();
      }
  }

  removeData() {
    if(this.table) {
    this.dataSource.pop();
      this.table.renderRows();
    }
  }

  openDialog(){
    this.modalService.open(this.inputTodoListModel);
}
}
