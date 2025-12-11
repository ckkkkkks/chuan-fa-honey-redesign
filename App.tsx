import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import HoneySommelier from './components/HoneySommelier';
import Footer from './components/Footer';
import { Page, Language } from './types';
import { ImageOff } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [language, setLanguage] = useState<Language>('zh-TW');
  const [storyImgError, setStoryImgError] = useState(false);
  const [storyDetailImgError, setStoryDetailImgError] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-honey-600 font-bold tracking-widest text-sm uppercase">Selection</span>
                    <h2 className="text-3xl font-serif font-bold text-nature-900 mt-2 mb-6">熱銷推薦</h2>
                    <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                        深受顧客喜愛的經典之選，包含純淨蜂蜜、頂級蜂王乳以及植萃保養品。
                    </p>
                </div>
                <ProductShowcase />
            </div>
            {/* Story Teaser */}
            <div className="bg-honey-50 py-20 relative overflow-hidden">
                 {/* Replaced broken external texture with CSS pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-honey-200 rounded-lg"></div>
                            {!storyImgError ? (
                                <img 
                                    src="https://images.unsplash.com/photo-1621686737089-a2123f1390d0?q=80&w=1200&auto=format&fit=crop" 
                                    alt="泉發蜂蜜 養蜂職人" 
                                    className="rounded-lg shadow-2xl relative z-10 w-full object-cover h-[400px]"
                                    onError={() => setStoryImgError(true)}
                                />
                            ) : (
                                <div className="rounded-lg shadow-2xl relative z-10 w-full h-[400px] bg-honey-100 flex items-center justify-center">
                                    <ImageOff size={48} className="text-honey-400" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-serif font-bold text-nature-900 mb-6">百年蜂華，世代傳承</h2>
                        <div className="text-gray-600 leading-8 mb-8 space-y-4">
                            <p>
                                泉發蜂蜜創立於 1919 年，擁有自己的蜂蜜工廠，生產製造蜂蜜，進而蜂蜜零售、蜂蜜批發，內外銷各式蜂蜜產品，是台灣少數<strong>自產自製自銷</strong>的蜂蜜家族。
                            </p>
                            <p>
                                從第一代養蜂人開始，我們就立下了對品質的堅持。歷經百年歲月，這份對自然的敬畏與對健康的承諾，依然流淌在每一滴金黃色的蜂蜜中。
                            </p>
                        </div>
                        <button onClick={() => setCurrentPage(Page.STORY)} className="px-8 py-3 bg-nature-900 text-white rounded-full hover:bg-honey-600 transition-colors font-medium">
                            閱讀我們的故事
                        </button>
                    </div>
                </div>
            </div>
          </>
        );
      case Page.PRODUCTS:
        return <ProductShowcase />;
      case Page.AI_SOMMELIER:
        return <HoneySommelier />;
      case Page.STORY:
        return (
            <div className="bg-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-honey-600 font-bold tracking-widest text-sm uppercase">Since 1919</span>
                     <h1 className="text-4xl font-serif font-bold text-nature-900 mt-2 mb-12">品牌故事</h1>
                     
                     <div className="prose prose-lg mx-auto text-gray-600 leading-8 text-left">
                        {!storyDetailImgError ? (
                            <img 
                                src="https://images.unsplash.com/photo-1617260172044-64041da6928e?q=80&w=1200&auto=format&fit=crop" 
                                alt="泉發蜂蜜 歷史傳承"
                                className="w-full h-96 object-cover rounded-xl shadow-lg mb-10"
                                onError={() => setStoryDetailImgError(true)}
                            />
                        ) : (
                             <div className="w-full h-96 bg-honey-50 rounded-xl shadow-lg mb-10 flex items-center justify-center">
                                <ImageOff size={48} className="text-honey-300" />
                            </div>
                        )}
                        <p className="mb-6">
                            <strong>泉發蜂蜜</strong>，創立於1919年，擁有自己的<strong>蜂蜜工廠</strong>，生產製造蜂蜜，進而<strong>蜂蜜零售</strong>、<strong>蜂蜜批發</strong>，內外銷各式蜂蜜產品，是台灣少數自產自製自銷的蜂蜜家族。
                        </p>
                        <p className="mb-6">
                            我們依循花期，逐花草而居。春天，我們在荔枝與龍眼樹下，採集一年中最濃郁的芬芳；四季更迭，我們跟隨野花的蹤跡，採集百花精華。每一瓶泉發蜂蜜，都封存了台灣四季的風土與陽光。
                        </p>
                        <p>
                            除了傳統的蜂蜜產品，我們更致力於創新。結合現代科技與百年智慧，開發出蜂王乳保養品、蜂蜜醋、花草茶等多元產品，讓蜂蜜的自然力量，以更多樣的形式呵護您的健康與美麗。
                        </p>
                     </div>

                     <div className="mt-16 pt-10 border-t border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-nature-900 mb-6">我們的承諾</h3>
                        {/* Improved readability for "Our Promise" cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-honey-50/80 border border-honey-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-serif font-bold text-xl mb-3 text-honey-800">100% 純天然</h4>
                                <p className="text-nature-900 font-medium leading-relaxed">堅持無添加，保留蜂蜜最原始的營養與風味，每一滴都來自大自然的餽贈。</p>
                            </div>
                            <div className="p-8 bg-honey-50/80 border border-honey-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-serif font-bold text-xl mb-3 text-honey-800">嚴格檢驗</h4>
                                <p className="text-nature-900 font-medium leading-relaxed">通過 SGS 檢驗，符合國家標準，無農藥、無抗生素殘留，讓您吃得安心。</p>
                            </div>
                            <div className="p-8 bg-honey-50/80 border border-honey-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-serif font-bold text-xl mb-3 text-honey-800">自產自銷</h4>
                                <p className="text-nature-900 font-medium leading-relaxed">從產地到餐桌，全程親自把關，去除中間商剝削，提供最實惠的價格。</p>
                            </div>
                        </div>
                     </div>

                     <button 
                        onClick={() => setCurrentPage(Page.PRODUCTS)}
                        className="mt-12 px-10 py-4 bg-honey-500 text-white rounded-full hover:bg-honey-600 transition-colors shadow-lg hover:shadow-honey-200 font-bold"
                     >
                        前往商店選購
                     </button>
                </div>
            </div>
        );
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-honey-50 font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;