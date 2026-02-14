import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { RefreshCw } from 'lucide-react';

export function VersionSwitcher() {
  const [currentVersion, setCurrentVersion] = useState<'v1' | 'v2'>('v2');

  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#v1' || hash === '#/v1') {
      setCurrentVersion('v1');
    } else {
      setCurrentVersion('v2');
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.toLowerCase();
      if (newHash === '#v1' || newHash === '#/v1') {
        setCurrentVersion('v1');
      } else {
        setCurrentVersion('v2');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchToV1 = () => {
    window.location.hash = '#v1';
    setTimeout(() => window.location.reload(), 100);
  };

  const switchToV2 = () => {
    window.location.hash = '#v2';
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="h-3 w-3" />
          <span className="hidden sm:inline">Version</span>
          <Badge 
            variant="secondary" 
            className={currentVersion === 'v1' ? 'bg-pink-100' : 'bg-emerald-100'}
          >
            {currentVersion === 'v1' ? '1.0' : '2.0'}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuItem onClick={switchToV2} className="flex flex-col items-start gap-1 p-3">
          <div className="flex items-center gap-2 w-full">
            <span className="font-medium">Version 2.0</span>
            {currentVersion === 'v2' && (
              <Badge className="bg-emerald-500 text-white ml-auto">Current</Badge>
            )}
          </div>
          <span className="text-xs text-slate-500">Compact teal theme • Ultra-dense list</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={switchToV1} className="flex flex-col items-start gap-1 p-3">
          <div className="flex items-center gap-2 w-full">
            <span className="font-medium">Version 1.0</span>
            {currentVersion === 'v1' && (
              <Badge className="bg-pink-500 text-white ml-auto">Current</Badge>
            )}
          </div>
          <span className="text-xs text-slate-500">Original pink theme • Table layout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
