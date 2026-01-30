import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getStyleBySlug, getStylesByCategory, categories, styles } from '../data/styles';
import { StyleDemo } from '../components/StyleDemo';

export const StylePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const style = getStyleBySlug(slug || '');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll to top instantly on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!style) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Style Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = styles.findIndex(s => s.slug === slug);
  const prevStyle = currentIndex > 0 ? styles[currentIndex - 1] : null;
  const nextStyle = currentIndex < styles.length - 1 ? styles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2">
            <Link to="/" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            
            {/* Style Dropdown */}
            <div className="relative flex-1 flex justify-center" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-sm sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100"
              >
                <span className="truncate max-w-[200px] sm:max-w-none">{style.name}</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-72 max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-200 py-2">
                  {categories.map((category) => {
                    const categoryStyles = getStylesByCategory(category.id);
                    if (categoryStyles.length === 0) return null;
                    return (
                      <div key={category.id} className="px-2 py-1">
                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {category.name}
                        </div>
                        {categoryStyles.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => {
                              setDropdownOpen(false);
                              navigate(`/style/${s.slug}`);
                            }}
                            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                              s.slug === slug
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Prev/Next navigation */}
            <div className="flex items-center gap-3 text-sm shrink-0">
              {prevStyle ? (
                <Link to={`/style/${prevStyle.slug}`} className="text-gray-600 hover:text-blue-600">
                  ← <span className="hidden sm:inline">Prev</span>
                </Link>
              ) : <span className="w-8" />}
              {nextStyle ? (
                <Link to={`/style/${nextStyle.slug}`} className="text-gray-600 hover:text-blue-600">
                  <span className="hidden sm:inline">Next</span> →
                </Link>
              ) : <span className="w-8" />}
            </div>
          </div>
        </div>
      </nav>

      {/* Style Demo Area */}
      <StyleDemo style={style} />

      {/* Style Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Style</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{style.description}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Era / Origin</h3>
              <p className="text-gray-600 mb-6">{style.era}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {style.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Use Cases</h2>
              <ul className="space-y-2 mb-8">
                {style.bestFor.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>

              {style.doNotUse.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Avoid For</h2>
                  <ul className="space-y-2">
                    {style.doNotUse.map((avoidCase, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">{avoidCase}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Color Palette */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[...style.primaryColors, ...style.secondaryColors].map((color, i) => (
                <div key={i} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200"
                    style={{ backgroundColor: color.includes('rgba') ? color : color }}
                  />
                  <span className="text-xs font-mono text-gray-600 break-all leading-tight block">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CSS Keywords */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CSS Implementation</h2>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                {style.cssKeywords}
              </pre>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              <strong>Effects:</strong> {style.effects}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {prevStyle ? (
              <Link
                to={`/style/${prevStyle.slug}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-semibold">{prevStyle.name}</div>
                </div>
              </Link>
            ) : <div />}
            
            <Link
              to="/"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Styles
            </Link>
            
            {nextStyle ? (
              <Link
                to={`/style/${nextStyle.slug}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-semibold">{nextStyle.name}</div>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};
