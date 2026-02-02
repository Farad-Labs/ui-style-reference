import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { categories, industries, styles, type UIStyle, type IndustryId } from '../data/styles';

// Google Analytics tracking utilities
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackEvent = (eventName: string, params: Record<string, unknown>) => {
  // Only track on canonical production URL
  if (typeof window !== 'undefined' && window.gtag && window.location.hostname === 'www.uistyleguide.com') {
    window.gtag('event', eventName, params);
  }
};

// Brand Logo Component
const Logo = ({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className={`relative ${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'}`}>
      <div className="absolute inset-0 bg-[#39FF14] rounded-xl rotate-6 opacity-50 blur-sm" />
      <div className="absolute inset-0 bg-black border border-[#39FF14] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.5)]">
        <span className={`font-mono font-black text-[#39FF14] ${size === 'large' ? 'text-2xl' : 'text-lg'}`}>UI</span>
      </div>
    </div>
    <span className={`font-bold tracking-tight ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
      <span className="text-white">Style</span>
      <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.7)]">Guide</span>
    </span>
  </div>
);

const StyleCard = ({ style, activeFilter }: { style: UIStyle; activeFilter?: IndustryId | null }) => {
  const handleClick = () => {
    trackEvent('view_style', {
      style_name: style.name,
      style_slug: style.slug,
      style_category: style.category,
      industry_filter: activeFilter || 'none',
    });
  };

  return (
    <Link
      to={`/style/${style.slug}`}
      onClick={handleClick}
      className="group block bg-black rounded-2xl border border-gray-800 overflow-hidden hover:border-[#39FF14]/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-900">
        <img 
          src={`/previews/${style.slug}.png`}
          alt={`${style.name} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 flex gap-1">
          {style.primaryColors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 border-gray-800 shadow-md"
              style={{ backgroundColor: color.includes('rgba') ? color : color }}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white group-hover:text-[#39FF14] group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all">
          {style.name}
        </h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {style.description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {style.keywords.slice(0, 3).map((keyword, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 bg-gray-900 text-gray-400 rounded-full border border-gray-700 font-mono"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const CategorySection = ({ categoryId, categoryName, description, filteredStyles, activeFilter }: { categoryId: string; categoryName: string; description: string; filteredStyles: UIStyle[]; activeFilter?: IndustryId | null }) => {
  const categoryStyles = filteredStyles.filter(s => s.category === categoryId);
  
  if (categoryStyles.length === 0) return null;
  
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">{categoryName}</h2>
        <p className="text-gray-500 mt-1">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryStyles.map((style) => (
          <StyleCard key={style.id} style={style} activeFilter={activeFilter} />
        ))}
      </div>
    </section>
  );
};

// Industry Filter Bar Component
const IndustryFilter = ({ selectedIndustry, onSelect, resultsCount }: { selectedIndustry: IndustryId | null; onSelect: (id: IndustryId | null) => void; resultsCount: number }) => {
  const handleIndustryClick = (industryId: IndustryId) => {
    const isDeselecting = selectedIndustry === industryId;
    const newSelection = isDeselecting ? null : industryId;
    
    if (!isDeselecting) {
      const industry = industries.find(i => i.id === industryId);
      trackEvent('filter_industry', {
        industry: industryId,
        industry_name: industry?.name,
        results_count: resultsCount,
      });
    }
    
    onSelect(newSelection);
  };

  const handleClear = () => {
    trackEvent('clear_industry_filter', {
      previous_industry: selectedIndustry,
    });
    onSelect(null);
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 mb-8" role="region" aria-label="Industry filter">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-lg font-bold text-white" id="industry-filter-label">🏢 Filter by Industry:</span>
        {selectedIndustry && (
          <button
            onClick={handleClear}
            aria-label="Clear industry filter"
            className="text-sm font-medium text-black bg-[#39FF14] hover:bg-[#50FF30] px-3 py-1 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
          >
            Clear ✕
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-labelledby="industry-filter-label">
        {industries.map((industry) => {
          const isSelected = selectedIndustry === industry.id;
          return (
            <button
              key={industry.id}
              onClick={() => handleIndustryClick(industry.id)}
              aria-label={`Filter by ${industry.name}`}
              aria-pressed={isSelected}
              className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] ${
                isSelected
                  ? 'bg-[#39FF14] text-black shadow-[0_0_15px_rgba(57,255,20,0.5)]'
                  : 'bg-gray-900 text-gray-300 border border-gray-700 hover:border-[#39FF14]/50 hover:text-[#39FF14]'
              }`}
            >
              {industry.icon} {industry.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const HomePage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | null>(null);
  const scrollMilestonesRef = useRef<Set<number>>(new Set());
  
  // Filter styles based on selected industry
  const filteredStyles = useMemo(() => {
    if (!selectedIndustry) return styles;
    return styles.filter(style => style.industries?.includes(selectedIndustry));
  }, [selectedIndustry]);

  // Track scroll depth milestones (25%, 50%, 75%, 100%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      const milestones = [25, 50, 75, 100];
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !scrollMilestonesRef.current.has(milestone)) {
          scrollMilestonesRef.current.add(milestone);
          trackEvent('scroll_depth', {
            percent: milestone,
            page: 'home',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track outbound link clicks
  const handleOutboundClick = useCallback((url: string, linkName: string) => {
    trackEvent('outbound_click', {
      url,
      link_name: linkName,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <link rel="canonical" href="https://www.uistyleguide.com/" />
        <meta property="og:url" content="https://www.uistyleguide.com/" />
      </Helmet>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <a href="#styles" className="text-sm font-medium text-gray-400 hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all hidden sm:block">
              Browse Styles
            </a>
            <a
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'get_skill_nav')}
              className="text-sm font-medium text-black bg-[#39FF14] hover:bg-[#50FF30] px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span className="hidden sm:inline">Get the Skill</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14] rounded-full filter blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#39FF14] rounded-full filter blur-[100px] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-[#39FF14]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
              <span className="text-sm font-medium text-[#39FF14]">67 Interactive Design Styles</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              The Ultimate
              <span className="block mt-2 text-[#39FF14] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                UI Style Guide
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              A visual showcase of the design styles available in{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'hero_link')}
                className="text-[#39FF14] hover:underline transition-colors"
              >
                UI UX Pro Max
              </a>
              . Explore 67 styles with live demos, color palettes, and implementation tips.
            </p>
            
            <p className="text-sm text-gray-500 mb-10">
              Built with ♥ by{' '}
              <a 
                href="https://www.farad.dev?utm_source=uistyleguide&utm_medium=referral&utm_campaign=styleguide" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleOutboundClick('https://www.farad.dev', 'farad_hero')}
                className="text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                Farad Labs
              </a>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#styles"
                className="group px-8 py-4 bg-[#39FF14] text-black rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore All Styles
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'hero_cta')}
                className="px-8 py-4 bg-gray-900 text-white border border-gray-700 rounded-xl font-bold text-lg hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all duration-200"
              >
                Get the Skill
              </a>
            </div>
          </div>
        </div>
        
        {/* Preview Strip */}
        <div className="relative max-w-6xl mx-auto px-4 pb-8">
          <div className="flex gap-4 overflow-hidden rounded-2xl p-3 bg-gray-900/50 border border-gray-800">
            {['glassmorphism', 'neubrutalism', 'cyberpunk-ui', 'minimalism-swiss-style', 'retro-futurism'].map((slug) => (
              <Link key={slug} to={`/style/${slug}`} className="flex-shrink-0 w-48 aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 hover:border-[#39FF14]/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all">
                <img src={`/previews/${slug}.png`} alt="" className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">67</div>
              <div className="text-sm text-gray-500 mt-1">Design Styles</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white">10</div>
              <div className="text-sm text-gray-500 mt-1">Categories</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-500 mt-1">Free</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Open</div>
              <div className="text-sm text-gray-500 mt-1">Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="styles" className="max-w-7xl mx-auto px-4 py-16">
        {/* Industry Filter */}
        <IndustryFilter 
          selectedIndustry={selectedIndustry} 
          onSelect={setSelectedIndustry}
          resultsCount={filteredStyles.length}
        />
        
        {/* Show filter results count when filtering */}
        {selectedIndustry && (() => {
          const activeIndustry = industries.find(i => i.id === selectedIndustry);
          return (
            <div className="mb-8 p-4 bg-gray-900/50 border border-[#39FF14]/30 rounded-xl">
              <p className="font-medium text-white">
                🎯 Showing {filteredStyles.length} style{filteredStyles.length !== 1 ? 's' : ''} for{' '}
                <span className="text-[#39FF14]">
                  {activeIndustry?.icon} {activeIndustry?.name}
                </span>
              </p>
            </div>
          );
        })()}

        {filteredStyles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-bold text-white mb-4">No styles found 😅</p>
            <p className="text-gray-400">Try selecting a different industry filter.</p>
          </div>
        ) : (
          categories.map((category) => (
            <CategorySection
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              description={category.description}
              filteredStyles={filteredStyles}
              activeFilter={selectedIndustry}
            />
          ))
        )}
      </main>

      {/* About Section */}
      <section id="about" className="bg-gray-900/30 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">What is UI Style Guide?</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            UI Style Guide is a visual showcase of the design styles available in{' '}
            <a 
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'about_link')}
              className="text-[#39FF14] hover:underline transition-colors"
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
              <span key={tag} className="px-4 py-2 text-gray-300 rounded-lg text-sm font-medium border border-gray-700 bg-gray-900/50">
                Built for {tag}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'about_cta')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#39FF14] text-black rounded-xl font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the UI UX Pro Max Skill
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <Logo />
            <p className="text-gray-500 text-sm text-center">
              A showcase of styles from the{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#39FF14] hover:underline transition-colors"
              >
                UI UX Pro Max
              </a>
              {' '}agent skill
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Built with</span>
              <span className="text-[#39FF14]">♥</span>
              <span className="text-gray-600">by</span>
              <a 
                href="https://www.farad.dev?utm_source=uistyleguide&utm_medium=referral&utm_campaign=styleguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                Farad Labs
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Farad-Labs/ui-style-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 text-sm hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.farad.dev?utm_source=uistyleguide&utm_medium=referral&utm_campaign=styleguide"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 text-sm hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-colors"
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
