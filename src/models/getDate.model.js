const getDate = (data) => {
  const date = data
  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const formatDate = year + "/" + month + "/" + day
  return formatDate
}

export default getDate