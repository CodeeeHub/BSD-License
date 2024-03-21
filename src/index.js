// const images = document.getElementsByTagName("img");

// const createSkeletonImage = (width, height) => {
//   const img = document.createElement("img");
//   img.classList.add(
//     "bg-slate-200",
//     "skeleton-image",
//     "animate-pulse",
//     "rounded-md"
//   );
//   img.setAttribute("width", width);
//   img.setAttribute("height", height);
//   return img;
// };

// // Replace each image with a skeleton image
// for (let i = 0; i < images.length; i++) {
//   const originalImage = images[i];
//   const skeletonImage = createSkeletonImage(
//     originalImage.width,
//     originalImage.height
//   );
//   originalImage.parentNode.replaceChild(skeletonImage, originalImage);
// }

// // Function to replace skeleton images with actual images
// const replaceWithActualImages = () => {
//   for (let i = 0; i < images.length; i++) {
//     const originalImg = images[i];
//     const parentNode = originalImg.parentNode;
//     const skeletonImage = parentNode.querySelector(".skeleton-image");
//     if (skeletonImage) {
//       const actualImage = document.createElement("img");
//       actualImage.src = originalImg.src;
//       actualImage.width = originalImg.width;
//       actualImage.height = originalImg.height;
//       parentNode.replaceChild(actualImage, skeletonImage);
//     }
//   }
// };

// // Call replaceWithActualImages after a delay
// setTimeout(replaceWithActualImages(), 100);
