console.log("JavaScript code running!");

const navbarItems = document.querySelectorAll(".navbar-item");

navbarItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    navbarItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked item
    this.classList.add("active");
  });
});

var personal = `
  <div class="card">
    <img class="icons" src="images/phone-svgrepo-com.svg" alt="Description of SVG file">
    <span>First line of text</span>
    <br />
    <img class="icons" src="images/phone-svgrepo-com.svg" alt="Description of SVG file">

    <span>Second line of text</span>
    <br />
    <img class="icons" src="images/phone-svgrepo-com.svg" alt="Description of SVG file">

    <span>Third line of text</span>
  </div>
`;

function changeContent(item) {
  var content = document.getElementById("description");

  switch (item) {
    case 1:
      content.innerHTML = "About me section";
      break;
    case 2:
      content.innerHTML = "Content for Item 2.";
      break;
    case 3:
      content.innerHTML = "Content for Item 3.";
      break;
    case 4:
      content.innerHTML = "Content for Item 4.";
      break;
    case 5:
      content.innerHTML = "Content for Item 5.";
      break;
    case 6:
      content.innerHTML = personal;
      break;
    case 7:
      content.innerHTML = "Content for Item 7.";
      break;
    default:
      content.innerHTML = "Click to see more!";
      break;
  }
}

function scrollToBottom() {
  var currentPosition = window.pageYOffset;
  var targetPosition = document.body.scrollHeight - window.innerHeight + 150;
  var distance = targetPosition - currentPosition;
  var duration = 100; // in milliseconds
  var start = null;

  function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    var progress = timestamp - start;
    var percentage = Math.min(progress / duration, 1);
    window.scrollTo(0, currentPosition + distance * percentage);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function checkScroll() {
  // Check if user has scrolled to the top of the page
  var scrolledToTop =
    (document.documentElement.scrollTop || document.body.scrollTop) === 0;

  if (scrolledToTop) {
    // Remove class to remove frosted glass filter
    var element = document.getElementById("glass");
    element.classList.remove("frosted-glass");
  }
  if (!scrolledToTop) {
    // Add class to add frosted glass filter
    var element = document.getElementById("glass");
    element.classList.add("frosted-glass");
  }
}

// Add event listeners for wheel and scroll events
window.addEventListener("wheel", checkScroll);
window.addEventListener("scroll", checkScroll);
