const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    link.classList.add('active');
  });
});

// JavaScript code to stop, clear, and restart the typing animation
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var typingAnimation = document.querySelector('.typing-animation h2');
    typingAnimation.style.animation = 'none'; // Stop the typing animation
    typingAnimation.innerHTML = ''; // Clear the text
    
    setTimeout(function() {
      typingAnimation.style.animation = 'typing 3s steps(40, end), blink-caret .75s step-end infinite'; // Restart the typing animation
      typingAnimation.innerHTML = 'Hello World'; // Set the text
    }, 100); // Wait for 0.5 seconds before restarting the animation
  }, 0); // Wait for 3 seconds before stopping the animation
});

document.addEventListener("DOMContentLoaded", function() {
  var typingAnimation = document.querySelector('.typing-animation h2');

  function restartAnimation() {
    typingAnimation.style.animation = 'none'; // Stop the typing animation
    typingAnimation.offsetHeight; // Trigger reflow to restart the animation immediately
    typingAnimation.style.animation = 'typing 3s steps(40, end), blink-caret .75s step-end infinite'; // Restart the typing animation
  }

  typingAnimation.addEventListener('animationiteration', restartAnimation); // Restart animation after it's finished
});

// JavaScript code to restart the typing animation after it's finished
document.addEventListener("DOMContentLoaded", function() {
  var typingAnimation = document.querySelector('.typing-animation h2');

  function restartAnimation() {
    typingAnimation.style.animation = 'none'; // Stop the typing animation

    setTimeout(function() {
      typingAnimation.innerHTML = ''; // Clear the text after a pause
      typingAnimation.style.borderRight = 'none'; // Remove the cursor after a pause

      setTimeout(function() {
        typingAnimation.style.borderRight = '.15em solid white'; // Add the cursor before typing
        typingAnimation.style.animation = 'typing 6s steps(40, end) forwards, blink-caret 1s step-end infinite'; // Restart the typing animation
        typingAnimation.innerHTML = 'Hello World'; // Set the text to start typing again
      }, 1000); // Wait for 1 second before restarting the animation
    }, 2000); // Wait for 2 seconds after finishing before deleting the text
  }

  typingAnimation.addEventListener('animationend', restartAnimation); // Restart animation after it's finished
});

// JavaScript code to adjust the timing of the animation and add a pause before deleting the text
document.addEventListener("DOMContentLoaded", function() {
  var typingAnimation = document.querySelector('.typing-animation h2');

  function restartAnimation() {
    typingAnimation.style.animation = 'none'; // Stop the typing animation
    typingAnimation.offsetHeight; // Trigger reflow to restart the animation immediately

    // Add a pause before deleting the text
    setTimeout(function() {
      typingAnimation.innerHTML = ''; // Clear the text
      typingAnimation.style.animation = 'deleting 1s steps(40, end) forwards, blink-caret .75s step-end infinite'; // Start deleting animation
    }, 1000); // Pause for 1 second before deleting text
  }

  typingAnimation.addEventListener('animationend', restartAnimation); // Restart animation after it's finished
});

