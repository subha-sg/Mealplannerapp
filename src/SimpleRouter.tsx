/**
 * Simple Hash Router for NaturaNest
 * 
 * This provides URL differentiation between V1 and V2 without server configuration
 * 
 * Usage:
 * 1. Rename current App.tsx to App-v2.tsx
 * 2. Copy your V1 code to App-v1.tsx
 * 3. Rename this file to App.tsx
 * 4. Access versions:
 *    - V1: https://yoursite.com/#v1
 *    - V2: https://yoursite.com/ (default)
 */

import { useEffect, useState } from 'react';
import AppV2 from './App-v2'; // Your current V2 code
// import AppV1 from './App-v1'; // Your V1 backup code

// For now, create a placeholder V1 component
const AppV1Placeholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        🌸 NaturaNest Version 1.0
      </h1>
      <p className="text-lg text-slate-700 mb-6">
        This is the original Pink/Purple themed version with table layout.
      </p>
      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-pink-200 mb-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          To Restore Version 1.0:
        </h2>
        <ol className="text-left space-y-3 text-slate-600">
          <li>1. Copy your original App.tsx code</li>
          <li>2. Paste it into <code className="bg-slate-100 px-2 py-1 rounded">App-v1.tsx</code></li>
          <li>3. Replace the import in <code className="bg-slate-100 px-2 py-1 rounded">SimpleRouter.tsx</code></li>
          <li>4. Uncomment: <code className="bg-slate-100 px-2 py-1 rounded">import AppV1 from './App-v1'</code></li>
          <li>5. Replace: <code className="bg-slate-100 px-2 py-1 rounded">AppV1Placeholder</code> with <code className="bg-slate-100 px-2 py-1 rounded">AppV1</code></li>
        </ol>
      </div>
      <div className="flex gap-3 justify-center">
        <a
          href="#v2"
          onClick={() => window.location.reload()}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Switch to Version 2.0 →
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Current URL: <code className="bg-slate-100 px-2 py-1 rounded">{window.location.href}</code>
      </p>
    </div>
  </div>
);

export default function SimpleRouter() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v2');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check URL hash on mount
    const checkVersion = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#v1' || hash === '#/v1') {
        setVersion('v1');
      } else {
        setVersion('v2');
      }
      setIsReady(true);
    };

    checkVersion();

    // Listen for hash changes
    const handleHashChange = () => {
      checkVersion();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show loading while determining version
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading NaturaNest...</p>
        </div>
      </div>
    );
  }

  // Render appropriate version
  return version === 'v1' ? <AppV1Placeholder /> : <AppV2 />;
}

/**
 * IMPLEMENTATION GUIDE
 * ====================
 * 
 * Step 1: Backup Your Current Code
 * ---------------------------------
 * mv App.tsx App-v2.tsx
 * 
 * Step 2: Create V1 Backup
 * ------------------------
 * # Copy your original V1 code into App-v1.tsx
 * # Or if you don't have V1 anymore, use the placeholder above
 * 
 * Step 3: Activate Router
 * -----------------------
 * mv SimpleRouter.tsx App.tsx
 * 
 * Step 4: Update Imports (if using real V1)
 * ------------------------------------------
 * In App.tsx (this file), uncomment:
 *   import AppV1 from './App-v1';
 * 
 * And change:
 *   <AppV1Placeholder /> → <AppV1 />
 * 
 * Step 5: Test
 * ------------
 * - Open https://yoursite.com/      → Should show V2
 * - Open https://yoursite.com/#v1   → Should show V1
 * - Open https://yoursite.com/#v2   → Should show V2
 * 
 * Step 6: Add Version Switcher (Optional)
 * ----------------------------------------
 * Add this component to your header:
 * 
 * <div className="flex gap-2">
 *   <a
 *     href="#v1"
 *     className={version === 'v1' ? 'active' : ''}
 *   >
 *     V1
 *   </a>
 *   <a
 *     href="#v2"
 *     className={version === 'v2' ? 'active' : ''}
 *   >
 *     V2
 *   </a>
 * </div>
 * 
 * DONE! 🎉
 */
