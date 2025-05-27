/**
 * Embed script that creates and loads an iframe
 */
(async function () {
  // Get the container where we'll place the iframe
  const container = document.getElementById('embed-container');

  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Create the iframe element
  const iframe = document.createElement('iframe');

  // Set iframe attributes
  iframe.src = `${window.location.pathname.replace(/\/[^/]*$/, '/')}child.html${window.location.search}`; // Pass along query parameters (IMPORTANT!)
  iframe.width = '100%';
  iframe.height = '200px';
  iframe.style.border = '1px solid #ddd';
  iframe.frameBorder = '0';
  iframe.allowTransparency = 'true';

  // Append the iframe to the container
  container.appendChild(iframe);

  console.log('Iframe embedded successfully');
  await initFingerprint();
}());

async function initFingerprint() {
  const fp = await import('https://fpjscdn.net/v3/lxJhFrAA4MS28XBIC373') // eslint-disable-line import/no-unresolved
    .then((FingerprintJS) => FingerprintJS.load({ region: 'us' }));
  const fpResults = await fp.get({ extendedResult: true });

  // Get the visitor identifier result when you need it.
  console.log('[FP] visitorId:', fpResults.visitorId, 'requestId:', fpResults.requestId, 'result:', fpResults);

  const container = document.getElementById('fpjs-container');
  const pre = document.createElement('pre');
  pre.innerHTML = JSON.stringify(fpResults, null, 2);
  container.appendChild(pre);
}