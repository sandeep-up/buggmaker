


class TextTyper {
    constructor(element) {
        this.element = element;
        this.wordArray = (element.getAttribute('data-words') || "Type,something").split(",");
        this.typingSpeed = parseInt(element.getAttribute('data-speed') || 200);
        this.deleteSpeed = parseInt(element.getAttribute('data-delete-speed') || 100);
        this.loopCount = parseInt(element.getAttribute('data-loop') || 0);
        this.colorList = (element.getAttribute('data-colors') || "black").split(",");
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.currentLoop = 0;
        this.element.style.color = this.colorList[0];
        this.colorIndex = 0;
        this.runTyping();
    }

    // Typing function that handles both typing and deleting characters
    runTyping() {
        const currentWord = this.wordArray[this.currentWordIndex];
        let displayText;

        if (this.isDeleting) {
            displayText = currentWord.substring(0, this.currentCharIndex--);
        } else {
            displayText = currentWord.substring(0, this.currentCharIndex++);
        }

        this.element.innerHTML = displayText;

        // Adjust speed depending on whether typing or deleting
        let delay = this.isDeleting ? this.deleteSpeed : this.typingSpeed;

        if (!this.isDeleting && displayText === currentWord) {
            delay = 1000; // Pause after typing a word
            this.isDeleting = true;
        } else if (this.isDeleting && displayText === '') {
            this.isDeleting = false;
            this.currentCharIndex = 0;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.wordArray.length;
            this.colorIndex = (this.colorIndex + 1) % this.colorList.length;
            this.element.style.color = this.colorList[this.colorIndex];
            if (this.currentWordIndex === 0) {
                this.currentLoop++;
            }
        }

        // Check if looping should continue
        if (this.loopCount === 0 || this.currentLoop < this.loopCount) {
            setTimeout(() => this.runTyping(), delay);
        }
    }
}

class BlinkingCursor {
    constructor(element) {
        this.element = element;
        this.cursorChar = element.getAttribute('data-cursor') || '|';
        this.blinkInterval = setInterval(() => this.toggleBlink(), 500);
        this.isVisible = true;
        this.element.innerHTML = this.cursorChar;
    }

    toggleBlink() {
        this.isVisible = !this.isVisible;
        this.element.style.opacity = this.isVisible ? '1' : '0';
    }
}

function initializeTyper() {
    const typingElements = document.querySelectorAll('.typewriter');
    const cursorElements = document.querySelectorAll('.cursor');

    typingElements.forEach(el => new TextTyper(el));
    cursorElements.forEach(el => new BlinkingCursor(el));
}

// Ensure script runs after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTyper);


var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    if (scrollpos > 10) {
        header.classList.add("bg-white");

        // Toggle colors for Buggmaker links
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }

        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
    } else {
        header.classList.remove("bg-white");

        // Reset colors for Buggmaker links
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.remove("text-gray-800");
            toToggle[i].classList.add("text-white");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
    }
});



