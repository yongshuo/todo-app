export const WeekMapper = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
}

export const MonthMapper = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

export class CustomDate {
  constructor() {
    this.currentDate = new Date()
  }

  nextDate() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1))
    return this
  }

  prevDate() {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1))
    return this
  }

  toString() {
    const week = WeekMapper[this.currentDate.getDay()]
    const day = this.currentDate.getDate()
    const month = MonthMapper[this.currentDate.getMonth()]
    const fullYear = this.currentDate.getFullYear()

    return `${week}, ${day} ${month} ${fullYear}`
  }
}

export default new CustomDate()
