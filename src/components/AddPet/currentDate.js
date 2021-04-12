const today = new Date()

const date = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

export default date
