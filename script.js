const roles = document.querySelectorAll(".roles li");
const text = document.getElementById("role-text");

const roleDescriptions = {
	everyone:
		"Hi, I’m Ayasha — a <span>full-stack web developer</span> passionate about building scalable and user-centered digital experiences that make technology truly helpful for people.",
	recruiters:
		"I’m an aspiring Software Engineer with hands-on experience in MERN stack, Django, and ServiceNow. I build secure, efficient, and production-ready applications that turn business logic into real-world results.",
	developers:
		"I speak JavaScript fluently and think in components. From React and Node to APIs and MongoDB, I love connecting frontend elegance with backend logic to create powerful systems.",
	designers:
		"I craft interfaces that look good, feel intuitive, and perform beautifully — where design and code speak the same language.",
};

roles.forEach((role) => {
	role.addEventListener("click", () => {
		// Remove active class
		roles.forEach((r) => r.classList.remove("active"));
		role.classList.add("active");

		// Change text dynamically
		const roleKey = role.getAttribute("data-role");
		if (roleKey === "everyone") {
			text.innerHTML =
				'Hi, I’m <span class="axis">Ayasha Mohammad </span>— a <span>full-stack web developer</span> passionate about building scalable and user-centered digital experiences.';
		} else if (roleKey === "recruiters") {
			text.innerHTML =
				"I’m an aspiring Software Engineer with hands-on experience in <span>MERN stack, Machine Learning and ServiceNow</span>. I build secure, efficient, and production-ready applications.";
		} else if (roleKey === "developers") {
			text.innerHTML =
				"I speak JavaScript fluently and think in components. From <span>React and Node to APIs and MongoDB</span>, I love connecting frontend elegance with backend logic.";
		} else if (roleKey === "innovators") {
			text.innerHTML =
				"I explore AI and automation tools to enhance modern development workflows — where <span>creativity meets intelligence</span> and <span>every line of code drives innovation</span>.";
		}
	});
});

function scrollNav() {
	const nav = document.querySelector("header");

	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		if (lastScrollY < window.scrollY) {
			nav.classList.add("header--hidden");
		} else {
			nav.classList.remove("header--hidden");
		}

		lastScrollY = window.scrollY;
	});
}

scrollNav();

const menu = document.querySelector("header nav .menu");
const navLinks = document.querySelector("header nav .nav-links");

menu.addEventListener("click", () => {
	navLinks.classList.toggle("menu-active");
});
