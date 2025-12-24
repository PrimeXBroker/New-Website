// middleware/deepLinkMiddleware.ts
import { NextResponse } from "next/server";

const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const iosStoreUrl =
  "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";
const androidScheme = "myapp";
const iosScheme = "myapp";
const iosUniversalLinkDomain = "primexcapital.com"; // Your domain for Universal Links

export function deepLinkMiddleware(request) {
  console.log("=== DEEP LINK MIDDLEWARE TRIGGERED ===");
  console.log("URL Pathname:", request.nextUrl.pathname);

  const url = request.nextUrl;
  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  console.log("Is Deep Link Path?", isDeepLinkPath);

  if (isDeepLinkPath) {
    const userAgent = request.headers.get("user-agent") || "";
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iphone|ipad/i.test(userAgent);

    // Extract post ID from path
    const pathParts = url.pathname.split("/");
    const postId = pathParts[pathParts.length - 1];

    if (isAndroid || isIOS) {
      // Create HTML page that tries to open app first, then falls back to store
      const appDeepLink = `${iosScheme}://community/posts/detail/${postId}`;
      const storeUrl = isAndroid ? androidStoreUrl : iosStoreUrl;
      const iosUniversalLink = `https://${iosUniversalLinkDomain}/community/posts/detail/${postId}`;

      // For Android Intent URL
      let androidIntentUrl = "";
      if (isAndroid) {
        androidIntentUrl =
          `intent://community/posts/detail/${postId}#Intent;` +
          `scheme=${androidScheme};` +
          `package=com.primex.primexmobileapp;` +
          `action=android.intent.action.VIEW;` +
          `category=android.intent.category.BROWSABLE;` +
          `category=android.intent.category.DEFAULT;` +
          `S.browser_fallback_url=${encodeURIComponent(storeUrl)};end`;
      }

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Opening PrimeX</title>
            <script>
              let appOpened = false;
              let fallbackTimer;
              
              // Function to detect if app opened
              function detectAppOpen() {
                // For Android - window loses focus when app opens
                window.onblur = function() {
                  console.log('App opened (window blurred)');
                  appOpened = true;
                  clearTimeout(fallbackTimer);
                };
                
                // For iOS - page becomes hidden when app opens
                document.addEventListener('visibilitychange', function() {
                  if (document.hidden && !appOpened) {
                    console.log('App opened (page hidden)');
                    appOpened = true;
                    clearTimeout(fallbackTimer);
                  }
                });
                
                // Show fallback options after delay
                setTimeout(function() {
                  if (!appOpened && (document.hasFocus() || document.visibilityState === 'visible')) {
                    document.getElementById('fallback').style.display = 'block';
                    document.getElementById('loading').style.display = 'none';
                  }
                }, 1500);
              }
              
              // Try to open the app
              function tryOpenApp() {
                ${
                  isAndroid
                    ? `
                  // --- ANDROID STRATEGY ---
                  console.log('Android: Trying Intent URL');
                  window.location.href = '${androidIntentUrl}';
                  
                  // Backup with simple deep link
                  setTimeout(function() {
                    if (!appOpened) {
                      console.log('Android: Trying simple deep link as backup');
                      window.location.href = '${appDeepLink}';
                    }
                  }, 500);
                  
                `
                    : `
                  // --- iOS STRATEGY ---
                  
                  // Method 1: Try Universal Link (opens app if installed and configured)
                  console.log('iOS: Trying Universal Link');
                  window.location.href = '${iosUniversalLink}';
                  
                  // Method 2: Try custom scheme after delay
                  setTimeout(function() {
                    if (!appOpened) {
                      console.log('iOS: Trying custom scheme');
                      
                      // Hidden iframe technique for iOS
                      const iframe = document.createElement('iframe');
                      iframe.style.border = 'none';
                      iframe.style.width = '0px';
                      iframe.style.height = '0px';
                      iframe.style.display = 'none';
                      iframe.src = '${appDeepLink}';
                      document.body.appendChild(iframe);
                      
                      setTimeout(function() {
                        document.body.removeChild(iframe);
                      }, 1000);
                      
                      // Direct navigation as well
                      setTimeout(function() {
                        if (!appOpened) {
                          window.location.href = '${appDeepLink}';
                        }
                      }, 100);
                    }
                  }, 300);
                  
                  // Show iOS-specific instructions
                  setTimeout(function() {
                    if (!appOpened) {
                      document.getElementById('ios-instructions').style.display = 'block';
                    }
                  }, 1500);
                `
                }
              }
              
              // Fallback to app store
              function setupFallback() {
                fallbackTimer = setTimeout(function() {
                  if (!appOpened) {
                    console.log('Fallback: Redirecting to app store');
                    window.location.href = '${storeUrl}';
                  }
                }, 3000);
              }
              
              // Manual open app function
              function openAppManually() {
                console.log('Manual app open triggered');
                window.location.href = '${appDeepLink}';
                
                // Reset fallback timer
                clearTimeout(fallbackTimer);
                fallbackTimer = setTimeout(function() {
                  if (!appOpened) {
                    window.location.href = '${storeUrl}';
                  }
                }, 2000);
              }
              
              // Initialize when page loads
              window.onload = function() {
                detectAppOpen();
                tryOpenApp();
                setupFallback();
                
                // Add click handler for manual open button
                document.getElementById('open-app-btn').addEventListener('click', function(e) {
                  e.preventDefault();
                  openAppManually();
                });
              };
            </script>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                margin: 0;
                padding: 20px;
                background: #f5f5f7;
                color: #1d1d1f;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .container {
                max-width: 400px;
                width: 100%;
                background: white;
                padding: 30px;
                border-radius: 20px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                text-align: center;
              }
              h2 {
                margin-top: 0;
                color: #1d1d1f;
                font-weight: 600;
              }
              .loading {
                color: #666;
                margin: 20px 0;
              }
              .button {
                display: block;
                width: 100%;
                padding: 16px;
                margin: 12px 0;
                background: #007AFF;
                color: white;
                text-decoration: none;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 500;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s;
              }
              .button:hover {
                background: #0056CC;
              }
              .button.secondary {
                background: #8E8E93;
              }
              .button.secondary:hover {
                background: #6E6E73;
              }
              .hidden {
                display: none;
              }
              .instructions {
                background: #f2f2f7;
                padding: 15px;
                border-radius: 10px;
                margin: 20px 0;
                text-align: left;
                font-size: 14px;
              }
              .spinner {
                border: 3px solid #f3f3f3;
                border-top: 3px solid #007AFF;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 20px auto;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Opening PrimeX...</h2>
              
              <div id="loading">
                <div class="spinner"></div>
                <p>Attempting to open the PrimeX app...</p>
              </div>
              
              <div id="fallback" class="hidden">
                <p>We couldn't open the app automatically. Please try:</p>
                
                <button id="open-app-btn" class="button">
                  Open in PrimeX App
                </button>
                
                <a href="${storeUrl}" class="button secondary">
                  ${
                    isIOS
                      ? "Download from App Store"
                      : "Download from Play Store"
                  }
                </a>
                
                ${
                  isIOS
                    ? `
                  <div id="ios-instructions" class="instructions hidden">
                    <p><strong>iOS Users:</strong></p>
                    <ul>
                      <li>Tap "Open in PrimeX App" above</li>
                      <li>If you see a banner at the top, tap "Open"</li>
                      <li>Make sure you have the PrimeX app installed</li>
                    </ul>
                  </div>
                `
                    : ""
                }
              </div>
            </div>
          </body>
        </html>
      `;

      return new NextResponse(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }
  }

  return undefined;
}
