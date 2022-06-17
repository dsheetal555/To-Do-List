import { MatDialog } from '@angular/material/dialog';
import {Injectable} from '@angular/core';

    
@Injectable({
    providedIn: 'root'
})
export class MatDialogWrapperService {
    
    constructor(private dialog: MatDialog) {
    }
    
    open(componentRef: any, config = {}) {
        this.dialog.open(componentRef, config);
    }
}