import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-honey-400 mb-6 flex items-center gap-2">
                泉發蜂蜜
            </h3>
            <p className="text-gray-400 text-sm leading-7">
              百年傳承，用心堅持。<br/>
              自 1919 年起，我們致力於為您提供最純淨的蜂蜜產品，是台灣少數自產自製自銷的蜂蜜家族。
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/ChyuanFa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey-500 transition-colors text-white">
                    <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/chyuanfahoney/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey-500 transition-colors text-white">
                    <Instagram size={18} />
                </a>
                <a href="https://line.me/R/ti/p/@183oyyeh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00C300] transition-colors text-white">
                    <MessageCircle size={18} />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-honey-50">快速連結</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-honey-400 transition-colors">關於我們</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">門市資訊</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">SGS 檢驗報告</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">團購/代工專區</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 text-honey-50">購物說明</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-honey-400 transition-colors">運送政策</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">退換貨須知</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">常見問題</a></li>
              <li><a href="#" className="hover:text-honey-400 transition-colors">會員權益</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-honey-50">聯絡我們</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-honey-500 mt-0.5 flex-shrink-0" /> 
                <span>(02)-2585-0399</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-honey-500 mt-0.5 flex-shrink-0" /> 
                <a href="mailto:service@cfhoney.com" className="hover:text-white">service@cfhoney.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-honey-500 mt-0.5 flex-shrink-0" /> 
                <span>臺北市大同區民族西路218號</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-honey-500 font-bold text-xs mt-0.5 border border-honey-500 px-1 rounded">統編</span>
                <span>25108990</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 泉發蜂蜜 Chuan Fa Honey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;