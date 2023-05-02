export const showLightBox = (item) => {
  let lightbox = document.querySelector("#id_lightwindow");
  lightbox.style.display = "flex";
  lightbox.querySelector("img").src = item.img
  lightbox.querySelector("h2").innerHTML = item.title
  lightbox.querySelector("#id_light_date").innerHTML = item.year
  lightbox.querySelector("#id_light_rating").innerHTML = item.rating
  lightbox.querySelector("#id_light_plot").innerHTML = item.info
}

export const hideLightBox = () => {
  document.querySelector("#id_lightwindow").style.display = "none";
}

export const declareLightBoxEvents = () => {
  let closeBtn = document.querySelector("#closeWindow_btn");
  closeBtn.addEventListener("click",() => {
    hideLightBox();
  })
}
