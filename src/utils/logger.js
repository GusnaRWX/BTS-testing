export const Logger = (label, logs) => {
  if (process.env.NODE_ENV === 'production') return
  console.group(label)
  console.table(logs)
  console.groupEnd()
}