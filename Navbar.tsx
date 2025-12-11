import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, Hexagon, Globe, ChevronDown } from 'lucide-react';
import { Page, Language } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLabels = {
    'zh-TW': { home: '首頁', products: '嚴選蜂蜜', story: '品牌故事', ai: 'AI 蜜蜂管家' },
    'en': { home: 'Home', products: 'Shop', story: 'Our Story', ai: 'AI Sommelier' },
    'ja': { home: 'ホーム', products: '商品一覧', story: 'ブランド物語', ai: 'AIソムリエ' },
    'ko': { home: '홈', products: '제품', story: '브랜드 스토리', ai: 'AI 소믈리에' },
  };

  const navItems = [
    { label: navLabels[language].home, value: Page.HOME },
    { label: navLabels[language].products, value: Page.PRODUCTS },
    { label: navLabels[language].story, value: Page.STORY },
    { label: navLabels[language].ai, value: Page.AI_SOMMELIER },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-honey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center cursor-pointer group" onClick={() => setPage(Page.HOME)}>
            {/* Robust Logo Strategy */}
            {!logoError ? (
                <img 
                    src="https://www.cfhoney.com/Uploads/Shop/c2d820e4-ff34-411e-b5b2-90b4efa59c0b.png" 
                    alt="泉發蜂蜜" 
                    className="h-16 w-auto object-contain transition-opacity duration-300"
                    onError={() => setLogoError(true)}
                />
            ) : (
                <div className="flex items-center">
                    <div className="relative mr-3">
                        <Hexagon className="h-10 w-10 text-honey-500 fill-honey-100 group-hover:fill-honey-200 transition-colors" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-honey-600 font-serif font-bold text-lg">CF</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-serif font-bold text-nature-900 leading-none tracking-wide group-hover:text-honey-600 transition-colors">
                            泉發蜂蜜
                        </h1>
                        <span className="text-[0.65rem] text-honey-600 font-medium tracking-[0.2em] uppercase mt-1">
                            Since 1919
                        </span>
                    </div>
                </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`px-3 py-2 text-base font-medium transition-colors duration-200 font-serif ${
                  currentPage === item.value
                    ? 'text-honey-700 border-b-2 border-honey-500'
                    : 'text-nature-900 hover:text-honey-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
                <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="p-2 text-nature-800 hover:text-honey-500 transition-colors flex items-center gap-1"
                >
                    <Globe className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase">{language === 'zh-TW' ? 'TW' : language}</span>
                    <ChevronDown className="h-3 w-3" />
                </button>

                {langMenuOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setLangMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-honey-50 hover:text-honey-600 ${
                                    language === lang.code ? 'text-honey-600 font-bold bg-honey-50/50' : 'text-gray-700'
                                }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button className="p-2 text-nature-800 hover:text-honey-500 transition-colors">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2 text-nature-800 hover:text-honey-500 transition-colors relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-1 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
             {/* Mobile Lang Switcher */}
             <button 
                onClick={() => {
                    const nextLangIndex = (languages.findIndex(l => l.code === language) + 1) % languages.length;
                    setLanguage(languages[nextLangIndex].code);
                }}
                className="text-nature-800 font-bold text-sm border border-nature-200 rounded px-2 py-1"
            >
                {language === 'zh-TW' ? 'TW' : language.toUpperCase()}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-nature-800 hover:text-honey-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-honey-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 text-base font-medium border-b border-gray-50 ${
                  currentPage === item.value
                    ? 'text-honey-700 bg-honey-50/50'
                    : 'text-nature-900 hover:text-honey-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;