
const MY_EMAIL = "nicolasgiovani.francisco@cvsu.edu.ph"; 

const projects = {
  royal: {
    title: "Royal Air",
    sub: "Under the AIC partnership",
    img: "images/royal-air.png",
    role: "Airline Worker",
    duration: "1 Year",
    tasks: [
      "Interior/External Cleaning",
      "Wheelchair Attendant",
      
    ],
    exp: "I have learned about the routine and workflow in airports."
  },
  psi: {
    title: "PSI Air",
    sub: "Philippine cargo airline and aviation training provider",
    img: "images/psi-air.jpg",
    role: "Airline Worker/Staff",
    duration: "1 Year",
    tasks: [
      "Interior/External Cleaning",
      "Wheelchair Attendant",
      "Ramp Agent"
    ],
    exp: "Collaborate effectively in the aviation industry."
  },
  skyjet: {
    title: "SkyJet",
    sub: "Philippine boutique and low-cost regional airline based in Manila",
    img: "images/skyjet.jpg",
    role: "Airline Worker/Staff",
    duration: "2 years",
    tasks: [
      "External/Internal Cleaning",
      "Wheelchair Attendant",
      "Ramp Agent",
      "Baggage Handler"
    ],
    exp: "Positive impact on company growth and sucess."
  },
  cebu: {
    title: "Cebu Pacific",
    sub: "Asia's first low-cost carrier and the largest Philippine airline by fleet size and passenger volume",
    img: "images/cebu-pacific.jpg",
    role: "Airline Staff/Worker",
    duration: "1 Year",
    tasks: [
      "External/Internal Cleaning",
      "Wheelchair Attendant",
      "Baggage Handler"
    ],
    exp: "Communication and customer service to make good contribution to the company growth."
  }
};


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("section[id]");
const links = navLinks.querySelectorAll("a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const modal = document.getElementById("detailsModal");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const p = projects[button.dataset.project];

    document.getElementById("modalImg").src = p.img;
    document.getElementById("modalImg").alt = p.title;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalSub").textContent = p.sub;
    document.getElementById("modalRole").textContent = p.role;
    document.getElementById("modalDuration").textContent = p.duration;
    document.getElementById("modalExp").textContent = p.exp;

    const list = document.getElementById("modalTasks");
    list.innerHTML = "";
    p.tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
    });

    modal.showModal();
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.close());


modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});


document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = "Portfolio message from " + name;
  const body = message + "\n\nFrom: " + name + " (" + email + ")";

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=" + encodeURIComponent(MY_EMAIL) +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.open(gmailUrl, "_blank");
  document.getElementById("formNote").textContent = "Gmail opened in a new tab. Press Send there to finish.";
});
