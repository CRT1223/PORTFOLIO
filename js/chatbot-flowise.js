// Chatbot with Flowise API Integration
// Replace chatbot.js with this file after setting up Flowise

// ========== CONFIGURATION ==========
// IMPORTANT: Replace this with your actual Flowise API endpoint
// Get this from your deployed Flowise app
const FLOWISE_API_URL = 'YOUR_FLOWISE_API_ENDPOINT_HERE';
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
        
        // Show loading indicator
        this.addLoadingIndicator();
        
        try {
            // Get response from Flowise API
            const response = await this.getFlowiseResponse(userInput);
            this.removeLoadingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.removeLoadingIndicator();
            console.error('Flowise API Error:', error);
            this.addMessage("Sorry, I'm having trouble connecting right now. Please try again later! 😅", 'bot');
        } finally {
            this.isLoading = false;
            this.sendBtn.disabled = false;
        }
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

