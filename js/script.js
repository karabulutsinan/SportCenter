// This function changes the navigation bar's background color on scroll
window.onscroll = function () {
  scrollFunction();
};

// Function to change navigation bar's background color
function scrollFunction() {
  if (
    document.body.scrollTop > 509.5 ||
    document.documentElement.scrollTop > 509.5
  ) {
    document.querySelector("nav").style.backgroundColor = "#355592";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
}

// Selecting DOM elements
const featuresButtonsDOM = document.querySelectorAll("#features button");
const contentDOM = document.querySelector(".classes-content");

// Content data
const content = [
  {
    id: 1,
    img: "/assets/yoga.jpg",
    category: "Yoga",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae veritatis, asperiores eveniet est nesciunt sequi ipsum dolorum?",
  },
  {
    id: 2,
    img: "/assets/group.webp",
    category: "Group",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium perferendis voluptatum delectus culpa at reiciendis facere quidem.",
  },
  {
    id: 3,
    img: "/assets/solo.jpg",
    category: "Solo",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus corporis sit deserunt est totam culpa repellat cumque expedita.",
  },
  {
    id: 4,
    img: "/assets/stret.webp",
    category: "Stretching",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit temporibus soluta ratione sapiente sequi illo est doloribus molestiae?",
  },
];

// Function to load default content on page load
document.addEventListener("DOMContentLoaded", function () {
  const defaultButton = featuresButtonsDOM[0];
  defaultButton.click();
});

// Event listeners for feature buttons
featuresButtonsDOM.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("features-btn-active");
    featuresButtonsDOM.forEach(function (otherItem) {
      if (item != otherItem) {
        otherItem.classList.remove("features-btn-active");
      }
    });

    const selectedCategory = item.getAttribute("data-category");
    const selectedContent = content.find(
      (item) => item.category === selectedCategory
    );

    contentDOM.innerHTML = `
      <div class="classes-content-article">
      <div >
        <h2>Why are your ${selectedContent.category}?</h2><br>
        <p>
          ${selectedContent.text}
        </p><br>
      </div>
      <div>
        <h2>It's Your ${selectedContent.category} Time.</h2><br>
        <p>Saturday-Sunday: 8:00am - 10:00am</p>
        <br/>
        <p>Monday-Tuesday: 10:00am - 12:00pm</p>
        <br/>
        <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
      </div>
      </div>
      <div class="classes-content-figure">
      <img src=${selectedContent.img} alt="" /> 
      </div>
    `;
  });
});

// Function to calculate BMI
function calculateBMI() {
  var height = document.getElementById("cm").value;
  var weight = document.getElementById("kg").value;
  var indicator = document.querySelector(".bmi-indicator");

  var bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  //0-40
  if (bmi > 40) {
    bmi = 40;
  } else if (bmi < 0) {
    bmi = 0;
  }
  console.log(bmi);
  //min 7
  //max 87.5
  switch (true) {
    case bmi < 18.5:
      indicator.style.left = `${bmi * (15 / 18.5) + 7}%`;
      break;
    case bmi <= 24.9:
      indicator.style.left = `${(bmi - 18.5) * (15 / 6.4) + 23.5}%`;
      break;
    case bmi <= 29.9:
      indicator.style.left = `${(bmi - 25) * (15 / 4.9) + 40}%`;
      break;
    case bmi <= 34.9:
      indicator.style.left = `${(bmi - 30) * (15 / 4.9) + 56.5}%`;
      break;
    case bmi > 34.9:
      indicator.style.left = `${(bmi - 35) * (15 / 4.9) + 73}%`;
      break;
  }

  console.log(indicator.style.left);
  //underweight 7-44
  //normal 44-57
  //overweight 57-67
  //obese 67-77
  //extremely obese 77-87
}

// Toggle navigation bar for mobile view
var navBtnDOM = document.querySelector(".checkbtn");
var navLinkDOM = document.querySelector("nav .link");
var allNavLinkDOM = document.querySelectorAll("nav .link li a");

navBtnDOM.addEventListener("click", function () {
  navLinkDOM.classList.toggle("show");
});

allNavLinkDOM.forEach((tag) => {
  tag.addEventListener("click", function () {
    setTimeout(function () {
      navLinkDOM.classList.toggle("show");
    }, 400);
  });
});
