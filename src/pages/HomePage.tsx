import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories, industries, styles, type UIStyle, type IndustryId } from '../data/styles';

// Google Analytics tracking utilities
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackEvent = (eventName: string, params: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Brand Logo Component
const Logo = ({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className={`relative ${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'}`}>
      <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1" />
      <div className="absolute inset-0 bg-[#F472B6] border-3 border-black rounded-xl flex items-center justify-center">
        <span className={`font-black text-black ${size === 'large' ? 'text-2xl' : 'text-lg'}`}>UI</span>
      </div>
    </div>
    <span className={`font-black tracking-tight ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
      <span className="text-black">Style</span>
      <span className="text-[#F472B6]">Guide</span>
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
      className="group block bg-white rounded-2xl border-3 border-black overflow-hidden shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F472B6] focus-visible:ring-offset-2"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-[#FACC15] border-b-3 border-black">
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
              className="w-5 h-5 rounded-full border-2 border-black"
              style={{ backgroundColor: color.includes('rgba') ? color : color }}
            />
          ))}
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-black text-black text-lg group-hover:text-[#F472B6] transition-colors">
          {style.name}
        </h3>
        <p className="text-sm text-black/70 mt-1 line-clamp-2 font-medium">
          {style.description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {style.keywords.slice(0, 3).map((keyword, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-[#22D3EE] text-black rounded-lg border-2 border-black font-bold"
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
        <h2 className="text-3xl font-black text-black inline-block bg-[#FACC15] px-4 py-2 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">{categoryName}</h2>
        <p className="text-black/70 mt-3 font-medium text-lg">{description}</p>
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
    <div className="bg-white border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0_#000] mb-8" role="region" aria-label="Industry filter">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-lg font-black text-black" id="industry-filter-label">🏢 Filter by Industry:</span>
        {selectedIndustry && (
          <button
            onClick={handleClear}
            aria-label="Clear industry filter"
            className="text-sm font-bold text-black bg-[#F472B6] hover:bg-[#FACC15] px-3 py-1 rounded-lg border-2 border-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
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
              className={`px-3 py-1.5 rounded-lg border-2 border-black font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 ${
                isSelected
                  ? 'bg-[#22D3EE] shadow-[2px_2px_0_#000] -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white hover:bg-[#FACC15] hover:shadow-[2px_2px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5'
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
    <div className="min-h-screen bg-[#FEF9C3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#22D3EE] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <a href="#styles" className="text-sm font-bold text-black hover:bg-[#FACC15] px-3 py-1.5 rounded-lg border-2 border-black transition-colors hidden sm:block">
              Browse Styles
            </a>
            <a
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOutboundClick('https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', 'get_skill_nav')}
              className="text-sm font-bold text-black bg-[#F472B6] hover:bg-[#FACC15] px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span className="hidden sm:inline">Get the Skill</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-24 left-10 w-20 h-20 bg-[#F472B6] border-4 border-black rounded-full rotate-12 hidden lg:block" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#84CC16] border-4 border-black rotate-45 hidden lg:block" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#22D3EE] border-4 border-black rounded-lg -rotate-12 hidden lg:block" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#84CC16] border-3 border-black rounded-full mb-8 shadow-[3px_3px_0_#000]">
              <span className="w-3 h-3 bg-black rounded-full animate-pulse" />
              <span className="text-sm font-black text-black">67 Interactive Design Styles</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl font-black text-black mb-6 tracking-tight leading-tight">
              The Ultimate
              <span className="block mt-2">
                <span className="inline-block bg-[#F472B6] px-6 py-2 border-4 border-black rounded-2xl shadow-[6px_6px_0_#000] -rotate-1">
                  UI Style Guide
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-black/80 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
              A visual showcase of the design styles available in{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-black underline decoration-4 decoration-[#22D3EE] hover:bg-[#22D3EE] transition-colors"
              >
                UI UX Pro Max
              </a>
              . Explore 67 styles with live demos, color palettes, and implementation tips.
            </p>
            
            <p className="text-sm text-black/70 mb-10 font-bold">
              Built with ♥ by{' '}
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black underline decoration-2 hover:bg-[#FACC15] transition-colors"
              >
                Farad Labs
              </a>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#styles"
                className="group px-8 py-4 bg-[#F472B6] text-black border-4 border-black rounded-2xl font-black text-lg shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore All Styles
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black border-4 border-black rounded-2xl font-black text-lg shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#FACC15] transition-all duration-200"
              >
                Get the Skill
              </a>
            </div>
          </div>
        </div>
        
        {/* Preview Strip */}
        <div className="relative max-w-6xl mx-auto px-4 pb-8">
          <div className="flex gap-4 overflow-hidden rounded-2xl p-3 bg-white shadow-[6px_6px_0_#000] border-4 border-black">
            {['glassmorphism', 'neubrutalism', 'cyberpunk-ui', 'minimalism-swiss-style', 'retro-futurism'].map((slug) => (
              <Link key={slug} to={`/style/${slug}`} className="flex-shrink-0 w-48 aspect-[4/3] rounded-xl overflow-hidden border-3 border-black hover:shadow-[3px_3px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <img src={`/previews/${slug}.png`} alt="" className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-[#22D3EE] border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-xl border-3 border-black shadow-[4px_4px_0_#000]">
              <div className="text-4xl font-black text-black">67</div>
              <div className="text-sm text-black/70 mt-1 font-bold">Design Styles</div>
            </div>
            <div className="bg-[#F472B6] p-4 rounded-xl border-3 border-black shadow-[4px_4px_0_#000]">
              <div className="text-4xl font-black text-black">10</div>
              <div className="text-sm text-black/70 mt-1 font-bold">Categories</div>
            </div>
            <div className="bg-[#FACC15] p-4 rounded-xl border-3 border-black shadow-[4px_4px_0_#000]">
              <div className="text-4xl font-black text-black">100%</div>
              <div className="text-sm text-black/70 mt-1 font-bold">Free</div>
            </div>
            <div className="bg-[#84CC16] p-4 rounded-xl border-3 border-black shadow-[4px_4px_0_#000]">
              <div className="text-4xl font-black text-black">Open</div>
              <div className="text-sm text-black/70 mt-1 font-bold">Source</div>
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
            <div className="mb-8 p-4 bg-[#84CC16] border-3 border-black rounded-xl shadow-[3px_3px_0_#000]">
              <p className="font-black text-black">
                🎯 Showing {filteredStyles.length} style{filteredStyles.length !== 1 ? 's' : ''} for{' '}
                <span className="bg-white px-2 py-0.5 rounded border-2 border-black">
                  {activeIndustry?.icon} {activeIndustry?.name}
                </span>
              </p>
            </div>
          );
        })()}

        {filteredStyles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-black text-black mb-4">No styles found 😅</p>
            <p className="text-black/70 font-medium">Try selecting a different industry filter.</p>
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
      <section id="about" className="bg-[#F472B6] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-black text-black mb-4 inline-block bg-white px-6 py-3 border-4 border-black rounded-2xl shadow-[5px_5px_0_#000]">What is UI Style Guide?</h2>
          <p className="text-lg text-black/80 leading-relaxed mb-8 mt-8 font-medium">
            UI Style Guide is a visual showcase of the design styles available in{' '}
            <a 
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-black underline decoration-4 decoration-black hover:bg-[#FACC15] transition-colors"
            >
              UI UX Pro Max
            </a>
            , an AI agent skill that helps you build beautiful interfaces. Each style includes 
            a fully interactive demo, color palettes, typography suggestions, CSS implementation tips, 
            and real-world use cases. Whether you're exploring glassmorphism, brutalism, or cyberpunk 
            aesthetics — find inspiration and practical guidance here.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Designers', 'Developers', 'AI Agents', 'Agencies'].map((tag, i) => {
              const colors = ['#FACC15', '#22D3EE', '#84CC16', '#fff'];
              return (
                <span key={tag} className="px-4 py-2 text-black rounded-xl text-sm font-black border-3 border-black shadow-[3px_3px_0_#000]" style={{ backgroundColor: colors[i] }}>
                  Built for {tag}
                </span>
              );
            })}
          </div>
          <a 
            href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-black border-4 border-black shadow-[4px_4px_0_#FACC15] hover:shadow-[6px_6px_0_#FACC15] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the UI UX Pro Max Skill
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F472B6] border-3 border-white rounded-xl flex items-center justify-center shadow-[3px_3px_0_#F472B6]">
                <span className="font-black text-black text-lg">UI</span>
              </div>
              <span className="font-black text-xl">
                Style<span className="text-[#F472B6]">Guide</span>
              </span>
            </div>
            <p className="text-white/80 text-sm text-center font-medium">
              A showcase of styles from the{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#22D3EE] hover:text-[#FACC15] transition-colors font-bold"
              >
                UI UX Pro Max
              </a>
              {' '}agent skill
            </p>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-white/70">Built with</span>
              <span className="text-[#F472B6]">♥</span>
              <span className="text-white/70">by</span>
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FACC15] transition-colors"
              >
                Farad Labs
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Farad-Labs/ui-style-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#22D3EE] text-black rounded-lg border-2 border-white font-bold text-sm hover:bg-[#FACC15] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.farad.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#84CC16] text-black rounded-lg border-2 border-white font-bold text-sm hover:bg-[#FACC15] transition-colors"
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
