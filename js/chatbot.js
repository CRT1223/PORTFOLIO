// Chatbot with Flowise API Integration
// Replace chatbot.js with this file after setting up Flowise

// Chatbot Knowledge Base - Contains all information about the portfolio
const knowledgeBase = {
    // Personal Information
    personal: {
        name: "Peter Luigi M. Nelmida",
        education: "Currently studying at the University of Cebu as a fourth-year student pursuing a Bachelor of Science in Information Technology (BSIT)",
        location: "Camugao, Pinamungajan, Cebu City",
        phone: "+63 9104965584",
        email: "nelmidapeterfox@gmail.com"
    },
    
    // Services
    services: {
        webDesign: {
            title: "Web Design",
            description: "Motivated web design student with a strong foundation in creating responsive and user-friendly websites. Proficient in HTML, CSS, and basic JavaScript, with hands-on experience using tools like Figma and Adobe XD. Eager to apply design skills to real-world projects and continuously improve through learning and collaboration."
        },
        webDevelopment: {
            title: "Web Development",
            description: "Dedicated web development student with experience in building websites using HTML, CSS, and JavaScript. Enjoys creating websites that look great and work smoothly on any device. Also learning back-end development and can't wait to apply what has been learned to real projects. Always excited to pick up new skills and grow through practice and teamwork."
        },
        debugging: {
            title: "Debugging",
            description: "Detail-oriented student who enjoys debugging and fixing code issues. With experience in HTML, CSS, and JavaScript, loves solving problems and making websites work better. Eager to learn more and improve skills through real projects."
        }
    },
    
    // Skills
    skills: {
        htmlCss: {
            name: "HTML & CSS",
            level: 90,
            description: "Proficient in creating responsive and visually appealing web layouts"
        },
        java: {
            name: "Java",
            level: 75,
            description: "Good understanding of Java programming"
        },
        python: {
            name: "Python",
            level: 80,
            description: "Strong Python programming skills"
        },
        mysql: {
            name: "MySQL",
            level: 30,
            description: "Basic knowledge of MySQL database management"
        }
    },
    
    // Website Sections
    sections: {
        home: "The home section introduces Peter Luigi Nelmida, a fourth-year BSIT student at University of Cebu.",
        service: "The service section showcases three main services: Web Design, Web Development, and Debugging.",
        about: "The about section displays skills with circular progress bars showing proficiency levels in HTML & CSS (90%), Java (75%), Python (80%), and MySQL (30%).",
        portfolio: "The portfolio section displays creative work and projects with filtering options for Game, Web App, Website, and Brand categories.",
        testimonial: "The testimonials section contains client feedback and reviews.",
        blog: "The blog section features latest news and articles about web development and technology.",
        contact: "The contact section provides ways to get in touch including location, phone number, and email address."
    },
    
    // General Information
    general: {
        websitePurpose: "This is a portfolio website showcasing the work, skills, and services of Peter Luigi M. Nelmida, a web development student.",
        technologies: "The website is built using HTML, CSS, JavaScript, Bootstrap, and AOS (Animate On Scroll) library.",
        design: "The website features a modern, responsive design with a color scheme using purple (#6f34fe), orange (#fca61f), and dark blue (#3f396d)."
    }
};

// ========== CONFIGURATION ==========
// IMPORTANT: Replace this with your actual Flowise API endpoint
// Get this from your deployed Flowise app
const FLOWISE_API_URL = 'https://flowise-3h0j.onrender.com';
// Example: 'https://your-flowise-app.onrender.com/api/v1/prediction/YOUR_FLOW_ID'
// 
// To get your Flowise API endpoint:
// 1. Deploy Flowise on Render as Web Service
// 2. Go to Flowise UI
// 3. Open your chatbot flow
// 4. Copy the API endpoint URL

// ========== CHATBOT CLASS ==========
class Chatbot {
    constructor() {
        this.container = document.getElementById('chatbot-container');
        this.toggleBtn = document.getElementById('chatbot-toggle');
        this.minimizeBtn = document.getElementById('chatbot-minimize');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        this.isLoading = false;
        
        this.initializeChatbot();
        this.addWelcomeMessage();
    }
    
