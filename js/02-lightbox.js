import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const render = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", render);
var lightbox = new SimpleLightbox(".gallery__item", {
  caption: true,
  captionSelector: "img",
  captionPosition: "button",
  captionData: "alt",
  captionDelay: 250,
});
