export default function persistState (state) {
  localStorage.setItem("savedItems", JSON.stringify(state))
}