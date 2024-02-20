const track = document.querySelector(".slider_track");
const backBtn = document.querySelector(".left_arrow_btn");
const nextBtn = document.querySelector(".right_arrow_btn");
let distance = 0;

nextBtn.addEventListener("click", () => {
  distance += 480;
  if (distance > 960) {
    distance = 0;
  }
  track.style.left = -distance + "px";
});

backBtn.addEventListener("click", () => {
  distance -= 480;
  if (distance < 0) {
    distance = 960;
  }
  track.style.left = -distance + "px";
});

// const rightSwitch = document.querySelector(".left_arrow_btn");
// const leftSwitch = document.querySelector(".right_arrow_btn");
// let imgIndex = 0;

// const images = document.querySelectorAll(".slider_img");
// const switches = document.querySelectorAll(".switch");

// console.log(images);

// function leaf(index) {
//   images[imgIndex].classList.remove("active");
//   images[index].classList.add("active");
//   imgIndex = index;
// }

// rightSwitch.addEventListener("click", (ev) => {
//   console.log("right");
// });

// leftSwitch.addEventListener("click", (ev) => {
//   console.log("left");
// });
// switches.forEach((el) => {
//   el.addEventListener("click", (ev) => {
//     if (ev.target.classList.contains("left_arrow_btn")) {
//       let index = imgIndex - 1;

//       if (index < 0) {
//         index = images.length - 1;
//       }

//       leaf(index);
//     } else if (ev.target.classList.contains("right_arrow_btn")) {
//       let index = imgIndex + 1;

//       if (index >= images.length) {
//         index = 0;
//       }
//       leaf(index);
//     }
//   });
// });

// leaf(imgIndex);
