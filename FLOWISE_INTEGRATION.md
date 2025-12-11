# Integrating Flowise with Portfolio Chatbot

## What is Flowise?

Flowise is a low-code tool for building LLM (Large Language Model) applications. It allows you to create AI-powered chatbots using visual flows.

## Current Chatbot vs Flowise

**Current Chatbot:**
- Rule-based (keyword matching)
- Fast and lightweight
- No API calls needed
- Works offline
- Limited to predefined responses

**Flowise Chatbot:**
- AI-powered (uses LLMs like OpenAI, Anthropic, etc.)
- More natural conversations
- Can handle complex questions
- Requires API keys and internet connection
- More flexible and intelligent

## Integration Steps

### Step 1: Deploy Flowise App

1. **Create a Flowise account** or deploy locally
2. **Build your chatbot flow** in Flowise UI
3. **Deploy your Flowise app** (get the API endpoint)
4. **Export your flow** as `.json` file (optional, for backup)

### Step 2: Get Your Flowise API Endpoint

After deploying, you'll get a link like:
```
https://your-flowise-app.flowise.ai/api/v1/prediction/YOUR_FLOW_ID
```

### Step 3: Update the Chatbot to Use Flowise API

Replace the current rule-based chatbot with Flowise API calls.

## Implementation

### Option 1: Replace Current Chatbot with Flowise

Update `js/chatbot.js` to call Flowise API instead of using rule-based responses.

### Option 2: Hybrid Approach

Keep rule-based for simple questions, use Flowise for complex ones.

## Configuration

You'll need:
- Flowise API endpoint URL
- API key (if required)
- CORS enabled on Flowise server

## Example Flowise Integration Code

```javascript
async function getFlowiseResponse(message) {
    const response = await fetch('YOUR_FLOWISE_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // if needed
        },
        body: JSON.stringify({
            question: message,
            // Add any other required parameters
        })
    });
    
    const data = await response.json();
    return data.text || data.answer;
}
```

## Notes

- Flowise requires internet connection
- May have API rate limits
- Costs may apply (depending on LLM provider)
- More complex setup than current chatbot

---

**Question:** Do you want to:
1. Replace the current chatbot with Flowise?
2. Keep both (hybrid approach)?
3. Or is this for a different project?

Let me know and I can help implement it!

