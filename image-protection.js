// Discourage casual image saving. Visible images can still be captured or downloaded.
function isImageTarget(target) {
  return target instanceof Element && target.closest('img, picture') !== null;
}
document.addEventListener('contextmenu', event => {
  if (isImageTarget(event.target)) event.preventDefault();
});
document.addEventListener('dragstart', event => {
  if (isImageTarget(event.target)) event.preventDefault();
});
