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

/// Canvas setup
const canvas = document.getElementById('overlayCanvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasSize(); // Initial canvas size setup

// Draw the desktop version (original design)
function drawDesktopVersion() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Orange shape from center to right
    ctx.fillStyle = '#c8032c';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(canvas.width, centerY - 400);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(centerX, canvas.height);
    ctx.closePath();
    ctx.fill();

    // Bubbles
    drawBigBubbles();

    // Triangle
    drawTriangle();
}

// Draw the mobile version (semicircle from bottom upwards)
function drawMobileVersion() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height; // Start from the bottom
    const radius = Math.min(canvas.width, canvas.height) / 2;

    // Orange semicircle
    ctx.fillStyle = '#c8032c';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0, false); // Semicircle upwards
    ctx.lineTo(centerX + radius, canvas.height); // Complete the shape
    ctx.lineTo(centerX - radius, canvas.height); // Complete the shape
    ctx.closePath();
    ctx.fill();

    // Bubbles
    drawBubbles();

    // Triangle
    drawTriangle();
}

// Draw small bubbles on the screen
function drawBubbles() {
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 10 + 5;

        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawBigBubbles() {
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 10 + 5;

        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Render based on screen size
function renderCanvas() {
    setCanvasSize(); // Adjust size dynamically

    if (window.innerWidth <= 500) {
        drawMobileVersion(); // Mobile view
    } else {
        drawDesktopVersion(); // Desktop view
    }
}

// Adjust on resize
window.addEventListener('resize', renderCanvas);

// Initial render
renderCanvas();
