import React from 'react';
import { Newspaper, FileText, Video, Users, Phone, MapPin, Mail, Clock, Download, ArrowRight, ExternalLink } from 'lucide-react';

export const NewsPage: React.FC = () => (
    <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-nature-900 mb-8 flex items-center gap-3">
                <Newspaper className="text-honey-500" /> 最新消息 <span className="text-sm text-gray-400 font-sans font-normal tracking-widest mt-2">NEWS</span>
            </h2>
            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-6 hover:bg-honey-50/50 p-4 rounded-xl transition-colors cursor-pointer group">
                        <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                             <img src={`https://source.unsplash.com/random/400x300?honey,bee&sig=${i}`} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <span className="text-xs font-bold text-honey-600 bg-honey-100 px-2 py-1 rounded">2024.03.1{i}</span>
                            <h3 className="text-xl font-bold text-nature-900 mt-2 mb-2 group-hover:text-honey-600 transition-colors">
                                {i === 1 ? '泉發蜂蜜榮獲 2024 國際品質評鑑大賞金獎' : i === 2 ? '春季新品上市：玫瑰蜂蜜醋，限時優惠中' : '【門市公告】清明連假營業時間調整通知'}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-2">
                                感謝舊雨新知支持，我們將持續致力於提供最高品質的蜂產品。本月新品結合天然玫瑰花瓣與頂級龍眼蜜...
                            </p>
                            <span className="text-sm text-nature-900 font-bold mt-3 inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                閱讀更多 <ArrowRight size={14} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const DMPage: React.FC = () => (
    <div className="bg-honey-50 py-16 px-4">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-nature-900 mb-4 flex items-center justify-center gap-3">
                <FileText className="text-honey-500" /> 線上 DM <span className="text-sm text-gray-400 font-sans font-normal tracking-widest mt-2">ONLINE DM</span>
            </h2>
            <p className="text-gray-600 mb-12">隨時掌握最新優惠資訊，環保愛地球，無紙化閱覽。</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative mb-4">
                        <img src="https://images.unsplash.com/photo-1605218427360-1533965b77c5?q=80&w=800&auto=format&fit=crop" alt="2024 Spring Catalog" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-white text-nature-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                                <ExternalLink size={16} /> 線上預覽
                            </span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-nature-900">2024 春季刊 Vol.28</h3>
                    <p className="text-gray-500 text-sm mt-2">包含春季新品介紹與母親節預購優惠。</p>
                    <button className="mt-4 w-full py-2 border border-nature-900 rounded-lg text-nature-900 font-bold hover:bg-nature-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Download size={16} /> 下載 PDF
                    </button>
                </div>
                 <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative mb-4">
                        <img src="https://images.unsplash.com/photo-1606913084603-3e7702b01627?q=80&w=800&auto=format&fit=crop" alt="Skincare Catalog" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-white text-nature-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                                <ExternalLink size={16} /> 線上預覽
                            </span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-nature-900">植萃保養專刊</h3>
                    <p className="text-gray-500 text-sm mt-2">全系列蜂蜜保養品成分大解密。</p>
                    <button className="mt-4 w-full py-2 border border-nature-900 rounded-lg text-nature-900 font-bold hover:bg-nature-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Download size={16} /> 下載 PDF
                    </button>
                </div>
            </div>
         </div>
    </div>
);

