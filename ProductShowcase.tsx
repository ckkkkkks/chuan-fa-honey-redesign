import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart, Tag, ImageOff, ArrowLeft, Calendar, Check, Truck, ShieldCheck, Info } from 'lucide-react';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "特選野花蜂蜜",
    category: "蜂產品",
    price: 600,
    description: "採集四季野花精華，風味多層次，適合調製飲品，是家庭常備的天然甜味劑。口感溫潤，帶有淡淡的天然花香，適合搭配檸檬水或塗抹吐司。",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800",
    tags: ["熱銷NO.1", "天然"],
    manufacturingDate: "2024.01.15",
    shelfLife: "3年",
    capacity: "700g",
    features: ["100% 純天然蜂蜜", "SGS 檢驗合格", "無添加人工糖", "適合全家大小"]
  },
  {
    id: 2,
    name: "頂級新鮮蜂王乳",
    category: "蜂產品",
    price: 2200,
    description: "富含癸烯酸與多種維生素，養顏美容，調節生理機能，女王蜂的專屬珍饈。採用低溫急速冷凍技術，鎖住最高活性。",
    image: "https://images.unsplash.com/photo-1616782236352-878950c406b2?auto=format&fit=crop&q=80&w=800",
    tags: ["冷藏配送", "養生"],
    manufacturingDate: "2024.03.10",
    shelfLife: "冷凍1年",
    capacity: "500g",
    features: ["高含量癸烯酸", "全程低溫配送", "女性保養首選", "養顏美容聖品"]
  },
  {
    id: 3,
    name: "玫瑰保濕化妝水",
    category: "美容保養",
    price: 880,
    description: "結合天然蜂蜜萃取與玫瑰純露，深層補水，讓肌膚重現水嫩光澤。不含酒精，溫和不刺激，敏感肌也能安心使用。",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
    tags: ["新品推薦", "保濕"],
    manufacturingDate: "2023.12.05",
    shelfLife: "3年",
    capacity: "150ml",
    features: ["天然玫瑰純露", "蜂蜜萃取精華", "無酒精配方", "深層補水鎖水"]
  },
  {
    id: 4,
    name: "茶樹精油",
    category: "精油香氛",
    price: 550,
    description: "澳洲進口純天然茶樹精油，居家防護必備，可淨化空氣與調理肌膚。氣味清新，具有優異的淨化效果。",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    tags: ["居家防護"],
    manufacturingDate: "2023.11.20",
    shelfLife: "5年",
    capacity: "10ml",
    features: ["澳洲進口原料", "100% 純精油", "居家淨化", "舒緩調理"]
  },
   {
    id: 5,
    name: "蜂蜜堅果",
    category: "休閒食品",
    price: 450,
    description: "低溫烘焙綜合堅果（腰果、杏仁、核桃），淋上特製龍眼蜜，酥脆口感中帶有濃郁蜜香，健康零食的最佳選擇。",
    image: "https://images.unsplash.com/photo-1543132742-53538c645391?auto=format&fit=crop&q=80&w=800",
    tags: ["下午茶"],
    manufacturingDate: "2024.02.28",
    shelfLife: "6個月",
    capacity: "250g",
    features: ["低溫烘焙非油炸", "天然龍眼蜜", "無防腐劑", "豐富膳食纖維"]
  },
   {
    id: 6,
    name: "蜂膠滴液",
    category: "蜂產品",
    price: 1500,
    description: "高濃度蜂膠萃取，幫助調整體質，增強體力，換季時的最佳夥伴。採用無酒精萃取技術，口感溫和。",
    image: "https://images.unsplash.com/photo-1585834893708-e866a469a489?auto=format&fit=crop&q=80&w=800",
    tags: ["健康維持"],
    manufacturingDate: "2024.01.05",
    shelfLife: "3年",
    capacity: "30ml",
    features: ["高類黃酮含量", "調整體質", "增強防護力", "無酒精不辛辣"]
  }
];

