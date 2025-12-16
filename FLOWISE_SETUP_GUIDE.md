# Complete Guide: Getting Flowise API Link & Exporting Flow as JSON

This guide will help you:
1. ✅ Deploy Flowise on Render.com
2. ✅ Get the Flowise API endpoint link
3. ✅ Export your Flowise flow as JSON

---

## Part 1: Deploy Flowise on Render.com

### Step 1: Prepare Flowise Repository

**Option A: Use Flowise Template (Easiest)**

1. Go to: https://github.com/FlowiseAI/Flowise
2. Click **"Fork"** to create your own copy
3. Or click **"Use this template"** → **"Create a new repository"**

**Option B: Clone Flowise Locally**

```bash
git clone https://github.com/FlowiseAI/Flowise.git
cd Flowise
```

### Step 2: Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in with GitHub

2. **Create New Web Service**
   - Click **"New +"** button (top right)
   - Select **"Web Service"**

3. **Connect Repository**
   - Click **"Connect account"** if needed
   - Select your GitHub account
   - Choose your Flowise repository
   - Click **"Connect"**

4. **Configure Settings**
   ```
   Name: flowise-chatbot (or any name)
   
   Region: Singapore (or closest to you)
   
   Branch: main (or master)
   
   Root Directory: (leave empty)
   
   Runtime: Node
   
   Build Command: npm install --legacy-peer-deps
   
   Start Command: npx flowise start
   ```

5. **Add Environment Variables** (Optional but recommended)
   - Click **"Advanced"** → **"Add Environment Variable"**
   - Add these if needed:
     ```
     PORT=1000
     FLOWISE_USERNAME=admin (optional)
     FLOWISE_PASSWORD=your-password (optional)
     ```

6. **Create Web Service**
   - Click **"Create Web Service"**
   - Wait 3-5 minutes for deployment

7. **Get Your Flowise URL**
   - Once deployed, you'll get a URL like:
   - `https://flowise-chatbot.onrender.com`
   - This is your **Flowise App Link** ✅

---

## Part 2: Get Flowise API Endpoint Link

### Step 1: Access Flowise UI

1. Go to your Flowise URL: `https://your-flowise.onrender.com`
2. If you set username/password, log in
3. You'll see the Flowise dashboard

### Step 2: Create or Open a Flow

1. **Create New Flow:**
   - Click **"New Chatflow"** or **"+"** button
   - Give it a name (e.g., "Portfolio Chatbot")
   - Click **"Create"**

2. **Or Open Existing Flow:**
   - Click on an existing flow from the list

### Step 3: Build Your Flow

1. **Add Nodes:**
   - Drag and drop nodes from the left panel
   - Common setup:
     - **Chat Model** (e.g., OpenAI, Anthropic)
     - **Memory** (for conversation history)
     - **Prompt** (your system prompt)
     - **Output** (response)

2. **Configure Nodes:**
   - Click on each node to configure
   - Add your API keys if needed
   - Connect nodes by dragging from output to input

3. **Save Flow:**
   - Click **"Save"** button (top right)

### Step 4: Get API Endpoint Link

**Method 1: From Flowise UI**

1. In your flow, look for **"API"** tab or button
2. Click on it
3. You'll see the API endpoint URL
4. It will look like:
   ```
   https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID
   ```
5. **Copy this URL** - This is your **Flowise API Link** ✅

**Method 2: From Flow Settings**

1. Click on your flow name (top left)
2. Go to **"Settings"** or **"API"** section
3. Find **"API Endpoint"** or **"Prediction URL"**
4. Copy the URL

**Method 3: Manual Construction**

If you know your Flow ID:
```
https://YOUR_FLOWISE_URL/api/v1/prediction/YOUR_FLOW_ID
```

To find Flow ID:
- Check the URL when viewing your flow
- Or look in Flowise database/API

### Step 5: Test API Endpoint

You can test the endpoint using:

**Browser (GET request):**
```
https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID?question=Hello
```

**cURL (POST request):**
```bash
curl -X POST https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID \
  -H "Content-Type: application/json" \
  -d '{"question": "Hello"}'
```

**JavaScript:**
```javascript
fetch('https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question: 'Hello' })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Part 3: Export Flowise Flow as JSON

### Method 1: Export from Flowise UI (Easiest)

1. **Open Your Flow**
   - Go to Flowise dashboard
   - Click on the flow you want to export

2. **Export Flow**
   - Look for **"Export"** button (usually top right)
   - Or click flow menu (three dots) → **"Export"**
   - Or go to **"Settings"** → **"Export"**
   - Click **"Download"** or **"Export as JSON"**

3. **Save File**
   - File will download as `flow-name.json`
   - Save it in your project folder

### Method 2: Export via API

1. **Get Flow ID** (from URL or Flowise UI)

2. **Use Export API:**
   ```bash
   curl https://your-flowise.onrender.com/api/v1/flow/YOUR_FLOW_ID
   ```

3. **Save Response:**
   - Copy the JSON response
   - Save as `.json` file

### Method 3: Manual Export from Database

If you have database access:
1. Connect to Flowise database
2. Query the flows table
3. Export the flow data as JSON

### Method 4: Using Flowise CLI

```bash
# Install Flowise CLI (if available)
npm install -g flowise

# Export flow
flowise export --flow-id YOUR_FLOW_ID --output flow.json
```

---

## Step-by-Step Summary

### ✅ Getting Flowise API Link:

1. Deploy Flowise on Render → Get URL
2. Access Flowise UI → Create/Open flow
3. Find API tab → Copy endpoint URL
4. Format: `https://your-flowise.onrender.com/api/v1/prediction/FLOW_ID`

### ✅ Exporting Flow as JSON:

1. Open flow in Flowise UI
2. Click Export button
3. Download JSON file
4. Save in your project

---

## Example Flowise API Endpoint

```
https://flowise-chatbot-abc123.onrender.com/api/v1/prediction/def456-ghi789-jkl012
```

Where:
- `flowise-chatbot-abc123.onrender.com` = Your Flowise deployment URL
- `def456-ghi789-jkl012` = Your specific flow ID

---

## Using the API Link in Your Portfolio

Once you have the API endpoint:

1. Open `js/chatbot-flowise.js`
2. Find this line:
   ```javascript
   const FLOWISE_API_URL = 'YOUR_FLOWISE_API_ENDPOINT_HERE';
   ```
3. Replace with your actual endpoint:
   ```javascript
   const FLOWISE_API_URL = 'https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID';
   ```
4. Save and deploy!

---

## Troubleshooting

### Can't find API endpoint in Flowise UI?
- Check Flowise version (newer versions have it in different places)
- Look for "API", "Endpoint", or "Prediction" tabs
- Check Flowise documentation for your version

### Export button not visible?
- Make sure you're logged in
- Check if you have permission to export
- Try right-clicking on the flow name

### API endpoint not working?
- Verify Flowise is running
- Check the flow ID is correct
- Test with curl or Postman first
- Check browser console for CORS errors

### Flow ID not found?
- Check the URL when viewing your flow
- Look in Flowise database
- Use Flowise API to list all flows

---

## Quick Checklist

- [ ] Flowise deployed on Render
- [ ] Flowise URL working
- [ ] Flow created in Flowise UI
- [ ] API endpoint link copied
- [ ] Flow exported as JSON
- [ ] JSON file saved in project
- [ ] API endpoint added to chatbot code

---

## Additional Resources

- Flowise Documentation: https://docs.flowiseai.com
- Flowise GitHub: https://github.com/FlowiseAI/Flowise
- Render Documentation: https://render.com/docs

---

**Need Help?** Check the Flowise community or documentation for your specific version!







