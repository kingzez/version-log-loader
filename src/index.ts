import loaderUtils from 'loader-utils'

const format = (date = new Date()) => {
  const padding = (d: number) => ('' + d).padStart(2, '0')
  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].reduce((acc: string, curr: number) => acc + padding(curr), '')
}

let inserted = false

export default function versionLogLoader(source: string) {
  const defaultOptions = { version: format() }
  const options = loaderUtils.getOptions(this) || defaultOptions
  if (inserted) return source
  const result = source.concat(`console.log('${options.version}')`)
  inserted = true
  return result
}

module.exports = versionLogLoader
