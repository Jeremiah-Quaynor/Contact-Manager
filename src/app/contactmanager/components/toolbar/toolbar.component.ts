import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private router:Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: "450px"
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed', result);

      if(result) {
        this.openSnackBar("Contact Add" , "Navigate")
        .onAction().subscribe(()=>{
          this.router.navigate(['/contactmanager',result.id]);
        })
      }
      
    })
  }

    openSnackBar(message:string, action: string): MatSnackBarRef<SimpleSnackBar> {
      return this.snackBar.open(message,action, {
        duration: 5000,
      })
    }

}
