import TvItem from "./tvItem.js"


export const doApi = async (search) => {
  let url = `https://api.tvmaze.com/search/shows?q=${search}`;
  document.querySelector("#id_parent").innerHTML=`<h2>Laoding...</h2>`
  let resp = await axios.get(url);
  console.log(resp.data);
  createList(resp.data)
};
const createList = (arr) => {
document.querySelector("#id_parent").innerHTML="";
arr.forEach(item => {
    let movie=new TvItem("#id_parent",item.show)
    movie.render()
});
};
