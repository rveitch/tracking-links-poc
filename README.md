# Tracking Links Session ID Embed Script Proof of Concept

This project demonstrates an embedding script that creates an iframe and passes a session ID via query parameter from the parent page URL to the child page.

## Files

- `index.html` - The parent page that includes the embed script
- `embed.js` - The script that creates and loads the iframe
- `child.html` - The page that will be loaded in the iframe
- `index.js` - A simple Node.js server to serve the files

## How to Run

1. Make sure you have Node.js installed
2. Run the server:

```bash
node index.js
```

3. Open your browser and navigate to: http://localhost:3000/?tgb_id=abc123

## How It Works

1. The parent page includes the embed script
2. The embed script creates an iframe and sets its source to 'child.html' plus any query parameters
3. The child page loads and extracts the 'tgb_id' parameter from the URL
4. The child page displays the session ID to demonstrate successful parameter passing

## Testing

You can test different session IDs by changing the URL parameter:

- http://localhost:3000/?tgb_id=test123
- http://localhost:3000/?tgb_id=abc123

If no tracking ID is provided, the child page will display an error message.
