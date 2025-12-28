import { describe, it, expect } from 'vitest';
import {
  DayOfWeek,
  isClosedDay,
  getDayName,
  getNextOpenDay,
  getActiveSpecial,
  getDayStatus,
  isCurrentlyOpen,
  getFormattedHours,
  OPERATING_HOURS,
  CLOSED_DAYS,
  DAILY_SPECIALS,
} from '../services/logisticsService';

describe('Logistics Service', () => {
  describe('isClosedDay', () => {
    it('should return true for Sunday', () => {
      expect(isClosedDay(DayOfWeek.Sunday)).toBe(true);
    });

    it('should return true for Monday', () => {
      expect(isClosedDay(DayOfWeek.Monday)).toBe(true);
    });

    it('should return false for Tuesday through Saturday', () => {
      expect(isClosedDay(DayOfWeek.Tuesday)).toBe(false);
      expect(isClosedDay(DayOfWeek.Wednesday)).toBe(false);
      expect(isClosedDay(DayOfWeek.Thursday)).toBe(false);
      expect(isClosedDay(DayOfWeek.Friday)).toBe(false);
      expect(isClosedDay(DayOfWeek.Saturday)).toBe(false);
    });
  });

  describe('getDayName', () => {
    it('should return correct day names', () => {
      expect(getDayName(DayOfWeek.Sunday)).toBe('Sunday');
      expect(getDayName(DayOfWeek.Monday)).toBe('Monday');
      expect(getDayName(DayOfWeek.Tuesday)).toBe('Tuesday');
      expect(getDayName(DayOfWeek.Wednesday)).toBe('Wednesday');
      expect(getDayName(DayOfWeek.Thursday)).toBe('Thursday');
      expect(getDayName(DayOfWeek.Friday)).toBe('Friday');
      expect(getDayName(DayOfWeek.Saturday)).toBe('Saturday');
    });
  });

  describe('getNextOpenDay', () => {
    it('should return Tuesday when current day is Sunday', () => {
      expect(getNextOpenDay(DayOfWeek.Sunday)).toBe('Tuesday');
    });

    it('should return Tuesday when current day is Monday', () => {
      expect(getNextOpenDay(DayOfWeek.Monday)).toBe('Tuesday');
    });

    it('should return Wednesday when current day is Tuesday', () => {
      expect(getNextOpenDay(DayOfWeek.Tuesday)).toBe('Wednesday');
    });

    it('should return Tuesday when current day is Saturday', () => {
      expect(getNextOpenDay(DayOfWeek.Saturday)).toBe('Tuesday');
    });
  });

  describe('getActiveSpecial', () => {
    it('should return Taco Tuesday special on Tuesday', () => {
      const special = getActiveSpecial(DayOfWeek.Tuesday);
      expect(special).toBeDefined();
      expect(special?.title).toBe('Taco Tuesday');
      expect(special?.description).toContain('Adobada');
    });

    it('should return Wrap Wednesday special on Wednesday', () => {
      const special = getActiveSpecial(DayOfWeek.Wednesday);
      expect(special).toBeDefined();
      expect(special?.title).toBe('Wrap Wednesday');
      expect(special?.discount).toBe('$1 off');
    });

    it('should return Poutine Friday special on Friday', () => {
      const special = getActiveSpecial(DayOfWeek.Friday);
      expect(special).toBeDefined();
      expect(special?.title).toBe('Poutine Friday');
      expect(special?.description).toContain('poutine');
    });

    it('should return undefined for days without specials', () => {
      expect(getActiveSpecial(DayOfWeek.Thursday)).toBeUndefined();
      expect(getActiveSpecial(DayOfWeek.Saturday)).toBeUndefined();
    });

    it('should return undefined for closed days', () => {
      expect(getActiveSpecial(DayOfWeek.Sunday)).toBeUndefined();
      expect(getActiveSpecial(DayOfWeek.Monday)).toBeUndefined();
    });
  });

  describe('getDayStatus', () => {
    it('should return closed status for Sunday', () => {
      // Use explicit local time to avoid UTC date shift issues
      const sunday = new Date(2025, 11, 28, 12, 0, 0); // Dec 28, 2025 is Sunday
      const status = getDayStatus(sunday);

      expect(status.isClosed).toBe(true);
      expect(status.dayOfWeek).toBe(DayOfWeek.Sunday);
      expect(status.dayName).toBe('Sunday');
      expect(status.nextOpenDay).toBe('Tuesday');
      expect(status.closedMessage).toContain('Closed Today');
      expect(status.closedMessage).toContain('Tuesday');
      expect(status.activeSpecial).toBeUndefined();
    });

    it('should return closed status for Monday', () => {
      const monday = new Date(2025, 11, 29, 12, 0, 0); // Dec 29, 2025 is Monday
      const status = getDayStatus(monday);

      expect(status.isClosed).toBe(true);
      expect(status.dayOfWeek).toBe(DayOfWeek.Monday);
      expect(status.closedMessage).toContain('Closed Today');
    });

    it('should return open status with Taco Tuesday special', () => {
      const tuesday = new Date(2025, 11, 30, 12, 0, 0); // Dec 30, 2025 is Tuesday
      const status = getDayStatus(tuesday);

      expect(status.isClosed).toBe(false);
      expect(status.dayOfWeek).toBe(DayOfWeek.Tuesday);
      expect(status.closedMessage).toBeUndefined();
      expect(status.activeSpecial).toBeDefined();
      expect(status.activeSpecial?.title).toBe('Taco Tuesday');
    });

    it('should return open status with Poutine Friday special', () => {
      const friday = new Date(2025, 11, 26, 12, 0, 0); // Dec 26, 2025 is Friday
      const status = getDayStatus(friday);

      expect(status.isClosed).toBe(false);
      expect(status.dayOfWeek).toBe(DayOfWeek.Friday);
      expect(status.activeSpecial).toBeDefined();
      expect(status.activeSpecial?.title).toBe('Poutine Friday');
    });

    it('should return open status without special for Thursday', () => {
      const thursday = new Date(2025, 11, 25, 12, 0, 0); // Dec 25, 2025 is Thursday
      const status = getDayStatus(thursday);

      expect(status.isClosed).toBe(false);
      expect(status.dayOfWeek).toBe(DayOfWeek.Thursday);
      expect(status.activeSpecial).toBeUndefined();
    });
  });

  describe('isCurrentlyOpen', () => {
    it('should return false on Sunday regardless of time', () => {
      const sundayMorning = new Date(2025, 11, 28, 12, 0, 0);
      expect(isCurrentlyOpen(sundayMorning)).toBe(false);
    });

    it('should return false on Monday regardless of time', () => {
      const mondayAfternoon = new Date(2025, 11, 29, 14, 0, 0);
      expect(isCurrentlyOpen(mondayAfternoon)).toBe(false);
    });

    it('should return true during operating hours on open days', () => {
      const tuesdayNoon = new Date(2025, 11, 30, 12, 0, 0);
      expect(isCurrentlyOpen(tuesdayNoon)).toBe(true);

      const fridayEvening = new Date(2025, 11, 26, 20, 0, 0);
      expect(isCurrentlyOpen(fridayEvening)).toBe(true);
    });

    it('should return false before opening time', () => {
      const tuesdayEarly = new Date(2025, 11, 30, 10, 0, 0);
      expect(isCurrentlyOpen(tuesdayEarly)).toBe(false);
    });

    it('should return false after closing time', () => {
      const tuesdayLate = new Date(2025, 11, 30, 21, 30, 0);
      expect(isCurrentlyOpen(tuesdayLate)).toBe(false);
    });
  });

  describe('getFormattedHours', () => {
    it('should return formatted hours string', () => {
      const hours = getFormattedHours();
      expect(hours).toBe('11:00 AM - 9:00 PM');
    });
  });

  describe('Constants', () => {
    it('should have correct operating hours', () => {
      expect(OPERATING_HOURS.open).toBe(11);
      expect(OPERATING_HOURS.close).toBe(21);
    });

    it('should have Sunday and Monday as closed days', () => {
      expect(CLOSED_DAYS).toContain(DayOfWeek.Sunday);
      expect(CLOSED_DAYS).toContain(DayOfWeek.Monday);
      expect(CLOSED_DAYS.length).toBe(2);
    });

    it('should have three daily specials', () => {
      expect(DAILY_SPECIALS.length).toBe(3);
    });
  });
});
