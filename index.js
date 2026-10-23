'use strict'

function number(value, locale) {
  return Number(value).toLocaleString(locale || 'en-US')
}

function percent(value, digits) {
  return (Number(value) * 100).toFixed(digits == null ? 1 : digits) + '%'
}

function bytes(value) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let n = Number(value)
  let i = 0
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }
  return (Math.round(n * 10) / 10) + ' ' + units[i]
}

function date(value, style) {
  const d = value instanceof Date ? value : new Date(value)
  return style === 'long' ? d.toDateString() : d.toISOString().slice(0, 10)
}

module.exports = { number, percent, bytes, date }
