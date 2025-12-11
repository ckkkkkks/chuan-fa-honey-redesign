import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
    setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative bg-honey-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-honey-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-honey-200 bg-honey-100 text-honey-800 text-xs font-medium mb-6">
                <Star className="w-3 h-3 mr-1 fill-honey-500 text-honey-500" />
                創立於 1919 年・台灣百年蜂華
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-nature-900 sm:text-5xl md:text-6xl font-serif">
                <span className="block xl:inline">自產自製自銷</span>{' '}
                <span className="block text-honey-600 xl:inline">堅持自然的承諾</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed">
                泉發蜂蜜擁有自己的蜂蜜工廠，是台灣少數自產自製自銷的蜂蜜家族。
                百年來，我們不僅販售蜂蜜，更研發多樣化的蜂產品與保養品，將自然的餽贈融入您的生活。
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-3">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => setPage(Page.PRODUCTS)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-nature-900 hover:bg-honey-600 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-honey-200"
                  >
                    瀏覽商品
                  </button>
                </div>
                <div className="mt-3 sm:mt-0">
                  <button
                    onClick={() => setPage(Page.AI_SOMMELIER)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-nature-200 text-base font-medium rounded-full text-nature-900 bg-white hover:bg-honey-50 md:py-4 md:text-lg transition-colors"
                  >
                    AI 蜜蜂管家 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className={`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-95 transition-opacity duration-500 ${imgError ? 'hidden' : 'block'}`}
          src="https://images.unsplash.com/photo-1587049352851-8d3712c8f9f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Honeycomb dripping with honey"
          onError={() => setImgError(true)}
        />
        {/* Fallback block if image fails */}
        {imgError && (
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-honey-100 to-honey-300 flex items-center justify-center">
                <Star className="w-24 h-24 text-white/50" />
            </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-honey-50 to-transparent lg:via-honey-50/20"></div>
      </div>
    </div>
  );
};

export default Hero;