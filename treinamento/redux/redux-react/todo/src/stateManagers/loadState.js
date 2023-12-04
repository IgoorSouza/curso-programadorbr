export default function loadState() {
  const actualState = localStorage.getItem("savedItems")
  if (actualState) {
    return JSON.parse(actualState)
  } else {
    return []
  }
}