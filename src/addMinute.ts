import { date } from "./date"
import type { DateInput, MaybeDateInput } from "./types"

/**
 * Returns a new date object 1/n minutes after the original one.
 * @param [inputDate] - A date to increment or null to increment from the current time.
 * @param [count] - The quantity to add.
 */
export function addMinute(inputDate?: MaybeDateInput, count = 1) {
  const d = date(inputDate)
  d.setMinutes(d.getMinutes() + count)
  return d
}
