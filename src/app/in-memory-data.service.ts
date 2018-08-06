import { InMemoryDbService } from 'angular-in-memory-web-api';
import { getDate } from './models/meal';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meals = [
        { id: 1, name: 'Śniadanie', date: getDate({hours: 9, minutes: 0})},
        { id: 2, name: 'II Śniadanie', date: getDate({hours: 11, minutes: 0})},
        { id: 3, name: 'Obiad', date: getDate({hours: 13, minutes: 40})},
        { id: 4, name: 'Podwieczorek', date: getDate({hours: 16, minutes: 0})},
        { id: 5, name: 'Kolacja', date: getDate({hours: 19, minutes: 0})},
    ];
    return {meals};
  }
}
