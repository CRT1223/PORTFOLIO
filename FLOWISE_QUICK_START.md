# Quick Start: Flowise API Link & JSON Export

## 🚀 Quick Steps

### 1️⃣ Deploy Flowise (5 minutes)

1. Go to: https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect Flowise repository (fork from: https://github.com/FlowiseAI/Flowise)
4. Set:
   - **Build Command:** `npm install --legacy-peer-deps`
   - **Start Command:** `npx flowise start`
5. Deploy → Get URL: `https://your-flowise.onrender.com` ✅

### 2️⃣ Get API Endpoint Link (2 minutes)

1. Go to: `https://your-flowise.onrender.com`
2. Create/Open a flow
3. Click **"API"** tab or button
4. Copy the endpoint URL:
   ```
   https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID
   ```
5. **This is your Flowise API Link** ✅

### 3️⃣ Export Flow as JSON (1 minute)

1. In Flowise UI, open your flow
2. Click **"Export"** button (top right)
3. Download the JSON file
4. **Save it in your project** ✅

---

## 📋 What You'll Have

1. ✅ **Flowise App Link:** `https://your-flowise.onrender.com`
2. ✅ **Flowise API Link:** `https://your-flowise.onrender.com/api/v1/prediction/FLOW_ID`
3. ✅ **Exported JSON:** `your-flow.json`

---

## 🔗 Use in Portfolio

Update `js/chatbot-flowise.js`:

```javascript
const FLOWISE_API_URL = 'https://your-flowise.onrender.com/api/v1/prediction/YOUR_FLOW_ID';
```

---

**Detailed guide:** See `FLOWISE_SETUP_GUIDE.md` for step-by-step instructions!







