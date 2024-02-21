const track = document.querySelector(".slider_track");
const backBtn = document.querySelector(".left_arrow_btn");
const nextBtn = document.querySelector(".right_arrow_btn");
const wrapper = document.querySelector(".wrapper");
const images = document.querySelectorAll(".slider_img");
let distance = 0;
let paginationIndicators = [];
let currentPage = 0;

//адаптив
// window.addEventListener('resize', () => {
//   images.forEach((el) => )
// })

// прямое перелистывание
nextBtn.addEventListener("click", () => {
  currentPage++;
  if (currentPage >= images.length) currentPage = 0;

  distance += 480;
  if (distance > 960) {
    distance = 0;
  }
  track.style.left = -distance + "px";
  addActiveIndicator(currentPage);
});

// обратное перелистывание
backBtn.addEventListener("click", () => {
  currentPage--;
  if (currentPage < 0) currentPage = images.length - 1;

  distance -= 480;
  if (distance < 0) {
    distance = 960;
  }
  track.style.left = -distance + "px";
  addActiveIndicator(currentPage);
});

//создание обёртки индикаторов
function createIndicators() {
  const indicators = document.createElement("div");
  indicators.className = "indicators";

  wrapper.append(indicators);
  renderIndicators(indicators);

  paginationIndicators[0].className = "indicator active";

  return indicators;
}
createIndicators();

// рендер индикаторов исходя из количества фотографий
function renderIndicators(indicators) {
  for (page = 0; page < images.length; page++) {
    const indicator = document.createElement("button");
    indicator.className = "indicator";

    indicators.append(indicator);
    paginationIndicators.push(indicator);
  }
}

function addActiveIndicator(currentPage) {
  paginationIndicators.forEach((el) => (el.className = "indicator"));
  paginationIndicators[currentPage].className = "indicator active";
}
