export class Meal {
    id: number;
    name: string;
    date: Date;
}

export function getDate(args: {
  year?: number,
  month?: number,
  day?: number,
  hours?: number,
  minutes?: number
}): Date {
  const now = new Date();

  if (args.hasOwnProperty('year')) { now.setFullYear(args.year); }
  if (args.hasOwnProperty('month')) { now.setMonth(args.month); }
  if (args.hasOwnProperty('day')) { now.setDate(args.day); }
  if (args.hasOwnProperty('hours')) { now.setHours(args.hours); }

  if (args.hasOwnProperty('minutes')) {
      now.setMinutes(args.minutes);
  } else {
      now.setMinutes(0);
  }
  now.setSeconds(0);
  now.setMilliseconds(0);

  return now;
}