// Helper Component for Robust Images
const RobustImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const [error, setError] = useState(false);
    
    if (error) {
        return (
            <div className={`bg-honey-50 flex flex-col items-center justify-center text-honey-300 ${className}`}>
                <ImageOff size={32} />
                <span className="text-xs mt-2 font-medium">圖片載入中</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};

const ProductShowcase: React.FC = () => {
  const [filter, setFilter] = useState("全部");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const categories = ["全部", "蜂產品", "美容保養", "精油香氛", "休閒食品"];

  const filteredProducts = filter === "全部" 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === filter);

  // --- Product Detail View ---
  if (selectedProduct) {
      return (
          <div className="bg-white py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Back Button */}
                  <button 
                    onClick={() => {
                        setSelectedProduct(null);
                        setQuantity(1);
                    }}
                    className="flex items-center text-gray-500 hover:text-honey-600 mb-8 transition-colors"
                  >
                      <ArrowLeft className="w-5 h-5 mr-2" /> 回產品列表
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      {/* Left: Image */}
                      <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm aspect-square relative">
                           <RobustImage 
                                src={selectedProduct.image} 
                                alt={selectedProduct.name} 
                                className="w-full h-full object-cover" 
                            />
                            {selectedProduct.tags.includes("冷藏配送") && (
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow flex items-center gap-1">
                                    <Truck size={14} /> 冷藏配送
                                </div>
                            )}
                      </div>

                      {/* Right: Details */}
                      <div className="flex flex-col h-full">
                          <div className="mb-2">
                              <span className="text-honey-600 font-bold tracking-wider uppercase text-sm border-b-2 border-honey-200 pb-1">
                                  {selectedProduct.category}
                              </span>
                          </div>
                          <h1 className="text-3xl md:text-4xl font-serif font-bold text-nature-900 mb-4 mt-2">
                              {selectedProduct.name}
                          </h1>
                          <p className="text-2xl font-bold text-honey-600 mb-6 font-serif">
                              NT$ {selectedProduct.price.toLocaleString()}
                          </p>
                          
                          <div className="bg-honey-50/50 rounded-xl p-6 mb-8 border border-honey-100">
                              <p className="text-gray-700 leading-relaxed mb-6">
                                  {selectedProduct.description}
                              </p>
                              
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center gap-2 text-gray-600">
                                      <Calendar className="w-4 h-4 text-honey-500" />
                                      <span className="font-bold">製造日期:</span> {selectedProduct.manufacturingDate}
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                      <ShieldCheck className="w-4 h-4 text-honey-500" />
                                      <span className="font-bold">保存期限:</span> {selectedProduct.shelfLife}
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                      <Info className="w-4 h-4 text-honey-500" />
                                      <span className="font-bold">規格:</span> {selectedProduct.capacity}
                                  </div>
                              </div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                              <h3 className="font-bold text-nature-900 mb-3">產品特色</h3>
                              <ul className="space-y-2">
                                  {selectedProduct.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                                          <Check className="w-4 h-4 text-green-500 mr-2" />
                                          {feature}
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          {/* Purchase Action */}
                          <div className="mt-auto pt-6 border-t border-gray-100">
                              <div className="flex items-center gap-4 mb-4">
                                  <div className="flex items-center border border-gray-300 rounded-full">
                                      <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 text-gray-600 hover:text-honey-600 hover:bg-gray-50 rounded-l-full"
                                      >
                                          -
                                      </button>
                                      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                                      <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 text-gray-600 hover:text-honey-600 hover:bg-gray-50 rounded-r-full"
                                      >
                                          +
                                      </button>
                                  </div>
                                  <span className="text-sm text-gray-500">庫存充足</span>
                              </div>
                              <div className="flex gap-4">
                                  <button className="flex-1 bg-nature-900 text-white py-4 rounded-full hover:bg-honey-600 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-honey-100 hover:shadow-honey-200">
                                      <ShoppingCart className="w-5 h-5" /> 立即購買
                                  </button>
                                  <button className="p-4 border border-gray-200 rounded-full hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors">
                                      <Heart className="w-6 h-6" />
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

  // --- Product Grid View ---
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-nature-900 sm:text-4xl">嚴選珍品</h2>
          <p className="mt-4 text-xl text-gray-500">從純淨蜂蜜到植萃保養，全方位呵護您的生活</p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-nature-900 text-white shadow-lg transform scale-105'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-honey-500 hover:text-honey-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 relative h-72">
                 <RobustImage 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                 />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        className="p-2.5 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-md hover:bg-gray-50 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent opening detail view
                            // Add like logic here
                        }}
                    >
                        <Heart className="w-5 h-5" />
                    </button>
                </div>
                {product.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-nature-900 text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                                <Tag size={10} className="text-honey-500" /> {tag}
                            </span>
                        ))}
                    </div>
                )}
                {/* Overlay Hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-nature-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        查看詳情
                    </span>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                    <div className="text-xs text-honey-600 font-bold tracking-wider uppercase mb-2">{product.category}</div>
                    <h3 className="text-xl font-bold text-nature-900 font-serif mb-2 group-hover:text-honey-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
                </div>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
                  <p className="text-2xl font-bold text-nature-900 font-serif">
                    <span className="text-sm font-sans font-normal text-gray-400 mr-1">NT$</span>
                    {product.price.toLocaleString()}
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-honey-100 text-honey-800 rounded-full hover:bg-honey-500 hover:text-white transition-all font-medium text-sm">
                    <ShoppingCart className="w-4 h-4" /> 購買
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;