export const MediaPage: React.FC = () => (
    <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-nature-900 mb-12 text-center flex items-center justify-center gap-3">
                <Video className="text-honey-500" /> 媒體報導 <span className="text-sm text-gray-400 font-sans font-normal tracking-widest mt-2">MEDIA REPORT</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group">
                        <div className="aspect-video bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                            <img src={`https://source.unsplash.com/random/600x400?tv,interview&sig=${i}`} alt="Media" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-nature-900 border-b-[8px] border-b-transparent"></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-nature-900 group-hover:text-honey-600 transition-colors">
                            {i === 1 ? '電視台專訪：百年老店的轉型之路' : i === 2 ? '雜誌推薦：2024 必買伴手禮 TOP 10' : '網紅開箱：這款蜂蜜水太好喝了吧！'}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">2024.02.2{i} • 觀看次數：1{i}K</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const GroupBuyPage: React.FC = () => (
    <div className="bg-gradient-to-br from-honey-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <span className="bg-honey-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">企業採購 / 婚禮小物 / 團購優惠</span>
            <h2 className="text-4xl font-serif font-bold text-nature-900 mb-6">團購與代工專區</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                無論是企業送禮、婚禮小物，或是品牌代工（OEM/ODM），<br/>
                泉發蜂蜜都能為您提供最專業的客製化服務與最優惠的價格。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-honey-500">
                    <Users className="w-10 h-10 text-honey-500 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">團購優惠</h3>
                    <p className="text-gray-500 text-sm">辦公室揪團、社區團購，滿額享批發價優惠。</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-nature-900">
                    <div className="w-10 h-10 bg-nature-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-serif font-bold">禮</div>
                    <h3 className="font-bold text-lg mb-2">客製化禮盒</h3>
                    <p className="text-gray-500 text-sm">專屬腰封設計、內容物搭配，傳遞獨特心意。</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-honey-500">
                    <div className="w-10 h-10 text-honey-500 mx-auto mb-4 flex items-center justify-center font-bold border-2 border-honey-500 rounded-full">OEM</div>
                    <h3 className="font-bold text-lg mb-2">專業代工</h3>
                    <p className="text-gray-500 text-sm">擁有合法工廠登記，協助您打造自有蜂蜜品牌。</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-6 text-left">立即詢價</h3>
                <form className="space-y-4 text-left">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="聯絡人姓名" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-honey-500" />
                        <input type="text" placeholder="公司/單位名稱" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-honey-500" />
                    </div>
                    <input type="tel" placeholder="聯絡電話" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-honey-500" />
                    <input type="email" placeholder="電子信箱" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-honey-500" />
                    <textarea placeholder="需求說明（例如：預計訂購數量、用途、預算...）" rows={4} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-honey-500"></textarea>
                    <button className="w-full bg-nature-900 text-white font-bold py-4 rounded-lg hover:bg-honey-600 transition-colors">送出詢價單</button>
                </form>
            </div>
        </div>
    </div>
);

export const ContactPage: React.FC = () => (
    <div className="bg-white py-16 px-4">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                 <h2 className="text-3xl font-serif font-bold text-nature-900 mb-8 flex items-center gap-3">
                    <Phone className="text-honey-500" /> 聯絡我們 <span className="text-sm text-gray-400 font-sans font-normal tracking-widest mt-2">CONTACT</span>
                </h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center flex-shrink-0 text-honey-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">總公司 / 門市地址</h4>
                            <p className="text-gray-600 mt-1">臺北市大同區民族西路218號</p>
                            <p className="text-gray-400 text-sm mt-1">No. 218, Minzu W. Rd., Datong Dist., Taipei City</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center flex-shrink-0 text-honey-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">客服專線</h4>
                            <p className="text-gray-600 mt-1 font-mono text-lg">(02) 2585-0399</p>
                            <p className="text-gray-400 text-sm mt-1">週一至週五 09:00 - 18:00</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center flex-shrink-0 text-honey-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">電子信箱</h4>
                            <p className="text-gray-600 mt-1">service@cfhoney.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-honey-100 rounded-full flex items-center justify-center flex-shrink-0 text-honey-600">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">門市營業時間</h4>
                            <p className="text-gray-600 mt-1">週一至週日 10:00 - 21:00</p>
                            <p className="text-gray-500 text-sm mt-1">全年無休（除夕、初一公休）</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-auto min-h-[400px] relative">
                 {/* Placeholder map */}
                 <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-500 font-bold flex flex-col items-center">
                        <MapPin size={48} className="mb-2 text-gray-400" />
                        Google Maps Placeholder
                    </p>
                 </div>
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.073436033162!2d121.5097879!3d25.0649479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a947116c905b%3A0x74a4411130548177!2z5rOJ55m86JyC6Jca!5e0!3m2!1szh-TW!2stw!4v1709623637651!5m2!1szh-TW!2stw" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
            </div>
         </div>
    </div>
);