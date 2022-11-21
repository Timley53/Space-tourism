"strict mode";

const menuBtn = document.querySelector(".menu");
const menuBar = document.querySelector(".menuBar");
const navLists = document.querySelector(".nav-lists");
const tabBtn = document.querySelectorAll(".tab");
const btn = document.querySelectorAll(".btn");
const launchBtn = document.querySelectorAll(".launch-btn");
// const menuPics = document.querySelector(".menu-pics");
const menuBarClose = document.querySelector(".menuBar-close");
const destinationTab = document.querySelector("#destination-tab");
const starPics = document.querySelector(".star-pics");
const engPics = document.querySelector(".eng-pics");
const engDescription = document.querySelector(".eng-description");
const launch = document.querySelector(".launch");
const rocket = document.querySelector(".rocket");

menuBtn.addEventListener("click", function () {
  // console.log(navLists.classList);
  navLists.classList.toggle("translate");
  menuBarClose.classList.toggle("menu-none");
  menuBar.classList.toggle("menu-none");
});

const renderMoondetails = function (obj) {
  destinationTab.innerHTML = "";

  const html = `
   <h1>${obj?.name}</h1>

            <p>
             ${obj?.description}
            </p>

            <hr class="h-line" />
            <div class="avg-est">
              <div class="avg">
                <h4>AVG. DISTANCE</h4>
                <div class="span">${obj?.distance}</div>
              </div>

              <div class="est">
                <h4>EST. TRAVEL TIME</h4>
                <div class="span">${obj?.travel}</div>
              </div>
            </div>
  
  `;
  destinationTab.insertAdjacentHTML("afterbegin", html);
  starPics.src = obj?.images.png;
};

const crewDetails = function (obj) {
  engDescription.innerHTML = "";
  const html = `
   <h2>02 MEET YOUR CREW</h2>

          <div class="eng-title">${obj.role}</div>
          <div class="eng-name">${obj.name}</div>
          <div class="eng-desc">
           ${obj.bio}
          </div>
  `;
  engDescription.insertAdjacentHTML("afterbegin", html);
  engPics.src = obj.images.png;
};

const renderLaunchDetails = function (obj) {
  launch.innerHTML = "";

  const html = `
   <p class="terminology" id="terminology">THE TERMINOLOGY</p>

              <h1>${obj.name}</h1>

              <p>
               ${obj.description}
              </p>
  `;

  launch.insertAdjacentHTML("afterbegin", html);
  rocket.src = obj.images.portrait;
};

// /////////

const checkElements = function (caller, divElement, callbackfxn) {
  if (!divElement) {
    console.log(null);
  } else {
    callbackfxn(caller[0]);
  }
};
//////////////
function LoopBtnListener(obj, fxn, loopBtn, className) {
  loopBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      loopBtn.forEach((btn) => {
        btn.classList.remove(className);
      });
      fxn(obj[i]);
      btn.classList.add(className);
    });
  });
}
////////////////
////
//////////
fetch("/data.json")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    const { destinations, crew, technology } = data;

    ////checking if element exists before loading data into them
    checkElements(destinations, destinationTab, renderMoondetails);
    checkElements(crew, engDescription, crewDetails);
    checkElements(technology, launch, renderLaunchDetails);

    ////////

    console.log(destinations, crew, technology);

    // tabBtn.forEach((btn) => {
    //   const rock = destinations.find((dest) => {
    //     return btn.classList.contains(dest.name);
    //   });
    //   btn.addEventListener("click", function () {
    //     console.log(rock);
    //     renderMoondetails(rock);
    //     tabBtn.forEach((btn) => btn.classList.remove("active"));
    //     this.classList.add("active");
    //   });
    // });

    LoopBtnListener(destinations, renderMoondetails, tabBtn, "active");

    //////
    LoopBtnListener(crew, crewDetails, btn, "active-btn");

    /////
    //launchbtn

    LoopBtnListener(technology, renderLaunchDetails, launchBtn, "active-launc");
  }); //.catch((err) => {
//   console.log(err.message);
// });

// if (!destinationTab) {
//   console.log(null);
// } else {
//   renderMoondetails(destinations[0]);
//   // console.log(destinations);
// }
// if (!engDescription) {
//   console.log(null);
// } else {
//   crewDetails(crew[0]);
// }

// if (!launch) {
//   console.log(null);
// } else {
//   renderLaunchDetails(technology[0]);
// }

//////
// btn.forEach((Btn, i) => {
//   Btn.addEventListener("click", function () {
//     //
//     btn.forEach((btnn) => {
//       btnn.classList.remove("active-btn");
//     });
//     crewDetails(crew[i]);

//     Btn.classList.add("active-btn");
//   });
// });

// launchBtn.forEach((btn, i) => {
//   btn.addEventListener("click", function () {
//     launchBtn.forEach((btn) => {
//       btn.classList.remove("active-launc");
//     });
//     renderLaunchDetails(technology[i]);
//     btn.classList.add("active-launc");
//   });
// });
