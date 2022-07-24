import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  private now = new Date();

  transform(value: string): string {
    const then = new Date(value);
    const diff = this.now.getTime() - then.getTime();

    const miliseconds = 1000;
    const minute = 60 * miliseconds;
    const hour = minute * 60;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) {
      return `${Math.floor(diff / miliseconds)} seconds`;
    }
    else if (diff < hour) {
      return `${Math.floor(diff / minute)} minutes`;
    }
    else if (diff < day) {
      return `${Math.floor(diff / hour)} hours`;
    }
    else if (diff < week) {
      return `${Math.floor(diff / day)} days`;
    }
    else if (diff < month) {
      return `${Math.floor(diff / week)} weeks`;
    }
    else if (diff < year) {
      return `${Math.floor(diff / month)} months`;
    }

    return `${Math.floor(diff / year)} years`;
  }

}
