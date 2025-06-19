// const proxy = "https://api.allorigins.win/get?url="
// const quoteAPI = "https://favqs.com/api/qotd";
// const btn = document.querySelector("button");

// const Quotes = async()=>{
//     try{
//     console.log("Fetching Data");
//     let response = await fetch(proxy + encodeURIComponent(quoteAPI));
//     console.log(response);

//     let data = await response.json();
//     btn.innerText = data[0].text;
//     }catch (err){
//         console.log("Error loading quote",err);
//     }

// }
// btn.addEventListener("click",Quotes);

const quoteAPI = "https://favqs.com/api/qotd";
const proxy = "https://api.allorigins.win/get?url=";
const btn = document.querySelector("button");
const text = document.querySelector("p");

const Quotes = async () => {
  console.log("Fetching Data");

  try {
    let response = await fetch(proxy + encodeURIComponent(quoteAPI));
    let rawData = await response.json();
    let parsed = JSON.parse(rawData.contents);
    let quote = parsed.quote.body;
    let author = parsed.quote.author;

    text.innerText = `"${quote}" — ${author || "Unknown"}`;
  } catch (error) {
    console.error("Error loading quote", error);
    text.innerText = "Failed to load quote.";
  }
};

btn.addEventListener("click", Quotes);
