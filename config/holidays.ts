/**
 * Holiday configuration for automatic announcement banners
 *
 * Each holiday has:
 * - name: Holiday identifier
 * - message: Banner text to display
 * - startMonth/startDay: When the banner starts showing (inclusive)
 * - endMonth/endDay: When the banner stops showing (inclusive)
 *
 * Note: Months are 1-indexed (1 = January, 12 = December)
 */

export interface Holiday {
  name: string;
  message: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
}

export const holidays: Holiday[] = [
  // New Year's Day - Show Dec 26 through Jan 1
  {
    name: "New Year",
    message: "🎉 Happy New Year! Wishing you a wonderful 2025!",
    startMonth: 12,
    startDay: 26,
    endMonth: 1,
    endDay: 1,
  },
  // Valentine's Day - Show Feb 10-14
  {
    name: "Valentine's Day",
    message: "💕 Happy Valentine's Day! Treat your sweetheart to a special meal!",
    startMonth: 2,
    startDay: 10,
    endMonth: 2,
    endDay: 14,
  },
  // St. Patrick's Day - Show Mar 14-17
  {
    name: "St. Patrick's Day",
    message: "☘️ Happy St. Patrick's Day!",
    startMonth: 3,
    startDay: 14,
    endMonth: 3,
    endDay: 17,
  },
  // Easter - Show Apr 18-20 (approximate, Easter 2025 is Apr 20)
  {
    name: "Easter",
    message: "🐣 Happy Easter! We hope you have a wonderful celebration!",
    startMonth: 4,
    startDay: 18,
    endMonth: 4,
    endDay: 20,
  },
  // Mother's Day - Show May 9-11 (2nd Sunday of May, 2025 is May 11)
  {
    name: "Mother's Day",
    message: "💐 Happy Mother's Day! Treat Mom to something special!",
    startMonth: 5,
    startDay: 9,
    endMonth: 5,
    endDay: 11,
  },
  // Memorial Day - Show May 24-26 (Last Monday of May, 2025 is May 26)
  {
    name: "Memorial Day",
    message: "🇺🇸 Happy Memorial Day! Honoring those who served.",
    startMonth: 5,
    startDay: 24,
    endMonth: 5,
    endDay: 26,
  },
  // Father's Day - Show Jun 13-15 (3rd Sunday of June, 2025 is Jun 15)
  {
    name: "Father's Day",
    message: "👔 Happy Father's Day! Treat Dad to a great meal!",
    startMonth: 6,
    startDay: 13,
    endMonth: 6,
    endDay: 15,
  },
  // Independence Day - Show Jul 1-4
  {
    name: "Independence Day",
    message: "🇺🇸 Happy 4th of July! Celebrating American Independence!",
    startMonth: 7,
    startDay: 1,
    endMonth: 7,
    endDay: 4,
  },
  // Labor Day - Show Aug 30 - Sep 1 (1st Monday of Sep, 2025 is Sep 1)
  {
    name: "Labor Day",
    message: "🛠️ Happy Labor Day! Enjoy the long weekend!",
    startMonth: 8,
    startDay: 30,
    endMonth: 9,
    endDay: 1,
  },
  // Halloween - Show Oct 28-31
  {
    name: "Halloween",
    message: "🎃 Happy Halloween! Spooky savings await!",
    startMonth: 10,
    startDay: 28,
    endMonth: 10,
    endDay: 31,
  },
  // Veterans Day - Show Nov 10-11
  {
    name: "Veterans Day",
    message: "🎖️ Thank you to all who have served. Happy Veterans Day!",
    startMonth: 11,
    startDay: 10,
    endMonth: 11,
    endDay: 11,
  },
  // Thanksgiving - Show Nov 25-27 (4th Thursday of Nov, 2025 is Nov 27)
  {
    name: "Thanksgiving",
    message: "🦃 Happy Thanksgiving! We're grateful for our wonderful customers!",
    startMonth: 11,
    startDay: 25,
    endMonth: 11,
    endDay: 27,
  },
  // Christmas - Show Dec 20-25
  {
    name: "Christmas",
    message: "🎄 Merry Christmas! We will be closed Dec 24-25. Happy Holidays!",
    startMonth: 12,
    startDay: 20,
    endMonth: 12,
    endDay: 25,
  },
];

/**
 * Get the current active holiday based on today's date
 * Returns the holiday object if one is active, null otherwise
 */
export function getActiveHoliday(): Holiday | null {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // Convert to 1-indexed
  const currentDay = today.getDate();

  for (const holiday of holidays) {
    if (isDateInRange(currentMonth, currentDay, holiday)) {
      return holiday;
    }
  }

  return null;
}

/**
 * Check if a date falls within a holiday's date range
 * Handles year-wrapping ranges (e.g., Dec 26 - Jan 1)
 */
function isDateInRange(month: number, day: number, holiday: Holiday): boolean {
  const { startMonth, startDay, endMonth, endDay } = holiday;

  // Handle year-wrapping ranges (e.g., Dec 26 - Jan 1)
  if (startMonth > endMonth) {
    // Either we're in the end-of-year portion (Dec 26-31)
    // or the beginning-of-year portion (Jan 1)
    if (month === startMonth && day >= startDay) {
      return true;
    }
    if (month > startMonth) {
      return true;
    }
    if (month === endMonth && day <= endDay) {
      return true;
    }
    if (month < endMonth) {
      return true;
    }
    return false;
  }

  // Normal range within same year
  if (month === startMonth && month === endMonth) {
    return day >= startDay && day <= endDay;
  }
  if (month === startMonth) {
    return day >= startDay;
  }
  if (month === endMonth) {
    return day <= endDay;
  }
  return month > startMonth && month < endMonth;
}