    initializeChatbot() {
        // Toggle chatbot
        this.toggleBtn.addEventListener('click', () => {
            this.container.classList.toggle('active');
            this.toggleBtn.classList.toggle('hidden');
        });
        
        // Minimize chatbot
        this.minimizeBtn.addEventListener('click', () => {
            this.container.classList.remove('active');
            this.toggleBtn.classList.remove('hidden');
        });
        
        // Send message on button click
        this.sendBtn.addEventListener('click', () => this.handleSendMessage());
        
        // Send message on Enter key
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.isLoading) {
                this.handleSendMessage();
            }
        });
    }
    
    addWelcomeMessage() {
        const welcomeMsg = "Hey there! 👋 I'm Peter Luigi Nelmida. Thanks for visiting my portfolio! Feel free to ask me anything about my work, skills, or experience. I'm here to chat! 😊";
        this.addMessage(welcomeMsg, 'bot');
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = text;
        
        messageDiv.appendChild(bubble);
        this.messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    addLoadingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.id = 'loading-indicator';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = '<i class="bi bi-three-dots"></i> Thinking...';
        bubble.style.fontStyle = 'italic';
        bubble.style.opacity = '0.7';
        
        messageDiv.appendChild(bubble);
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    removeLoadingIndicator() {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    async handleSendMessage() {
        const userInput = this.input.value.trim();
        if (!userInput || this.isLoading) return;
        
        // Add user message
        this.addMessage(userInput, 'user');
        this.input.value = '';
        this.isLoading = true;
        this.sendBtn.disabled = true;
        
        // Try to get a rule-based response first
        const ruleBasedResponse = this.getRuleBasedResponse(userInput);
        
        if (ruleBasedResponse) {
            // If a rule-based response is found, display it immediately
            this.addMessage(ruleBasedResponse, 'bot');
            this.isLoading = false;
            this.sendBtn.disabled = false;
        } else {
            // If no rule-based response, show loading indicator and call Flowise API
            this.addLoadingIndicator();
            try {
                const flowiseResponse = await this.getFlowiseResponse(userInput);
                this.removeLoadingIndicator();
                this.addMessage(flowiseResponse, 'bot');
            } catch (error) {
                this.removeLoadingIndicator();
                console.error('Flowise API Error:', error);
                this.addMessage("Sorry, I'm having trouble connecting to the AI right now. Please try again later! 😅", 'bot');
            } finally {
                this.isLoading = false;
                this.sendBtn.disabled = false;
            }
        }
    }

    getRuleBasedResponse(userInput) {
        const input = userInput.toLowerCase();
        
        // Personal Information
        if (input.includes('name') || input.includes('who are you') || input.includes('who is')) {
            return `Hi! I'm ${knowledgeBase.personal.name}. ${knowledgeBase.personal.education} Nice to meet you! 😊`;
        }
        
        if (input.includes('education') || input.includes('study') || input.includes('university') || input.includes('student')) {
            return `${knowledgeBase.personal.education} I'm really passionate about web development and always eager to learn new things!`;
        }
        
        if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('location') || input.includes('address')) {
            if (input.includes('email')) {
                return `Sure! You can reach me at ${knowledgeBase.personal.email}. Feel free to drop me a message anytime! 📧`;
            }
            if (input.includes('phone') || input.includes('number')) {
                return `My phone number is ${knowledgeBase.personal.phone}. You can call or text me! 📞`;
            }
            if (input.includes('location') || input.includes('address') || input.includes('where')) {
                return `I'm located in ${knowledgeBase.personal.location}. If you're nearby, let's grab a coffee! ☕`;
            }
            return `Here's how you can reach me:\n\n📍 Location: ${knowledgeBase.personal.location}\n📞 Phone: ${knowledgeBase.personal.phone}\n📧 Email: ${knowledgeBase.personal.email}\n\nFeel free to contact me anytime! I'd love to hear from you! 😊`;
        }
        
        // Services
        if (input.includes('service') || input.includes('what can') || input.includes('what do you')) {
            return `I specialize in three main areas:\n\n1. **Web Design** - ${knowledgeBase.services.webDesign.description.substring(0, 100)}...\n\n2. **Web Development** - ${knowledgeBase.services.webDevelopment.description.substring(0, 100)}...\n\n3. **Debugging** - ${knowledgeBase.services.debugging.description.substring(0, 100)}...\n\nWhich one interests you? I'd be happy to tell you more! 😊`;
        }
        
        if (input.includes('web design') || input.includes('design')) {
            return `I love web design! ${knowledgeBase.services.webDesign.description} It's really satisfying to create something both beautiful and functional. Want to know more about my design process?`;
        }
        
        if (input.includes('web development') || input.includes('development') || input.includes('developer')) {
            return `Web development is my passion! ${knowledgeBase.services.webDevelopment.description} I'm always working on new projects and learning new technologies. What kind of project are you interested in?`;
        }
        
        if (input.includes('debug') || input.includes('debugging')) {
            return `Debugging is like solving puzzles! ${knowledgeBase.services.debugging.description} I actually enjoy the challenge of finding and fixing bugs. It's very rewarding when everything works perfectly!`;
        }
        
        // Skills
        if (input.includes('skill') || input.includes('proficiency') || input.includes('expertise') || input.includes('what are you good at')) {
            return `Here are my main skills:\n\n• **${knowledgeBase.skills.htmlCss.name}**: ${knowledgeBase.skills.htmlCss.level}% - ${knowledgeBase.skills.htmlCss.description}\n\n• **${knowledgeBase.skills.java.name}**: ${knowledgeBase.skills.java.level}% - ${knowledgeBase.skills.java.description}\n\n• **${knowledgeBase.skills.python.name}**: ${knowledgeBase.skills.python.level}% - ${knowledgeBase.skills.python.description}\n\n• **${knowledgeBase.skills.mysql.name}**: ${knowledgeBase.skills.mysql.level}% - ${knowledgeBase.skills.mysql.description}\n\nI'm always learning and improving! Which technology interests you?`;
        }
        
        if (input.includes('html') || input.includes('css')) {
            return `I'm pretty good with ${knowledgeBase.skills.htmlCss.name} - I'd say around ${knowledgeBase.skills.htmlCss.level}% proficiency. ${knowledgeBase.skills.htmlCss.description} It's one of my strongest areas!`;
        }
        
        if (input.includes('java')) {
            return `I work with ${knowledgeBase.skills.java.name} quite a bit. I'm at about ${knowledgeBase.skills.java.level}% proficiency. ${knowledgeBase.skills.java.description} It's a powerful language!`;
        }
        
        if (input.includes('python')) {
            return `I really enjoy working with ${knowledgeBase.skills.python.name}! I'm at ${knowledgeBase.skills.python.level}% proficiency. ${knowledgeBase.skills.python.description} It's such a versatile language.`;
        }
        
        if (input.includes('mysql') || input.includes('database')) {
            return `I'm still learning ${knowledgeBase.skills.mysql.name}, currently at ${knowledgeBase.skills.mysql.level}% proficiency. ${knowledgeBase.skills.mysql.description} But I'm getting better every day!`;
        }
        
        // Website Sections
        if (input.includes('home') || input.includes('homepage')) {
            return `That's my introduction section! ${knowledgeBase.sections.home} Check it out to learn more about me! 😊`;
        }
        
        if (input.includes('about') || input.includes('about section')) {
            return `The about section shows my skills! ${knowledgeBase.sections.about} You can see my progress bars there - I'm pretty proud of my HTML & CSS skills! 💪`;
        }
        
        if (input.includes('portfolio') || input.includes('projects') || input.includes('work')) {
            return `My portfolio section! ${knowledgeBase.sections.portfolio} I've been working on various projects - games, web apps, and websites. Take a look! 🚀`;
        }
        
        if (input.includes('testimonial') || input.includes('review') || input.includes('feedback')) {
            return `That's where people share their feedback about my work! ${knowledgeBase.sections.testimonial} It's always great to hear what others think! 😊`;
        }
        
        if (input.includes('blog') || input.includes('article') || input.includes('news')) {
            return `I write about web development and technology there! ${knowledgeBase.sections.blog} I love sharing what I learn! 📝`;
        }
        
        // General Questions
        if (input.includes('what is this') || input.includes('what is the website') || input.includes('purpose')) {
            return `This is my portfolio website! ${knowledgeBase.general.websitePurpose} I built it to showcase my work and connect with people. What do you think? 😊`;
        }
        
        if (input.includes('technology') || input.includes('built with') || input.includes('framework') || input.includes('library')) {
            return `I built this site using ${knowledgeBase.general.technologies} I wanted to keep it clean and modern. Pretty cool, right? 😎`;
        }
        
        if (input.includes('design') && !input.includes('web design')) {
            return `I went with a modern look! ${knowledgeBase.general.design} I wanted something that stands out but still feels professional. What do you think of the colors?`;
        }
        
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return "Hey! 👋 Nice to meet you! I'm Peter. Ask me anything about my work, skills, or experience. I'm here to chat! 😊";
        }
        
        if (input.includes('help') || input.includes('what can you do')) {
            return "I can tell you about:\n\n• My background and education\n• What I do (Web Design, Development, Debugging)\n• My skills and how good I am at them\n• How to contact me\n• Different sections of this website\n• Anything else you're curious about!\n\nJust ask away! I'm pretty friendly 😊";
        }
        
        // Additional conversational responses
        if (input.includes('how are you') || input.includes("how's it going")) {
            return "I'm doing great, thanks for asking! 😊 Working on some cool projects and always learning new things. How about you?";
        }
        
        if (input.includes('thanks') || input.includes('thank you')) {
            return "You're welcome! 😊 Feel free to ask me anything else. I'm here to help!";
        }
        
        if (input.includes('hire') || input.includes('work together') || input.includes('collaborate')) {
            return "That's awesome! I'd love to work with you! 😊 You can reach me at nelmidapeterfox@gmail.com or check out my contact section. Let's create something amazing together!";
        }
        
        if (input.includes('experience') || input.includes('projects')) {
            return "I've worked on various projects including games, web apps, and websites. I'm always building something new! Check out my portfolio section to see some of my work. Want to know about a specific project?";
        }
        
        // If no rule-based response, return null to indicate Flowise should be called
        return null;
    }
    
    async getFlowiseResponse(message) {
        // Check if API URL is configured
        if (!FLOWISE_API_URL || FLOWISE_API_URL === 'YOUR_FLOWISE_API_ENDPOINT_HERE') {
            throw new Error('Flowise API URL not configured');
        }
        
        try {
            const response = await fetch(FLOWISE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: message,
                    // Add any other parameters your Flowise flow expects
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Extract response text based on Flowise response format
            // Adjust this based on your actual Flowise response structure
            if (data.text) {
                return data.text;
            } else if (data.answer) {
                return data.answer;
            } else if (data.response) {
                return data.response;
            } else if (typeof data === 'string') {
                return data;
            } else {
                // Fallback: return the whole response as string
                return JSON.stringify(data);
            }
        } catch (error) {
            console.error('Flowise API Error:', error);
            throw error;
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});


