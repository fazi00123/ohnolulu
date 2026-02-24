document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.getElementById("bubbles");
    const bubbleScreen = document.getElementById("bubble-screen");
    const newPage = document.getElementById("new-page");
    const bubbles = [];

    // Background images for 10 bubbles
    const bubbleImages = [
        "url('./img/p1.jpg')",
        "url('./img/p2.jpg')",
        "url('./img/p3.jpg')",
        "url('./img/p4.jpg')",
        "url('./img/p5.jpg')",
        "url('./img/p6.jpg')",
        "url('./img/p7.jpg')",
        "url('./img/p8.jpg')",
        "url('./img/p9.jpg')",
        "url('./img/p10.jpg')"
    ];

    // Navigation links for each bubble
    const bubbleLinks = [
        "./contact.php",
        "./companion.php",
        "./creategroup.php",
        "./flatmate.php",
        "./index.php",
        "./joinflate.php",
        "./listroom.php",
        "./search.php",
        "./signup.php",
        "./about.php"
    ];

    function createBubble(index) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        let size = 200; // Fixed bubble size
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundImage = bubbleImages[index]; // Set background image
        bubble.style.backgroundSize = "cover";
        bubble.style.borderRadius = "50%";
        bubble.style.position = "absolute";

        let randomX = Math.random() * (window.innerWidth - size);
        let randomY = Math.random() * (window.innerHeight - size);
        bubble.style.left = `${randomX}px`;
        bubble.style.top = `${randomY}px`;

        // On click, navigate to a page
        bubble.addEventListener("click", () => {
            window.location.href = bubbleLinks[index];
        });

        bubbleContainer.appendChild(bubble);

        bubbles.push({
            element: bubble,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4
        });
    }

    // Create exactly 10 bubbles
    for (let i = 0; i < 10; i++) {
        createBubble(i);
    }

    function animateBubbles() {
        bubbles.forEach(bubble => {
            let rect = bubble.element.getBoundingClientRect();
            let x = parseFloat(bubble.element.style.left);
            let y = parseFloat(bubble.element.style.top);

            if (x + rect.width >= window.innerWidth || x <= 0) bubble.vx *= -1;
            if (y + rect.height >= window.innerHeight || y <= 0) bubble.vy *= -1;

            bubble.element.style.left = `${x + bubble.vx}px`;
            bubble.element.style.top = `${y + bubble.vy}px`;
        });
        requestAnimationFrame(animateBubbles);
    }

    animateBubbles();
    let scrolled = false;
window.addEventListener("scroll", () => {
    if (!scrolled) {
        // Make the bubble screen transition slower
        bubbleScreen.style.transition = "transform 1.5s ease-in-out";
        bubbleScreen.style.transform = "translateY(-100%)";

        setTimeout(() => {
            bubbleContainer.innerHTML = ""; // Clear bubbles
            bubbleScreen.style.display = "none"; // Hide completely

            // Add a slight delay before scrolling for a smoother effect
            setTimeout(() => {
                const newPage = document.getElementById("new-page");
                window.scrollTo({
                    top: newPage.offsetTop, // Scroll 100px down from the top of new-page
                    behavior: "smooth"
                });
            }, 500); // Delay to make it feel more natural

        }, 1500); // Increased duration for a smoother transition

        scrolled = true;
    }
});

});



  $(function () {
  $('.repeat').click(function () {
    var h1 = $(this).parent().find("h1");
    var classes = h1.attr('class');
    h1.attr('class', 'animate');
    setTimeout(function () {
      h1.addClass(classes);
    }, 20);
  });
});









const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));












// four card animation



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Hero heading letters
  gsap.from(".hero-heading span", {
    y: 80,
    opacity: 0,
    stagger: 0.05,
    ease: "expo.out",
    duration: 1.2,
    delay: 0.5
  });

  // Hero para
  gsap.from(".hero-para", {
    y: 40,
    opacity: 0,
    ease: "power3.out",
    duration: 1,
    delay: 1.2
  });

  // Hero button
  gsap.from(".hero-btn", {
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 0.8,
    delay: 1.5
  });

  // Navbar
  gsap.from(".nav-anim", {
    y: -50,
    opacity: 0,
    ease: "power2.out",
    duration: 1
  });

  // Background
  gsap.from(".hero-bg", {
    opacity: 0,
    scale: 1.05,
    duration: 2,
    ease: "power1.out"
  });

  // Counters
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");

    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(counter, { innerText: 0 }, {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            counter.innerText = Math.floor(counter.innerText) + (counter.dataset.suffix || "");
          }
        });
      }
    });
  });
});








