import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

function createImageMarkup(galleryItemsMassiveOfObjs) {
  return galleryItemsMassiveOfObjs
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    })
    .join("");
}
const imagesContainer = document.querySelector("div.gallery");
const imagesMarkup = createImageMarkup(galleryItems);
imagesContainer.insertAdjacentHTML("afterbegin", imagesMarkup);
imagesContainer.addEventListener("click", onImageHandleClick);
const instance = {
  openImageInModal(image) {
    const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${image.dataset.source}"/>
            </div>`);
    instance.show();
  },
  closeModal() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        console.log(e);
        instance.close();
      }
    });
  },
};
function onImageHandleClick(evt) {
  evt.preventDefault();
  const isImage = evt.target.classList.contains("gallery__image");
  if (!isImage) {
    return;
  }
  const activeImage = evt.target;
  instance.openImageInModal(activeImage);
  instance.closeModal();
}
