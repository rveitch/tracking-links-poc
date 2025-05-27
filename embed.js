/**
 * Embed script that creates and loads an iframe
 */
(function() {
  // Get the container where we'll place the iframe
  const container = document.getElementById('embed-container');

  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Create the iframe element
  const iframe = document.createElement('iframe');

  // Set iframe attributes
  iframe.src = window.location.pathname.replace(/\/[^/]*$/, '/') + 'child.html' + window.location.search; // Pass along query parameters (IMPORTANT!)
  iframe.width = '100%';
  iframe.height = '200px';
  iframe.style.border = '1px solid #ddd';
  iframe.frameBorder = '0';
  iframe.allowTransparency = 'true';

  // Append the iframe to the container
  container.appendChild(iframe);

  console.log('Iframe embedded successfully');
})();
