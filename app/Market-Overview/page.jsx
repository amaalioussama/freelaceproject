'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import User from '../user';
import { NavItem } from '../nav-item';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children, searchParams }) => {

  const search = searchParams?.q ?? '';
  const offset = searchParams?.offset ?? 0;
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "1069",
      "height": "800",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(209, 212, 220, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Futures",
          "symbols": [
            { "s": "CME_MINI:ES1!", "d": "S&P 500" },
            { "s": "CME:6E1!", "d": "Euro" },
            { "s": "COMEX:GC1!", "d": "Gold" },
            { "s": "NYMEX:CL1!", "d": "WTI Crude Oil" },
            { "s": "NYMEX:NG1!", "d": "Gas" },
            { "s": "CBOT:ZC1!", "d": "Corn" }
          ],
          "originalTitle": "Futures"
        }
      ]
    });

    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer && widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <html lang="en" className="h-full" style={{ backgroundColor: "#1A1E26" }}>
      <body style={{ backgroundColor: "#1A1E26" }}>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r lg:block" style={{ backgroundColor: "#1A1E26", borderColor: "#FFFF" }}>
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5" style={{ borderColor: "#FFFF" }}>
                <Link className="flex items-center gap-2 font-semibold text-white" href="/">
                  <Logo />
                  <span>Market View</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium text-white">
                  <NavItem href="/user">
                    User Settings
                  </NavItem>
                  <NavItem href="/Market-Overview">
                    Market Overview
                  </NavItem>
                  <NavItem href="/Economic-Calendar">
                    Economic Calendar
                  </NavItem>
                  <NavItem href="/Market-News">
                    Market News
                  </NavItem>
                  <NavItem href="/charts">
                    Sharts
                  </NavItem>
                  <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="text-white bg-transparent text-sm px-3 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Market Data
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {showDropdown && (
          <div id="dropdown" className="z-10 bg-transparent rounded-lg">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/Forex" className="text-slate-300 block px-4 py-2 hover:text-white">Forex</Link>
              </li>
              <li>
                <Link href="/Forex-emerging-currencies" className="text-slate-300 block px-4 py-2 hover:text-white">Forex (emerging currencies)</Link>
              </li>
            </ul>
          </div>
        )}
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6 justify-between lg:justify-end" style={{ borderColor: "white", borderBottomWidth: "0.5px" }}>
              <Link className="flex items-center gap-2 font-semibold text-white lg:hidden" href="/">
                <Logo />
                <span>ACME</span>
              </Link>
              <User />
            </header>
            <main className="">
              <div id="tradingview-widget" className="h-full w-full">
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
                  <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    
                  </a>
                </div>
              </div>
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
