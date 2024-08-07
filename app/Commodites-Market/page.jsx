'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/icons';
import User from '../user';
import { NavItem } from '../nav-item';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children = undefined }) => {
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        
        "height": "1048",
        "largeChartUrl": "https://freelaceproject.vercel.app/Commodites-Market", 
        "symbolsGroups": [
          {
            "name": "Metals",
            "symbols": [
              { "name": "COMEX:GC1!", "displayName": "Gold" },
              { "name": "COMEX:SI1!", "displayName": "Silver" },
              { "name": "COMEX:HG1!", "displayName": "Copper" },
              { "name": "NYMEX:PL1!", "displayName": "Platinum" },
              { "name": "NYMEX:PA1!", "displayName": "Palladium" },
              { "name": "COMEX:UX1!", "displayName": "Uranium" },
              { "name": "COMEX:TIO1!", "displayName": "Iron" },
              { "name": "COMEX:LTH1!", "displayName": "Lithium" },
              { "name": "COMEX:ALI1!", "displayName": "Aluminium" },
              { "name": "COMEX:ZNC1!", "displayName": "Zinc" },
              { "name": "COMEX:COB1!", "displayName": "Cobalt" },
              { "name": "COMEX:LED1!", "displayName": "Lead" }
            ]
          },
          {
            "name": "Energy",
            "symbols": [
              { "name": "NYMEX:CL1!", "displayName": "Crude Oil" },
              { "name": "NYMEX:NG1!", "displayName": "Natural Gas" },
              { "name": "NYMEX:RB1!", "displayName": "RBOB Gasoline" },
              { "name": "NYMEX:HO1!", "displayName": "Harbor ULSD" },
              { "name": "NYMEX:MT21!", "displayName": "Methanol" },
              { "name": "NYMEX:BB1!", "displayName": "Brent Crude Oil" },
              { "name": "NYMEX:RLS1!", "displayName": "Coal" },
              { "name": "CBOT:EH1!", "displayName": "Ethanol" },
              { "name": "NYMEX:AKS1!", "displayName": "Kerosene" },
              { "name": "NYMEX:SGB1!", "displayName": "Gasoil" },
              { "name": "NYMEX:AV01!", "displayName": "Mogas" },
              { "name": "NYMEX:CSX1!", "displayName": "WTI" },
              { "name": "NYMEX:RBF1!", "displayName": "BioDesel" },
              { "name": "NYMEX:2FW04M2024", "displayName": "Electricity" }
            ]
          },
          {
            "name": "Agriculture",
            "symbols": [
              { "name": "CBOT:ZW1!", "displayName": "Wheat" },
              { "name": "CBOT:ZS1!", "displayName": "Soybean" },
              { "name": "CBOT:ZC1!", "displayName": "Corn" },
              { "name": "CBOT:ZL1!", "displayName": "Soybean Oil" },
              { "name": "ICEUS:CC1!", "displayName": "Cocoa" },
              { "name": "ICEUS:KC1!", "displayName": "Coffee" },
              { "name": "ICEUS:SB1!", "displayName": "Sugar" },
              { "name": "CME:LE1!", "displayName": "Live Cattle" },
              { "name": "CBOT:ZM1!", "displayName": "Soybean Meal" },
              { "name": "CME:HE1!", "displayName": "Lean Hog" },
              { "name": "ICEUS:OJ1!", "displayName": "Orange Juice" },
              { "name": "CME:LBR1!", "displayName": "Lumber" },
              { "name": "CBOT:ZR1!", "displayName": "Rough Rice" },
              { "name": "CBOT:ZO1!", "displayName": "Oats" },
              { "name": "CME:DC1!", "displayName": "Milk" },
              { "name": "NYMEX:TT1!", "displayName": "Cotton" },
              { "name": "CBOT:UFV1!", "displayName": "Urea" },
              { "name": "CME:CPO1!", "displayName": "Palm Oil" },
              { "name": "CME:PRK1!", "displayName": "Pork" }
            ]
          },
          {
            "name": "Carbone",
            "symbols": [
              { "name": "ICEEUR:CO21!", "displayName": "Global Index" },
              { "name": "ICEEUR:OVD1!", "displayName": "20-24" },
              { "name": "ICEEUR:OVE1!", "displayName": "21-25" },
              { "name": "ICEEUR:OVF1!", "displayName": "22-26" },
              { "name": "ICEEUR:OVG1!", "displayName": "23-27" },
              { "name": "ICEEUR:OVH1!", "displayName": "24-28" },
              { "name": "ICEEUR:OVI1!", "displayName": "25-29" },
              { "name": "ICEEUR:OVJ1!", "displayName": "26-30" },
              { "name": "NYMEX:GEO1!", "displayName": "CBL Global Emissions" }
            ]
          },
          {
            "name": "Freight",
            "symbols": [
              { "name": "NYMEX:CS61!", "displayName": "Container C/EA to M" },
              { "name": "NYMEX:CS41!", "displayName": "Container C/EA to NE" },
              { "name": "NYMEX:CS51!", "displayName": "Container NE to C/EA" },
              { "name": "NYMEX:CS11!", "displayName": "Container C/EA to US WC" },
              { "name": "NYMEX:CS31!", "displayName": "Container C/EA to US EC" },
              { "name": "NYMEX:CS21!", "displayName": "Container US WC to C/EA" },
              { "name": "NYMEX:TM1!", "displayName": "Route TC2" },
              { "name": "NYMEX:TC61!", "displayName": "Route TC6" },
              { "name": "NYMEX:TH1!", "displayName": "Route TC5" },
              { "name": "NYMEX:TK1!", "displayName": "Route TD7" },
              { "name": "NYMEX:TC11!", "displayName": "Route SK to S" },
              { "name": "NYMEX:BG31!", "displayName": "LNG US Gulf to Japan" },
              { "name": "NYMEX:TF21!", "displayName": "Route ME to UK" }
            ]
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#131722"
      });
      widgetContainer.appendChild(script);

      return () => {
        if (widgetContainer.contains(script)) {
          widgetContainer.removeChild(script);
        }
      };
    }
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
                   <NavItem href="/Commodites-Market">
              Commodites Market
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
                      Charts
                  </NavItem>  
                  <NavItem href="/Vietnam">
                    Vietnam Stock Exchange

                  </NavItem>
<NavItem href="/Cryptocurrencies">Cryptocurrencies Screener

                  </NavItem>
<NavItem href="/turkey">
     Turkey Stock Exchange

                  </NavItem>
<NavItem href="/uae">
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
<NavItem href="/">
  South Africa Stock Exchange
                  
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
              <div id="tradingview-widget" className="tradingview-widget-container h-full w-full">
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
                 
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
