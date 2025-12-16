# Integrating Flowise API with Portfolio Chatbot

This guide will help you replace the current rule-based chatbot with a Flowise-powered AI chatbot.

## Prerequisites

1. ✅ Flowise deployed on Render.com (or another platform)
2. ✅ Flowise API endpoint URL
3. ✅ Your portfolio website deployed

## Step 1: Deploy Flowise on Render

### Create Flowise Web Service

1. Go to Render dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your Flowise repository (or create one)
4. Configure:

```
Name: flowise-chatbot
Branch: main
Root Directory: (empty)
Build Command: npm install --legacy-peer-deps
Start Command: npx flowise start
```

5. Add Environment Variable (if needed):
   - Key: `PORT`
   - Value: `1000` (or your Flowise port)

6. Click **"Create Web Service"**

7. Wait for deployment (2-3 minutes)

8. Get your Flowise URL: `https://your-flowise.onrender.com`

## Step 2: Get Flowise API Endpoint

### Option A: Using Flowise UI

1. Go to your Flowise URL: `https://your-flowise.onrender.com`
2. Create or open your chatbot flow
3. Click on the flow
4. Look for **"API"** or **"Endpoint"** section
5. Copy the API URL, it will look like:
   ```
   https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID
   ```

### Option B: Check Flowise Documentation

The API endpoint format is usually:
```
https://YOUR_FLOWISE_URL/api/v1/prediction/YOUR_FLOW_ID
```

## Step 3: Update Chatbot Code

### Method 1: Replace chatbot.js (Recommended)

1. **Backup current chatbot:**
   ```bash
   cp js/chatbot.js js/chatbot-backup.js
   ```

2. **Replace with Flowise version:**
   ```bash
   cp js/chatbot-flowise.js js/chatbot.js
   ```

3. **Edit `js/chatbot.js`** and update:
   ```javascript
   const FLOWISE_API_URL = 'https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID';
   ```
   Replace with your actual Flowise API endpoint.

### Method 2: Manual Integration

1. Open `js/chatbot.js`
2. Find the `getResponse()` method
3. Replace it with Flowise API call (see `chatbot-flowise.js` for reference)

## Step 4: Test the Integration

1. Open your portfolio website
2. Click the chatbot icon
3. Send a test message
4. Check browser console (F12) for any errors

## Step 5: Handle CORS (If Needed)

If you get CORS errors, you need to configure Flowise to allow your portfolio domain.

### In Flowise Settings:

1. Add your portfolio URL to allowed origins
2. Or configure CORS in Flowise deployment

### Alternative: Use Proxy

If CORS is an issue, you can create a proxy endpoint.

## Troubleshooting

### Error: "Flowise API URL not configured"
- ✅ Make sure you updated `FLOWISE_API_URL` in `chatbot.js`
- ✅ Check the URL is correct

### Error: "Failed to fetch" or CORS error
- ✅ Check Flowise is deployed and running
- ✅ Verify the API endpoint URL is correct
- ✅ Check CORS settings in Flowise

### Error: "HTTP error! status: 404"
- ✅ Check the Flowise API endpoint URL
- ✅ Make sure the flow ID is correct
- ✅ Verify Flowise is accessible

### Chatbot not responding
- ✅ Open browser console (F12) to see errors
- ✅ Check Network tab to see API calls
- ✅ Verify Flowise is running

## Response Format

Flowise may return responses in different formats. The code handles:
- `data.text`
- `data.answer`
- `data.response`
- String responses

If your Flowise returns a different format, update the `getFlowiseResponse()` method in `chatbot.js`.

## Example Flowise Flow Setup

For best results, configure your Flowise flow to:
1. Accept user questions
2. Use your portfolio knowledge base
3. Return responses as text
4. Handle errors gracefully

## Fallback to Rule-Based Chatbot

If Flowise is unavailable, you can:
1. Keep `chatbot-backup.js` as fallback
2. Add error handling to switch to backup
3. Or use hybrid approach (Flowise for complex, rules for simple)

## Files Included

- ✅ `chatbot-flowise.js` - Flowise-integrated chatbot
- ✅ `chatbot.js` - Current rule-based chatbot (backup)
- ✅ This guide

## Next Steps

1. Deploy Flowise on Render
2. Get Flowise API endpoint
3. Update `FLOWISE_API_URL` in chatbot code
4. Test and deploy!

---

**Need Help?** Check Flowise documentation: https://docs.flowiseai.com







