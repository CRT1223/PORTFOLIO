// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========== HIRE ME BUTTON FUNCTIONALITY ==========
document.addEventListener("DOMContentLoaded", function() {
  // Get all Hire Me buttons
  const hireMeButtons = document.querySelectorAll('.h-btn');
  
  hireMeButtons.forEach(button => {
    if (button.textContent.includes('Hire Me') || button.innerHTML.includes('Hire Me')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });
});

// ========== SMOOTH SCROLL FOR ALL NAVIGATION LINKS ==========
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#' || href === '') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
});

// ========== PORTFOLIO FILTER BUTTONS - ADD ACTIVE STATE ==========
$(document).ready(function () {
  // Add active class to first button (All)
  $(".filter-item").first().addClass("active");
  
  $(".filter-item").click(function () {
    // Remove active class from all buttons
    $(".filter-item").removeClass("active");
    // Add active class to clicked button
    $(this).addClass("active");
    
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// ========== CONTACT FORM SUBMISSION ==========
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contact .contact-form');
  
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="button"], .c-btn');
    const nameInput = contactForm.querySelector('input[placeholder="Name"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const phoneInput = contactForm.querySelector('input[placeholder="Mobile No."]');
    const messageInput = contactForm.querySelector('textarea[placeholder="Message"]');
    
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        
        // Validation
        if (!name || !email || !message) {
          showNotification('Please fill in all required fields (Name, Email, Message).', 'error');
          return;
        }
        
        if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address.', 'error');
          return;
        }
        
        // Create mailto link
        const subject = encodeURIComponent('Contact Form Submission from Portfolio');
        const body = encodeURIComponent(
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n\n` +
          `Message:\n${message}`
        );
        const mailtoLink = `mailto:nelmidapeterfox@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Thank you! Your email client should open shortly.', 'success');
        
        // Reset form after a delay
        setTimeout(() => {
          if (nameInput) nameInput.value = '';
          if (emailInput) emailInput.value = '';
          if (phoneInput) phoneInput.value = '';
          if (messageInput) messageInput.value = '';
        }, 2000);
      });
    }
  }
});

// ========== MODAL FORM SUBMISSIONS ==========
document.addEventListener("DOMContentLoaded", function() {
  const modalForms = document.querySelectorAll('.modal .contact-form');
  
  modalForms.forEach(form => {
    const submitButton = form.querySelector('button[type="button"], .c-btn');
    const nameInput = form.querySelector('input[placeholder="Name"]');
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[placeholder="Mobile No."]');
    const messageInput = form.querySelector('textarea[placeholder="Message"]');
    
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        
        if (!name || !email || !message) {
          showNotification('Please fill in all required fields (Name, Email, Message).', 'error');
          return;
        }
        
        if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address.', 'error');
          return;
        }
        
        const subject = encodeURIComponent('Blog Comment from Portfolio');
        const body = encodeURIComponent(
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n\n` +
          `Message:\n${message}`
        );
        const mailtoLink = `mailto:nelmidapeterfox@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        showNotification('Thank you for your comment!', 'success');
        
        setTimeout(() => {
          if (nameInput) nameInput.value = '';
          if (emailInput) emailInput.value = '';
          if (phoneInput) phoneInput.value = '';
          if (messageInput) messageInput.value = '';
          
          // Close modal
          const modal = form.closest('.modal');
          if (modal) {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
              bsModal.hide();
            }
          }
        }, 2000);
      });
    }
  });
});

// ========== EMAIL VALIDATION FUNCTION ==========
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'success') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#20c997' : '#dc3545'};
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 400px;
  `;
  
  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .notification-content {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
    .notification-content i {
      font-size: 1.2rem;
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// ========== NAVBAR ACTIVE LINK HIGHLIGHTING ==========
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
  
  function highlightActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Call once on load
});