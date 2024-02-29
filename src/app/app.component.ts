import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, timer } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  // Your existing code
  private applicantSaveJobs: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {


    // Subscribe to applicantSaveJobs with delay between emissions
    this.applicantSaveJobs
      .pipe(concatMap((value) => timer(1000).pipe(take(1))))
      .subscribe((value) => {
        // Handle emitted values here
        console.log(value);
      });

    // Emitting observables
    this.applicantSaveJobs.next(new Observable());
    this.applicantSaveJobs.next(new Observable());
  }
}
