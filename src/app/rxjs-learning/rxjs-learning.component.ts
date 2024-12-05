import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  ngOnInit(): void {
    const myObservable = new Observable((observer) => {
      observer.next('Hello');
      observer.next('World');
      observer.complete(); // Marks the completion of the Observable
    });

    myObservable.subscribe(
      (value) => {
        console.log(value);
      },
      () => {
        console.log('Completed');
      }
    );

    const myObservable2 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('hello after 5 min')
        observer.complete()
      }, 5000);
    });

    myObservable2.subscribe((data) => {
      console.log(data)
    })
  }
}
