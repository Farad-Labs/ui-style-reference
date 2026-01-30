import { Link } from 'react-router-dom';
import { categories, getStylesByCategory, type UIStyle } from '../data/styles';

// Brand Logo Component
const Logo = ({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className={`relative ${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 rounded-xl rotate-6" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 rounded-xl flex items-center justify-center">
        <span className={`font-black text-white ${size === 'large' ? 'text-2xl' : 'text-lg'}`}>UI</span>
      </div>
    </div>
    <span className={`font-bold tracking-tight ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
      <span className="text-gray-900">Style</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Guide</span>
    </span>
  </div>
);

const StyleCard = ({ style }: { style: UIStyle }) => {
  return (
    <Link
      to={`/style/${style.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
        <img 
          src={`/previews/${style.slug}.png`}
          alt={`${style.name} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 flex gap-1">
          {style.primaryColors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: color.includes('rgba') ? color : color }}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-fuchsia-600 transition-colors">
          {style.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {style.description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
        <p className="text-gray-500 mt-1">{description}</p>
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
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <a href="#styles" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              Browse Styles
            </a>
            <a
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span className="hidden sm:inline">Get the Skill</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-fuchsia-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-40 left-1/2 w-72 h-72 bg-orange-400 rounded-full blur-3xl opacity-15" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">49 Interactive Design Styles</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight pb-1">
              The Ultimate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 pb-2">
                UI Style Guide
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              A visual showcase of the design styles available in{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
              >
                UI UX Pro Max
              </a>
              . Explore 49 styles with live demos, color palettes, and implementation tips.
            </p>
            
            <p className="text-sm text-gray-500 mb-10">
              Built with ♥ by{' '}
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-fuchsia-600 font-medium transition-colors"
              >
                Farad Labs
              </a>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#styles"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-fuchsia-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-fuchsia-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore All Styles
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get the Skill
              </a>
            </div>
          </div>
        </div>
        
        {/* Preview Strip */}
        <div className="relative max-w-6xl mx-auto px-4 pb-8">
          <div className="flex gap-4 overflow-hidden rounded-2xl p-2 bg-white shadow-2xl shadow-gray-200/50 border border-gray-100">
            {['glassmorphism', 'neubrutalism', 'cyberpunk-ui', 'minimalism-swiss-style', 'retro-futurism'].map((slug) => (
              <Link key={slug} to={`/style/${slug}`} className="flex-shrink-0 w-48 aspect-[4/3] rounded-xl overflow-hidden hover:ring-2 hover:ring-fuchsia-500 transition-all">
                <img src={`/previews/${slug}.png`} alt="" className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">49</div>
              <div className="text-sm text-gray-500 mt-1">Design Styles</div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">8</div>
              <div className="text-sm text-gray-500 mt-1">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">100%</div>
              <div className="text-sm text-gray-500 mt-1">Free</div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Open</div>
              <div className="text-sm text-gray-500 mt-1">Source</div>
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

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is UI Style Guide?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            UI Style Guide is a visual showcase of the design styles available in{' '}
            <a 
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fuchsia-600 hover:text-fuchsia-700 font-medium underline underline-offset-2"
            >
              UI UX Pro Max
            </a>
            , an AI agent skill that helps you build beautiful interfaces. Each style includes 
            a fully interactive demo, color palettes, typography suggestions, CSS implementation tips, 
            and real-world use cases. Whether you're exploring glassmorphism, brutalism, or cyberpunk 
            aesthetics — find inspiration and practical guidance here.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Designers', 'Developers', 'AI Agents', 'Agencies'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Built for {tag}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the UI UX Pro Max Skill
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 rounded-xl flex items-center justify-center">
                <span className="font-black text-white text-sm">UI</span>
              </div>
              <span className="font-bold text-lg">
                Style<span className="text-fuchsia-400">Guide</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              A showcase of styles from the{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                UI UX Pro Max
              </a>
              {' '}agent skill
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Built with</span>
              <span className="text-red-400">♥</span>
              <span className="text-gray-500">by</span>
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-fuchsia-400 transition-colors"
              >
                Farad Labs
              </a>
            </div>
            <div className="flex gap-6 pt-2">
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.farad.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Farad Labs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
