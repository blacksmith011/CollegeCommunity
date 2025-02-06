function Toggle() {
    const navbar = document.getElementById("nav");
    // navbar.style.display="block";
    console.log('clicked');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }

}
document.querySelector("nav button").addEventListener("click", function() {
    this.innerHTML = "Loading...";
    this.disabled = true;
    setTimeout(() => {
      this.innerHTML = "LOGIN";
      this.disabled = false;
    }, 2000); // Simulates loading effect
  });

function playVideo() {
    let video = document.getElementById("thetaverseVideo");
    video.volume = 1; // Ensures sound is enabled
    video.play();
}

function pauseVideo() {
    let video = document.getElementById("thetaverseVideo");
    video.pause();
    video.currentTime = 0; // Resets to the beginning
}
function toggleCourse(id) {
    var course = document.getElementById(id);
    var icon = course.previousElementSibling.querySelector('.toggle-icon');

    // Close all other courses
    document.querySelectorAll('.course-content').forEach(function(content) {
        if (content.id !== id) {
            content.style.display = "none";
            content.previousElementSibling.querySelector('.toggle-icon').textContent = "+";
        }
    });

    // Toggle the clicked course
    if (course.style.display === "block") {
        course.style.display = "none";
        icon.textContent = "+";
    } else {
        course.style.display = "block";
        icon.textContent = "-";
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 6000, 
        disableOnInteraction: false, 
    },
});


// function flipCard(card) {
//     card.classList.toggle('flipped');
// }


