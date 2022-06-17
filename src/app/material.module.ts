import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table'  
  
  @NgModule({
    imports: [
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatRippleModule,
        MatTableModule,
        MatDialogModule
        
    ],
    exports: [
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatRippleModule,
        MatTableModule,
        MatDialogModule
    ]
  })
  export class MaterialModule {}