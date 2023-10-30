'use strict'

const switcher = document.querySelector('.btn'); //reference

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "night_mode";
    }
    else {
        this.textContent = "light_mode";
    }

    console.log('current class name: ' + className); 
    //shows that last class name takes precendent

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// JavaScript for copying code to clipboard
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const codeContainers = document.querySelectorAll('.code-container');
        const codeElement = codeContainers[index].querySelector('.code code');
        const textToCopy = codeElement.textContent;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(function() {
                alert('Code copied to clipboard!');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        } else {
            // Fallback for browsers that don't support the Clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Code copied to clipboard!');
        }
    });
});
