import { Pipe, PipeTransform } from '@angular/core';
import { duration, unitOfTime } from 'moment';

@Pipe({
  name: 'readingTime'
})
export class ReadingTimePipe implements PipeTransform {

  transform(text: string, wpm: number = 575, unit: unitOfTime.DurationConstructor = "minutes", locale = 'en'): string {
    const words = text.trim().split(/\s+/).length;
    const totalDuration = Math.ceil(words/wpm);
    return duration(totalDuration, unit).locale(locale).humanize();
  }

}
