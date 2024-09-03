import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function parseDate(dateString: string): Date {
  const [day, month, year, hour, minute, second] = dateString
    .split(/\/|\s|:/)
    .map(Number);
  // Note: month - 1 because JavaScript Date months are zero-based
  return new Date(year, month - 1, day, hour, minute, second);
}

export function countdownHelper(millisecond: any):any {
  interface Time{
    days:number;
    hours:number;
    minutes:number;
    seconds:number;
  }

    const result: Time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  result.days = Math.floor(millisecond / (1000 * 60 * 60 * 24));
  result.hours = Math.floor(
    (millisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  result.minutes = Math.floor((millisecond % (1000 * 60 * 60)) / (1000 * 60));
  result.seconds = Math.floor((millisecond % (1000 * 60)) / 1000);

  return result
}

