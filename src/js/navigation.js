const toggleNavigation = document.getElementById("toggleNavigation");
const navigation = document.getElementById("navigation");
const userClicksNavigationLink = document.getElementById("userClicksNavigationLink");

toggleNavigation.addEventListener("change", () => {
	navigation.classList.toggle("!max-h-96");
});

userClicksNavigationLink.addEventListener("click", () => {
	navigation.classList.remove("!max-h-96");
	toggleNavigation.checked = !toggleNavigation.checked;
});
