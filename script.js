const apiKey = "0bypD7lZJl4+WULNvcC0+Q==fh8HQygCRkNO0YzW";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const button = document.getElementById("button");
button.addEventListener("click", generateNewJoke);

const joke = document.getElementById("jokeSection");
async function generateNewJoke() {
  joke.innerText = "Upadting";
  const response = await fetch(apiURL, options);
  const data = await response.json();
  joke.innerText = data[0].joke;
}
