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
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      
      "height": "1048",
      "defaultColumn": "overview",
      "defaultScreen": "most_capitalized",
      "market": "rsa",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en"
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
                  <NavItem href="/user">User Settings</NavItem>
                  <NavItem href="/Commodites-Market">Commodites Market</NavItem>
                  <NavItem href="/Market-Overview">Market Overview</NavItem>
                  <NavItem href="/Economic-Calendar">Economic Calendar</NavItem>
                  <NavItem href="/Market-News">Market News</NavItem>
                  <NavItem href="/charts">  Charts
                  </NavItem>  
                  <NavItem href="/Vietnam">
                    Vietnam Stock Exchange

                  </NavItem>
<NavItem href="/Cryptocurrencies">Cryptocurrencies Screener

                  </NavItem>
<NavItem href="/">
     Turkey Stock Exchange

                  </NavItem>
<NavItem href="/">
        UAE Stock Exchange

                  </NavItem>
<NavItem href="/">
        Switzerland Stock Exchange

                  </NavItem>
<NavItem href="/qatar">
        Qatar Stock Exchange
                  </NavItem>
<NavItem href="/south-africa">
  South Africa Stock Exchange
                  </NavItem>
                  <NavItem href="/argentina">Argentina Stock Exchange</NavItem>
                  <NavItem href="/australia">Australia Stock Exchange</NavItem>
                  <NavItem href="/austria">Austria Stock Exchange</NavItem>
                  <NavItem href="/brazil">Brazil Stock Exchange</NavItem>
                  <NavItem href="/canada">Canada Stock Exchange</NavItem>
                  <NavItem href="/china">China Stock Exchange</NavItem>
                  <NavItem href="/colombia">Colombia Stock Exchange</NavItem>
                  <NavItem href="/czech">Czech Stock Exchange</NavItem>
                  <NavItem href="/denmark">Denmark Stock Exchange</NavItem>
                  <NavItem href="/egypt">Egypt Stock Exchange</NavItem>
                  <NavItem href="/finland">Finland Stock Exchange</NavItem>
                  <NavItem href="/germany">Germany Stock Exchange</NavItem>
                  <NavItem href="/greece">Greece Stock Exchange</NavItem>
                  <NavItem href="/india">India Stock Exchange</NavItem>
                  <NavItem href="/indonesia">Indonesia Stock Exchange</NavItem>
                  <NavItem href="/iseland">Iseland Stock Exchange</NavItem>
                  <NavItem href="/isreal">Isreal Stock Exchange</NavItem>
                  <NavItem href="/italy">Italy Stock Exchange</NavItem>
                  <NavItem href="/kuwait">Kuwait Stock Exchange</NavItem>
                  <NavItem href="/morocco">Morocco Stock Exchange</NavItem>
                  <NavItem href="/poland">Poland Stock Exchange</NavItem>
                  <NavItem href="/switzerland">Switzerland Stock Exchange</NavItem>
                  <NavItem href="/usa">Usa Stock Exchange</NavItem>
                  <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-transparent text-sm px-3 py-2.5 text-center inline-flex items-center" type="button">
                    Market Data
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
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
              <div id="tradingview-widget" ></div>
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