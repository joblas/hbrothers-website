/**
 * @fileoverview Logistics service for H Brothers restaurant.
 * Handles business hours, closure detection, and daily specials.
 */

/** Days of the week (0 = Sunday, 6 = Saturday) */
export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

/** Restaurant operating hours */
export const OPERATING_HOURS = {
  open: 11, // 11:00 AM
  close: 21, // 9:00 PM
};

/** Days the restaurant is closed */
export const CLOSED_DAYS: DayOfWeek[] = [DayOfWeek.Sunday, DayOfWeek.Monday];

/** Daily special configuration */
export interface DailySpecial {
  /** Day of the week */
  day: DayOfWeek;
  /** Special title */
  title: string;
  /** Special description */
  description: string;
  /** Optional discount amount */
  discount?: string;
}

/** Daily specials schedule */
export const DAILY_SPECIALS: DailySpecial[] = [
  {
    day: DayOfWeek.Tuesday,
    title: 'Taco Tuesday',
    description: 'Adobada Special - Try our famous Adobada Fries!',
  },
  {
    day: DayOfWeek.Wednesday,
    title: 'Wrap Wednesday',
    description: '$1 off all wraps!',
    discount: '$1 off',
  },
  {
    day: DayOfWeek.Friday,
    title: 'Poutine Friday',
    description: 'Celebrate the weekend with our authentic poutine!',
  },
];

/** Status of the restaurant for the current day */
export interface DayStatus {
  /** Whether the restaurant is closed today */
  isClosed: boolean;
  /** Current day of the week */
  dayOfWeek: DayOfWeek;
  /** Name of the current day */
  dayName: string;
  /** Next open day name */
  nextOpenDay: string;
  /** Message to display if closed */
  closedMessage?: string;
  /** Active special for today (if any) */
  activeSpecial?: DailySpecial;
}

/** Day names for display */
const DAY_NAMES: Record<DayOfWeek, string> = {
  [DayOfWeek.Sunday]: 'Sunday',
  [DayOfWeek.Monday]: 'Monday',
  [DayOfWeek.Tuesday]: 'Tuesday',
  [DayOfWeek.Wednesday]: 'Wednesday',
  [DayOfWeek.Thursday]: 'Thursday',
  [DayOfWeek.Friday]: 'Friday',
  [DayOfWeek.Saturday]: 'Saturday',
};

/**
 * Gets the name of a day of the week.
 * @param day - The day of the week (0-6)
 * @returns The name of the day
 */
export function getDayName(day: DayOfWeek): string {
  return DAY_NAMES[day] || 'Unknown';
}

/**
 * Checks if the restaurant is closed on a given day.
 * @param day - The day of the week (0-6)
 * @returns True if the restaurant is closed on that day
 */
export function isClosedDay(day: DayOfWeek): boolean {
  return CLOSED_DAYS.includes(day);
}

/**
 * Gets the next open day after a given day.
 * @param currentDay - The current day of the week (0-6)
 * @returns The name of the next open day
 */
export function getNextOpenDay(currentDay: DayOfWeek): string {
  let nextDay = (currentDay + 1) % 7;
  while (isClosedDay(nextDay as DayOfWeek)) {
    nextDay = (nextDay + 1) % 7;
  }
  return getDayName(nextDay as DayOfWeek);
}

/**
 * Gets the active special for a given day.
 * @param day - The day of the week (0-6)
 * @returns The daily special if one exists, undefined otherwise
 */
export function getActiveSpecial(day: DayOfWeek): DailySpecial | undefined {
  return DAILY_SPECIALS.find((special) => special.day === day);
}

/**
 * Gets the current day status including closure and special information.
 * @param date - Optional date to check (defaults to current date)
 * @returns The complete day status object
 */
export function getDayStatus(date: Date = new Date()): DayStatus {
  const dayOfWeek = date.getDay() as DayOfWeek;
  const dayName = getDayName(dayOfWeek);
  const isClosed = isClosedDay(dayOfWeek);
  const nextOpenDay = getNextOpenDay(dayOfWeek);
  const activeSpecial = isClosed ? undefined : getActiveSpecial(dayOfWeek);

  let closedMessage: string | undefined;
  if (isClosed) {
    closedMessage = `Closed Today - See you ${nextOpenDay} at ${OPERATING_HOURS.open}:00 AM!`;
  }

  return {
    isClosed,
    dayOfWeek,
    dayName,
    nextOpenDay,
    closedMessage,
    activeSpecial,
  };
}

/**
 * Formats the operating hours for display.
 * @returns Formatted hours string
 */
export function getFormattedHours(): string {
  const openTime = OPERATING_HOURS.open > 12
    ? `${OPERATING_HOURS.open - 12}:00 PM`
    : `${OPERATING_HOURS.open}:00 AM`;
  const closeTime = OPERATING_HOURS.close > 12
    ? `${OPERATING_HOURS.close - 12}:00 PM`
    : `${OPERATING_HOURS.close}:00 AM`;
  return `${openTime} - ${closeTime}`;
}

/**
 * Checks if the restaurant is currently open based on time.
 * @param date - Optional date to check (defaults to current date/time)
 * @returns True if the restaurant is currently open
 */
export function isCurrentlyOpen(date: Date = new Date()): boolean {
  const dayOfWeek = date.getDay() as DayOfWeek;
  if (isClosedDay(dayOfWeek)) {
    return false;
  }
  const hour = date.getHours();
  return hour >= OPERATING_HOURS.open && hour < OPERATING_HOURS.close;
}
