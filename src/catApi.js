import axios from "axios"

export function fetchRandomCat() {
  return axios
    .get("http://aws.random.cat/meow")
    .then(response => response.data)
    .catch(error => {
      console.log(`Error: ${error.message}`)
    })
}
