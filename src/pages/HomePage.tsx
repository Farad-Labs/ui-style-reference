import { Link } from 'react-router-dom';
import { categories, getStylesByCategory, type UIStyle } from '../data/styles';

const StyleCard = ({ style }: { style: UIStyle }) => {
  return (
    <Link
      to={`/style/${style.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
        <img 
          src={`/previews/${style.slug}.png`}
          alt={`${style.name} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 flex gap-1">
          {style.primaryColors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
              style={{ backgroundColor: color.includes('rgba') ? color : color }}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {style.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {style.description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {style.keywords.slice(0, 3).map((keyword, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const CategorySection = ({ categoryId, categoryName, description }: { categoryId: string; categoryName: string; description: string }) => {
  const categoryStyles = getStylesByCategory(categoryId);
  
  if (categoryStyles.length === 0) return null;
  
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryStyles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJsLTIgMnYyaDJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              UI/UX Design Styles
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              A visual reference guide to 49 distinctive UI/UX design styles. 
              Explore each style with live demonstrations, use cases, and implementation details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#styles"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Styles
              </a>
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">49</div>
              <div className="text-sm text-gray-600">UI Styles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">200+</div>
              <div className="text-sm text-gray-600">Use Cases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Interactive</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="styles" className="max-w-7xl mx-auto px-4 py-16">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            description={category.description}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">UI/UX Design Style Reference</h2>
            <p className="text-gray-400 mb-6">
              Built with React, Vite, and Tailwind CSS. Data sourced from UI UX Pro Max.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/uipro-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                npm
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
