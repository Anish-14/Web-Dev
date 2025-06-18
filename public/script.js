

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Q&A System
const qaButton = document.getElementById('qaButton');
const qaAnswer = document.getElementById('qaAnswer');

const qaData = [
    {
        question: "What was your biggest challenge when you first came to IIT Bombay?",
        answer: "Adapting to the new environment and managing my time between sports and academics. The transition from school to college life was quite challenging, especially balancing my passion for sports with academic responsibilities."
    },
    {
        question: "What's your favorite memory at IIT Bombay?",
        answer: "Learning to swim with my wingie Arvind! I was terrified of water before that, but his encouragement helped me overcome my fear. It was a perfect example of how friends here push you to grow beyond your comfort zone."
    },
    {
        question: "How do you balance sports and academics?",
        answer: "It's all about time management and prioritization. I schedule my study sessions around sports activities and use the sports grounds as a way to de-stress. The key is maintaining a routine and not letting either aspect dominate completely."
    },
    {
        question: "What's the best thing about H3 (Hostel 3)?",
        answer: "The sports facilities are incredible! Having dedicated grounds for football, cricket, volleyball right outside your hostel is a dream come true for any sports enthusiast. The hostel vibe and the community here are also amazing."
    },
    {
        question: "What advice would you give to incoming freshers?",
        answer: "Don't be afraid to try new things and step out of your comfort zone. I was scared of swimming but tried it and loved it. Also, make the most of the sports facilities and build a strong network of friends. Most importantly, find your own balance between academics and extracurricular activities."
    },
    {
        question: "How has IIT Bombay changed you?",
        answer: "I've become much more independent and confident. Living away from home taught me self-reliance, while the diverse environment helped me develop better interpersonal skills. The sports culture here also taught me the importance of discipline and teamwork."
    },
    {
        question: "What's your favorite sport to play?",
        answer: "Cricket! When the monsoon ends and the grounds are ready, cricket season is the best time of the year. The inter-hostel tournaments and friendly matches create such an amazing atmosphere on campus."
    },
    {
        question: "What are you learning currently?",
        answer: "I'm actively working on Data Structures and Algorithms, participating in coding contests, and exploring web development. I'm also focusing on my core Metallurgical Engineering subjects while keeping up with my sports routine."
    },
    {
        question: "What's the most valuable lesson you've learned here?",
        answer: "The importance of maintaining a work-life balance. IIT Bombay offers so many opportunities - academics, sports, cultural activities, technical events. Learning to prioritize and manage time effectively has been crucial for my growth."
    },
    {
        question: "How do you handle academic pressure?",
        answer: "Sports has been my biggest stress reliever. When academic pressure builds up, spending time on the sports grounds helps me clear my mind and stay focused. I also learned to plan my studies better and not leave everything for the last minute."
    }
];

qaButton.addEventListener('click', () => {
    const randomQA = qaData[Math.floor(Math.random() * qaData.length)];
    
    qaAnswer.innerHTML = `
        <div>
            <strong>Q: ${randomQA.question}</strong>
            <p style="margin-top: 10px;">A: ${randomQA.answer}</p>
        </div>
    `;
});

// Guestbook Form
const guestbookForm = document.getElementById('guestbookForm');
const messagesList = document.getElementById('messagesList');

guestbookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('visitorName').value.trim();
    const message = document.getElementById('visitorMessage').value.trim();
    
    // Basic validation
    if (name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    if (message.length < 10) {
        alert('Please enter a meaningful message (at least 10 characters)');
        return;
    }
    
    // Create new message element
    const newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.innerHTML = `<strong>${name}:</strong> "${message}"`;
    
    // Add timestamp
    const timestamp = new Date().toLocaleString();
    newMessage.innerHTML += `<br><small style="color: #666;">${timestamp}</small>`;
    
    // Add to messages list
    messagesList.appendChild(newMessage);
    
    // Clear form
    guestbookForm.reset();
    
    // Show success message
    alert('Message sent successfully!');
});

// Simple hover effects for gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Simple click effect for timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = '#e8f4fd';
        setTimeout(() => {
            item.style.backgroundColor = '#f8f9fa';
        }, 200);
    });
});

// Add some basic interactivity to learning cards
document.querySelectorAll('.learning-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderLeftColor = '#2980b9';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderLeftColor = '#3498db';
    });
});

// Simple page load effect
window.addEventListener('load', () => {
    console.log('Anish\'s IIT Bombay Journey website loaded successfully!');
    
    // Add a simple welcome message
    setTimeout(() => {
        console.log('Welcome to my journey at IIT Bombay!');
    }, 1000);
});

// Add some fun facts about Anish
const funFacts = [
    "I overcame my fear of water and learned swimming at IIT Bombay",
    "H3 is my favorite hostel because of the amazing sports facilities",
    "I love playing cricket, badminton, and basketball",
    "I’m learning DSA and I’m interested in web development",
];

// Display a random fun fact in console
setInterval(() => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    console.log('Fun fact: ' + randomFact);
}, 30000); // Every 30 seconds 

