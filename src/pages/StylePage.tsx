import { useParams, Link } from 'react-router-dom';
import { getStyleBySlug, styles } from '../data/styles';
import { StyleDemo } from '../components/StyleDemo';

export const StylePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const style = getStyleBySlug(slug || '');

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
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Mobile: stacked layout */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            {/* Top row on mobile: back + title */}
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium hidden sm:inline">All Styles</span>
              </Link>
              <span className="text-base sm:text-lg font-semibold text-gray-900 truncate sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">{style.name}</span>
            </div>
            {/* Bottom row on mobile: prev/next */}
            <div className="flex items-center justify-between sm:justify-end gap-4 text-sm">
              {prevStyle ? (
                <Link
                  to={`/style/${prevStyle.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors truncate max-w-[40%] sm:max-w-none"
                >
                  ← <span className="hidden sm:inline">{prevStyle.name}</span><span className="sm:hidden">Prev</span>
                </Link>
              ) : <span />}
              {nextStyle ? (
                <Link
                  to={`/style/${nextStyle.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors truncate max-w-[40%] sm:max-w-none"
                >
                  <span className="hidden sm:inline">{nextStyle.name}</span><span className="sm:hidden">Next</span> →
                </Link>
              ) : <span />}
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
                  <span className="text-xs font-mono text-gray-600">
                    {color.length > 15 ? color.slice(0, 15) + '...' : color}
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
