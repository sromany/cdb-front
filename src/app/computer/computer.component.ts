import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
import { interval } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  @Input() computer: Computer;
  @Output() deleteEvent = new EventEmitter<number>();
  show = true;

  constructor(private computerService: ComputerService, private authService: AuthService) { }

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  delete() {
    this.computerService.deleteComputer(this.computer.id.toString())
          .subscribe(
            () => interval(100).subscribe(() => this.deleteSuccess()),
            error => console.error('Error in computer deletion', error),
            () => console.log('Computer deleted')
          );
  }

  deleteSuccess() {
    this.show = false;
    interval(300).subscribe(() => this.deleteEvent.emit(this.computer.id));
  }

}
