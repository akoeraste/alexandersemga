// Call Functions When the user scrolls down a defined height from the top of the document
window.onscroll = function() {
  
	modify_header();
	show_or_hide_scroll_button();
	
};

//navbar
document.addEventListener('DOMContentLoaded', function() {
	var navbar = document.getElementById('navigation');
	var halfViewport = window.innerHeight / 2;
  
	window.addEventListener('scroll', function() {
	  if (window.scrollY > halfViewport) {
		navbar.classList.add('navbar-scrolled');
	  } else {
		navbar.classList.remove('navbar-scrolled');
	  }
	});
  });
// Add a class to the header upon scroll 
function modify_header() {

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("navigation").classList.add("scrolled");
	} else {
		document.getElementById("navigation").classList.remove("scrolled");
	}

}

//quote section
document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate__fadeIn');
			} else {
				entry.target.classList.remove('animate__fadeIn');
			}
		});
	}, { threshold: 0.1 });

	observer.observe(document.querySelector('.quote-content'));
});

// Scroll to Top Button 
// Get the button:
mybutton = document.getElementById("backToTop");

// Show or Hide the button when user scrolls 20px
function show_or_hide_scroll_button() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}

}

// When the user clicks on the button, scroll to the top of the document
function scroll_to_top() {

	// For Safari
	document.body.scrollTop = 0;
	// For Chrome, Firefox, IE and Opera
	document.documentElement.scrollTop = 0;

}


// Activate Bootstrap Tooltips 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Google Recaptcha 
function onSubmit(token) {
	document.getElementById("contact-form").submit();
}
//Get current year
document.getElementById('currentYear').textContent = new Date().getFullYear();