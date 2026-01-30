import { type UIStyle } from '../data/styles';
import { MobileNav } from './MobileNav';

interface StyleDemoProps {
  style: UIStyle;
}

export const StyleDemo = ({ style }: StyleDemoProps) => {
  const DemoComponent = styleDemos[style.slug] || DefaultDemo;
  return <DemoComponent style={style} />;
};

const DefaultDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{style.name}</h1>
      <p className="text-gray-600">Demo coming soon</p>
    </div>
  </div>
);

// ============================================================================
// 1. MINIMALISM & SWISS STYLE - "Clarity Analytics" SaaS Dashboard
// ============================================================================
const MinimalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Clarity Analytics</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-black mb-8 leading-tight">
            Data that speaks<br />for itself.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Enterprise analytics built on the principle that the best interface is one you don't notice. 
            Less noise. More insight.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-end">
          <div className="w-full h-px bg-black" />
        </div>
      </div>
      <div className="flex gap-4 mt-12">
        <button className="px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-4 border border-black text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
          Watch Demo
        </button>
      </div>
    </header>

    {/* Stats */}
    <section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-8">
          {[
            { num: '10M+', label: 'Data points processed daily' },
            { num: '99.9%', label: 'Uptime guarantee' },
            { num: '<50ms', label: 'Query response time' }
          ].map((stat, i) => (
            <div key={i} className="border-t-2 border-black pt-6">
              <span className="text-sm text-gray-500 uppercase tracking-widest">0{i + 1}</span>
              <h3 className="text-4xl font-light mt-2">{stat.num}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-4xl font-light">Built for clarity</h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-600 text-lg">Every pixel serves a purpose. No gradients, no shadows, no distractions—just your data, presented with precision.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Real-time sync', 'SQL interface', 'Team collaboration', 'API access', 'Custom dashboards', 'Export options', 'Role management', 'Audit logs'].map((feature, i) => (
            <div key={i} className="border-t border-gray-300 pt-4">
              <span className="text-3xl font-light text-gray-300">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-medium mt-4">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-5xl font-light mb-8">Ready to see clearly?</h2>
        <button className="px-12 py-5 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Get Started — Free
        </button>
      </div>
    </section>
  </div>
);

// ============================================================================
// 2. NEUMORPHISM - "Serenity" Wellness & Meditation App
// ============================================================================
const NeumorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#E8E8E8' }}>
    {/* Hero */}
    <header className="max-w-4xl mx-auto px-8 py-16 text-center">
      <div className="inline-block p-6 rounded-full mb-8" style={{
        background: '#E8E8E8',
        boxShadow: '-10px -10px 30px #ffffff, 10px 10px 30px #d1d1d1'
      }}>
        <span className="text-4xl">🧘</span>
      </div>
      <h1 className="text-5xl font-semibold text-gray-700 mb-4">Serenity</h1>
      <p className="text-xl text-gray-500 mb-12">Your daily companion for mindfulness and inner peace</p>
    </header>

    {/* Main Cards */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: '🌅', title: 'Morning Calm', time: '10 min', desc: 'Start your day with intention' },
          { icon: '🌊', title: 'Deep Focus', time: '25 min', desc: 'Enhance concentration' },
          { icon: '🌙', title: 'Sleep Stories', time: '45 min', desc: 'Drift into peaceful rest' }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl text-center" style={{
            background: '#E8E8E8',
            boxShadow: '-10px -10px 30px #ffffff, 10px 10px 30px #d1d1d1'
          }}>
            <span className="text-5xl mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.time}</p>
            <p className="text-gray-600 mt-4 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Player Section */}
    <section className="max-w-2xl mx-auto px-8 py-16">
      <div className="p-8 rounded-3xl" style={{
        background: '#E8E8E8',
        boxShadow: '-15px -15px 35px #ffffff, 15px 15px 35px #d1d1d1'
      }}>
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Now Playing</p>
          <h3 className="text-2xl font-semibold text-gray-700 mt-2">Ocean Waves</h3>
          <p className="text-gray-500">Ambient Sounds Collection</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 rounded-full" style={{
            background: '#E8E8E8',
            boxShadow: 'inset -2px -2px 5px #ffffff, inset 2px 2px 5px #d1d1d1'
          }}>
            <div className="h-full w-1/3 rounded-full" style={{
              background: 'linear-gradient(145deg, #7B68EE, #9370DB)',
              boxShadow: '0 0 10px rgba(123, 104, 238, 0.5)'
            }} />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>3:24</span>
            <span>10:00</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6">
          {['⏮️', '▶️', '⏭️'].map((icon, i) => (
            <button key={i} className={`rounded-full flex items-center justify-center ${i === 1 ? 'w-20 h-20' : 'w-14 h-14'}`}
              style={{
                background: '#E8E8E8',
                boxShadow: i === 1 
                  ? '-8px -8px 20px #ffffff, 8px 8px 20px #d1d1d1'
                  : '-5px -5px 15px #ffffff, 5px 5px 15px #d1d1d1'
              }}>
              <span className={i === 1 ? 'text-3xl' : 'text-xl'}>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-4xl mx-auto px-8 py-16">
      <div className="grid grid-cols-3 gap-8">
        {[
          { value: '47', label: 'Minutes Today' },
          { value: '12', label: 'Day Streak' },
          { value: '89%', label: 'Focus Score' }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl text-center" style={{
            background: '#E8E8E8',
            boxShadow: 'inset -5px -5px 15px #ffffff, inset 5px 5px 15px #d1d1d1'
          }}>
            <span className="text-3xl font-bold text-gray-700">{stat.value}</span>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 3. GLASSMORPHISM - "Prism Finance" Dashboard
// ============================================================================
const GlassmorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' }}>
    {/* Background Shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-blue-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-400 rounded-full blur-3xl opacity-40" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            }}>
            <span className="text-white text-xl">◈</span>
          </div>
          <span className="text-white text-lg sm:text-xl font-semibold">Prism Finance</span>
        </div>
        <nav className="flex flex-wrap gap-3 sm:gap-6 text-sm sm:text-base">
          {['Dashboard', 'Portfolio', 'Analytics', 'Settings'].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white transition-colors">{item}</a>
          ))}
        </nav>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {/* Balance Card */}
        <div className="col-span-12 md:col-span-8 p-4 sm:p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
          <p className="text-white/70 mb-2 text-sm sm:text-base">Total Balance</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 break-words">$847,293.42</h2>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <div>
              <p className="text-white/60 text-xs sm:text-sm">24h Change</p>
              <p className="text-green-300 text-base sm:text-xl font-semibold">+$12,847.32</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm">Percentage</p>
              <p className="text-green-300 text-base sm:text-xl font-semibold">+1.54%</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 md:col-span-4 p-4 sm:p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
            {['Send Money', 'Receive', 'Swap', 'Stake'].map((action) => (
              <button key={action} className="w-full py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base font-medium transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="col-span-12 md:col-span-6 p-4 sm:p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-4 sm:mb-6">Portfolio</h3>
          {[
            { name: 'Bitcoin', symbol: 'BTC', value: '$423,291', change: '+2.4%', icon: '₿' },
            { name: 'Ethereum', symbol: 'ETH', value: '$287,103', change: '+1.8%', icon: 'Ξ' },
            { name: 'Solana', symbol: 'SOL', value: '$136,899', change: '+5.2%', icon: '◎' },
          ].map((asset, i) => (
            <div key={i} className="flex items-center justify-between py-3 sm:py-4 border-b border-white/10 last:border-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <span className="text-white text-sm sm:text-base">{asset.icon}</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">{asset.name}</p>
                  <p className="text-white/60 text-xs sm:text-sm">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium text-sm sm:text-base">{asset.value}</p>
                <p className="text-green-300 text-xs sm:text-sm">{asset.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="col-span-12 md:col-span-6 p-4 sm:p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-4 sm:mb-6">Recent Activity</h3>
          {[
            { type: 'Received', amount: '+0.5 ETH', time: '2 min ago' },
            { type: 'Swapped', amount: 'BTC → USDC', time: '1 hour ago' },
            { type: 'Staked', amount: '100 SOL', time: '3 hours ago' },
            { type: 'Sent', amount: '-0.1 BTC', time: 'Yesterday' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-2 sm:py-3 border-b border-white/10 last:border-0">
              <div>
                <p className="text-white font-medium text-sm sm:text-base">{tx.type}</p>
                <p className="text-white/60 text-xs sm:text-sm">{tx.time}</p>
              </div>
              <p className="text-white text-sm sm:text-base">{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 4. BRUTALISM - "RAWFORM" Design Studio
// ============================================================================
const BrutalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    {/* Hero */}
    <header className="border-b-4 border-black">
      <div className="max-w-6xl mx-auto p-8">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-2xl font-black">RAWFORM.</span>
          <div className="flex gap-6 font-mono uppercase text-sm">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:line-through">{item}</a>
            ))}
          </div>
        </nav>
        <h1 className="text-6xl md:text-[120px] font-black uppercase leading-none tracking-tight mb-8">
          Design<br />Without<br />Apology.
        </h1>
        <div className="flex gap-4 mb-8">
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">BRANDING</span>
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">WEB</span>
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">PRINT</span>
        </div>
      </div>
    </header>

    {/* Services */}
    <section className="border-b-4 border-black">
      <div className="grid md:grid-cols-3">
        {[
          { num: '01', title: 'BRAND IDENTITY', desc: 'Logos, guidelines, and visual systems that refuse to blend in.' },
          { num: '02', title: 'WEB DESIGN', desc: 'Websites that load fast and hit hard. No frameworks, no bloat.' },
          { num: '03', title: 'PRINT DESIGN', desc: 'Posters, zines, and editorial that demands physical presence.' },
        ].map((service, i) => (
          <div key={i} className={`p-8 ${i < 2 ? 'border-r-4 border-black' : ''} border-b-4 md:border-b-0 border-black`}>
            <span className="text-6xl font-black text-gray-300">{service.num}</span>
            <h3 className="text-2xl font-black mt-4 mb-4">{service.title}</h3>
            <p className="font-mono text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Work */}
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-black mb-8 uppercase">Selected Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'LOUD COFFEE CO.', type: 'BRANDING', color: 'bg-yellow-400' },
          { title: 'PUNK RECORDS', type: 'WEB + PRINT', color: 'bg-red-500' },
          { title: 'MONO GALLERY', type: 'IDENTITY', color: 'bg-blue-600' },
          { title: 'STREET ZINE', type: 'EDITORIAL', color: 'bg-black text-white' },
        ].map((work, i) => (
          <div key={i} className={`${work.color} p-8 border-4 border-black`}
            style={{ boxShadow: '8px 8px 0 #000' }}>
            <span className="font-mono text-sm">{work.type}</span>
            <h3 className="text-3xl font-black mt-2">{work.title}</h3>
            <button className="mt-8 px-6 py-2 bg-white text-black border-4 border-black font-bold uppercase text-sm"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-8">
          Got a project?<br />Let's talk.
        </h2>
        <a href="mailto:hello@rawform.studio" className="text-2xl font-mono underline">
          hello@rawform.studio
        </a>
      </div>
    </section>
  </div>
);

// ============================================================================
// 5. 3D & HYPERREALISM - "Phantom Gaming" Product Page
// ============================================================================
const ThreeDDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #001F3F 0%, #0a1628 100%)' }}>
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-16 text-center" style={{ perspective: '1000px' }}>
      <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Next Generation</p>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
        style={{ textShadow: '0 0 60px rgba(255, 165, 0, 0.3)' }}>
        Phantom X1
      </h1>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
        Precision engineering meets elite performance. The controller built for champions.
      </p>
      
      {/* 3D Product */}
      <div className="relative mx-auto mb-12" style={{ transformStyle: 'preserve-3d' }}>
        <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(255,165,0,0.2) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite',
          }}>
          <div className="text-[150px]" style={{
            transform: 'rotateY(-15deg) rotateX(10deg)',
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
          }}>
            🎮
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg"
          style={{ boxShadow: '0 10px 40px rgba(255,165,0,0.3)' }}>
          Pre-Order Now — $199
        </button>
        <button className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-amber-500 transition-colors">
          Watch Trailer
        </button>
      </div>
    </header>

    {/* Specs */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: '⚡', value: '1ms', label: 'Response Time' },
          { icon: '🎯', value: '8000', label: 'DPI Precision' },
          { icon: '🔋', value: '80h', label: 'Battery Life' },
          { icon: '🎨', value: '16.8M', label: 'RGB Colors' },
        ].map((spec, i) => (
          <div key={i} className="text-center p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
            <span className="text-4xl mb-4 block">{spec.icon}</span>
            <p className="text-3xl font-bold text-white">{spec.value}</p>
            <p className="text-gray-500 text-sm mt-1">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Built for Victory</h2>
          <div className="space-y-6">
            {[
              { title: 'Hall Effect Triggers', desc: 'Zero stick drift. Ever. Our magnetic sensors last forever.' },
              { title: 'Pro Grip Texture', desc: 'Tournament-tested rubberized grip for marathon sessions.' },
              { title: 'Instant Mapping', desc: 'Remap any button on the fly. No software required.' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-amber-500 to-orange-600 rounded" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-square rounded-3xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, rgba(255,165,0,0.1), transparent)',
            boxShadow: '0 0 100px rgba(255,165,0,0.2)',
          }}>
          <span className="text-9xl">🏆</span>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 6. VIBRANT & BLOCK-BASED - "VOLTAIC" Creative Agency
// ============================================================================
const VibrantDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0D0D0D' }}>
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-16">
      <nav className="flex justify-between items-center mb-16">
        <span className="text-3xl font-black text-white">VOLTAIC</span>
        <div className="hidden sm:flex gap-6 text-gray-400">
          {['Work', 'About', 'Careers', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </nav>
      
      <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
        We make<br />
        <span style={{ color: '#39FF14' }}>brands</span> that<br />
        <span style={{ color: '#FF1493' }}>scream.</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        Digital-first creative agency for ambitious brands. Strategy. Design. Development. All loud.
      </p>
      <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform">
        Start a Project →
      </button>
    </header>

    {/* Color Blocks */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { bg: '#39FF14', title: 'BRANDING', desc: 'Identity systems' },
          { bg: '#BF00FF', title: 'DIGITAL', desc: 'Web & mobile' },
          { bg: '#FF1493', title: 'CONTENT', desc: 'Video & social' },
          { bg: '#00FFFF', title: 'STRATEGY', desc: 'Growth tactics' },
        ].map((item, i) => (
          <div key={i} className="aspect-square rounded-3xl p-6 flex flex-col justify-end"
            style={{ backgroundColor: item.bg }}>
            <h3 className="text-2xl font-black text-black">{item.title}</h3>
            <p className="text-black/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Work Grid */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-5xl font-black text-white mb-12">Selected Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { client: 'HYPEBEAST', type: 'Brand Campaign', color: '#FF1493' },
          { client: 'NEON LABS', type: 'Website', color: '#00FFFF' },
          { client: 'PULSE MUSIC', type: 'App Design', color: '#39FF14' },
          { client: 'FUSION', type: 'Identity', color: '#BF00FF' },
        ].map((work, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer"
            style={{ backgroundColor: work.color }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">◆</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/70 text-sm">{work.type}</p>
              <h3 className="text-2xl font-black text-white">{work.client}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-6xl mx-auto px-8 py-24 text-center">
      <h2 className="text-6xl font-black text-white mb-8">Ready to get loud?</h2>
      <button className="px-12 py-6 bg-white text-black text-xl font-black rounded-2xl hover:bg-gray-100 transition-colors">
        Let's Talk
      </button>
    </section>
  </div>
);

// ============================================================================
// 7. DARK MODE (OLED) - "NightCode" Developer Tools
// ============================================================================
const DarkModeDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-black overflow-x-hidden">
    {/* Hero */}
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <nav className="flex justify-between items-center mb-8 sm:mb-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
            style={{ background: '#39FF14', boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)' }}>
            <span className="text-black font-bold">N</span>
          </div>
          <span className="text-white font-semibold">NightCode</span>
        </div>
        <div className="hidden sm:flex gap-6 text-gray-500">
          {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </nav>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        Code in the dark.<br />
        <span style={{ color: '#39FF14', textShadow: '0 0 30px rgba(57,255,20,0.5)' }}>Ship at light speed.</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
        The IDE that respects your eyes and your craft. True black OLED themes, 
        zero distractions, maximum productivity.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-black"
          style={{ background: '#39FF14', boxShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
          Download Free
        </button>
        <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white border border-gray-700 hover:border-gray-500 transition-colors">
          View Docs
        </button>
      </div>
    </header>

    {/* Code Preview */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="rounded-xl border border-gray-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-gray-500 text-sm">main.ts</span>
        </div>
        <div className="p-6 font-mono text-sm">
          <div><span style={{ color: '#BF00FF' }}>const</span> <span style={{ color: '#39FF14' }}>app</span> = <span style={{ color: '#0080FF' }}>createApp</span>{'({'}</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>name</span>: <span style={{ color: '#FF1493' }}>"NightCode"</span>,</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>theme</span>: <span style={{ color: '#FF1493' }}>"pure-black"</span>,</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>performance</span>: <span style={{ color: '#FF1493' }}>"blazing"</span></div>
          <div>{'});'}</div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Built for the night shift</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: '⚫', title: 'True Black', desc: 'Pure #000000 background. Perfect OLED blacks save battery and reduce eye strain.', color: '#39FF14' },
          { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-50ms response time. Every keystroke feels instant.', color: '#0080FF' },
          { icon: '🔌', title: 'Plugin System', desc: 'Extend everything. Our marketplace has 10,000+ extensions.', color: '#FFD700' },
          { icon: '🌙', title: 'Auto Dark', desc: 'Syncs with system preferences. Dark when you need it.', color: '#BF00FF' },
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: feature.color, boxShadow: `0 0 10px ${feature.color}` }} />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-3 gap-8">
        {[
          { value: '1M+', label: 'Developers', color: '#39FF14' },
          { value: '50ms', label: 'Response Time', color: '#0080FF' },
          { value: '99.9%', label: 'Uptime', color: '#BF00FF' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-5xl font-bold mb-2" style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}50` }}>{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 8. ACCESSIBLE & ETHICAL - "AccessFirst" Public Services
// ============================================================================
const AccessibleDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    {/* Skip Link */}
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-700 focus:text-white focus:rounded">
      Skip to main content
    </a>

    {/* Header */}
    <header className="border-b-4 border-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <MobileNav
          logo={
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">A</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">AccessFirst</span>
            </div>
          }
          items={[
            { label: 'Services' },
            { label: 'Help' },
            { label: 'Contact' },
          ]}
          hamburgerColor="#1d4ed8"
          menuBg="bg-white"
          menuText="text-gray-900 text-lg"
        />
      </div>
    </header>

    {/* Main */}
    <main id="main" className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Government Services<br />Made Accessible
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
        Everyone deserves equal access to public services. Our platform is built with accessibility at its core, 
        meeting WCAG AAA standards with 7:1+ contrast ratios.
      </p>

      {/* Service Cards */}
      <section className="mb-12" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-2xl font-bold text-gray-900 mb-6">Available Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '📋', title: 'Apply for Benefits', desc: 'Submit applications for healthcare, housing, and financial assistance.' },
            { icon: '📅', title: 'Schedule Appointments', desc: 'Book appointments with government offices and services.' },
            { icon: '📄', title: 'Request Documents', desc: 'Order birth certificates, ID cards, and official records.' },
            { icon: '💬', title: 'Get Help', desc: 'Connect with support specialists via phone, chat, or video.' },
          ].map((service, i) => (
            <a key={i} href="#" className="block p-6 border-2 border-gray-900 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-12" aria-labelledby="search-heading">
        <h2 id="search-heading" className="text-2xl font-bold text-gray-900 mb-6">Find a Service</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-lg font-semibold text-gray-900 mb-2">
              What do you need help with?
            </label>
            <input 
              type="text" 
              id="search"
              className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-700"
              placeholder="Search for services..."
            />
            <p className="text-gray-600 mt-2">Example: "renew license" or "food assistance"</p>
          </div>
          <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Search Services
          </button>
        </form>
      </section>

      {/* Accessibility Info */}
      <section className="p-6 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Our Accessibility Commitment</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ WCAG AAA compliant with 7:1+ contrast ratio</li>
          <li>✓ Full keyboard navigation support</li>
          <li>✓ Screen reader optimized</li>
          <li>✓ Large touch targets (44x44px minimum)</li>
          <li>✓ Clear focus indicators</li>
          <li>✓ Available in 12 languages</li>
        </ul>
      </section>
    </main>
  </div>
);

// ============================================================================
// 9. CLAYMORPHISM - "LearnPlay" Kids Education App
// ============================================================================
const ClaymorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden" style={{ background: '#F0E6FA' }}>
    {/* Header */}
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: '#FFD93D',
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 6px 6px 12px rgba(0,0,0,0.15)'
            }}>
            <span className="text-2xl sm:text-3xl">🎈</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gray-700">LearnPlay</span>
        </div>
        <div className="hidden sm:flex gap-4">
          {['Games', 'Stories', 'Music'].map((item) => (
            <button key={item} className="px-5 py-2 rounded-xl font-medium text-gray-600"
              style={{
                backgroundColor: '#F0E6FA',
                border: '3px solid rgba(255,255,255,0.5)',
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.05), 4px 4px 8px rgba(0,0,0,0.1)'
              }}>
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>

    {/* Hero */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-700 mb-6">Learning is an Adventure! 🚀</h1>
      <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
        Fun games and stories that help kids learn letters, numbers, and so much more!
      </p>

      {/* Character Cards */}
      <div className="flex justify-center gap-4 sm:gap-8 mb-12 flex-wrap">
        {[
          { emoji: '🦁', name: 'Leo', color: '#FDBCB4' },
          { emoji: '🐰', name: 'Bunny', color: '#ADD8E6' },
          { emoji: '🦊', name: 'Felix', color: '#98FF98' },
        ].map((char, i) => (
          <div key={i} className="w-28 sm:w-36 h-36 sm:h-44 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            style={{
              backgroundColor: char.color,
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
            }}>
            <span className="text-6xl mb-2">{char.emoji}</span>
            <span className="font-bold text-gray-700">{char.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Activities */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Today's Activities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: '🔤', title: 'Letter Match', desc: 'Match letters with pictures!', color: '#E6E6FA', progress: 60 },
          { icon: '🔢', title: 'Count the Stars', desc: 'Learn numbers 1-20', color: '#FFD1DC', progress: 30 },
          { icon: '🎨', title: 'Color Magic', desc: 'Mix colors together!', color: '#B5EAD7', progress: 80 },
          { icon: '🎵', title: 'Sing Along', desc: 'Learn the ABC song', color: '#FFEAA7', progress: 100 },
        ].map((activity, i) => (
          <div key={i} className="p-6 rounded-3xl"
            style={{
              backgroundColor: activity.color,
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
            }}>
            <div className="flex items-start gap-4">
              <span className="text-5xl">{activity.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-700">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.desc}</p>
                <div className="h-4 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)'
                  }}>
                  <div className="h-full rounded-full" 
                    style={{
                      width: `${activity.progress}%`,
                      background: 'linear-gradient(90deg, #FF9ECD, #FF71CE)',
                    }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 text-center">
      <button className="px-12 py-5 rounded-2xl text-xl font-bold text-gray-700"
        style={{
          backgroundColor: '#FFD93D',
          border: '4px solid rgba(255,255,255,0.5)',
          boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
        }}>
        Start Learning! 🎉
      </button>
    </section>
  </div>
);

// ============================================================================
// 10. AURORA UI - "Wavelength" Music Streaming
// ============================================================================
const AuroraDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden">
    {/* Aurora Background */}
    <div className="absolute inset-0"
      style={{
        background: 'linear-gradient(-45deg, #0080FF, #8B00FF, #FF1493, #00FFFF, #0080FF)',
        backgroundSize: '400% 400%',
        animation: 'aurora 15s ease infinite'
      }} />
    <style>{`
      @keyframes aurora {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>

    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span className="text-xl font-bold text-white">Wavelength</span>
          </div>
          <div className="flex gap-6 text-white/80">
            {['Browse', 'Library', 'Radio', 'Premium'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Music that moves<br />with you
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
          100 million tracks. Personalized playlists. Lossless audio. Start your free trial today.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
            View Plans
          </button>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Chill Vibes', tracks: '50 tracks', gradient: 'from-purple-600 to-pink-500' },
            { title: 'Focus Flow', tracks: '40 tracks', gradient: 'from-blue-600 to-cyan-500' },
            { title: 'Energy Boost', tracks: '35 tracks', gradient: 'from-orange-500 to-red-500' },
            { title: 'Late Night', tracks: '45 tracks', gradient: 'from-indigo-600 to-purple-600' },
          ].map((playlist, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${playlist.gradient} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <span className="text-6xl opacity-80">🎵</span>
              </div>
              <h3 className="font-semibold text-white">{playlist.title}</h3>
              <p className="text-white/60 text-sm">{playlist.tracks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Now Playing */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">🎧</span>
            </div>
            <div className="flex-1">
              <p className="text-white/60 text-sm uppercase tracking-wider">Now Playing</p>
              <h3 className="text-3xl font-bold text-white mt-1">Electric Dreams</h3>
              <p className="text-white/80">Aurora Symphony</p>
              
              {/* Progress */}
              <div className="mt-6">
                <div className="h-1.5 bg-white/20 rounded-full">
                  <div className="h-full w-1/3 bg-white rounded-full" />
                </div>
                <div className="flex justify-between text-white/60 text-sm mt-2">
                  <span>1:24</span>
                  <span>4:32</span>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">⏮️</button>
              <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-600 hover:scale-105 transition-transform">▶️</button>
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">⏭️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 11. RETRO-FUTURISM - "NEON DRIVE" Synthwave Music
// ============================================================================
const RetroFuturismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
    {/* Grid Floor */}
    <div className="absolute bottom-0 left-0 right-0 h-64"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,255,0.1) 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,255,255,0.1) 30px, rgba(0,255,255,0.1) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,255,255,0.1) 30px, rgba(0,255,255,0.1) 31px)',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }} />

    {/* Scanlines */}
    <div className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
      }} />

    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-8 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold" style={{ 
            color: '#FF006E',
            textShadow: '0 0 10px #FF006E, 0 0 20px #FF006E'
          }}>
            NEON DRIVE
          </h1>
          <div className="hidden sm:flex gap-8 font-mono uppercase text-sm tracking-widest">
            {['Tracks', 'Artists', 'Events', 'Shop'].map((item) => (
              <a key={item} href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <p className="text-cyan-400 font-mono uppercase tracking-widest mb-4">
          &gt;&gt; NOW STREAMING &lt;&lt;
        </p>
        <h2 className="text-6xl md:text-8xl font-black mb-8" style={{
          background: 'linear-gradient(180deg, #FF006E, #8B00FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 60px rgba(255, 0, 110, 0.5)'
        }}>
          MIDNIGHT<br />RUNNER
        </h2>
        <p className="text-cyan-400/80 text-xl font-mono mb-12 max-w-2xl mx-auto">
          The ultimate synthwave compilation. 40 tracks of pure neon-soaked nostalgia.
        </p>
        
        <div className="flex gap-6 justify-center">
          <button className="px-8 py-4 font-mono uppercase tracking-widest text-white border-2"
            style={{
              borderColor: '#00FFFF',
              boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)'
            }}>
            Play Now
          </button>
          <button className="px-8 py-4 font-mono uppercase tracking-widest"
            style={{
              background: '#FF006E',
              boxShadow: '0 0 30px rgba(255,0,110,0.5)'
            }}>
            Buy Album
          </button>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h3 className="text-2xl font-mono text-cyan-400 mb-8 uppercase tracking-widest">
          // Featured Artists
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'CHROME VELOCITY', genre: 'Outrun' },
            { name: 'NEON SHADOWS', genre: 'Darksynth' },
            { name: 'LASER HIGHWAY', genre: 'Synthwave' },
            { name: 'DIGITAL SUNSET', genre: 'Chillwave' },
          ].map((artist, i) => (
            <div key={i} className="p-6 border-2 text-center"
              style={{
                borderColor: '#00FFFF',
                boxShadow: '0 0 20px rgba(0,255,255,0.3)'
              }}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FF006E, #8B00FF)',
                  boxShadow: '0 0 30px rgba(255,0,110,0.5)'
                }} />
              <h4 className="font-mono text-white mb-1">{artist.name}</h4>
              <p className="text-cyan-400/60 text-sm font-mono uppercase">{artist.genre}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="p-8 border-2" style={{
          borderColor: '#FF006E',
          background: 'rgba(255,0,110,0.1)',
          boxShadow: '0 0 40px rgba(255,0,110,0.3)'
        }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-400 font-mono text-sm mb-2">UPCOMING EVENT</p>
              <h3 className="text-4xl font-bold text-white mb-2">NEON NIGHTS FESTIVAL</h3>
              <p className="text-white/60 font-mono">Los Angeles • December 31, 2025</p>
            </div>
            <button className="px-8 py-4 font-mono uppercase text-black font-bold"
              style={{ background: '#00FFFF' }}>
              Get Tickets
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 12. FLAT DESIGN - "Taskr" Productivity App
// ============================================================================
const FlatDesignDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-100 overflow-x-hidden">
    {/* Header */}
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Taskr</span>
          </div>
          <div className="hidden sm:flex gap-4 items-center">
            {['Features', 'Pricing', 'Blog'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-500 transition-colors">{item}</a>
            ))}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>

    {/* Hero */}
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
          Get things done.<br />Simply.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The task manager that gets out of your way. No fancy features, just what you need to stay organized.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
            Try Free for 14 Days
          </button>
          <button className="px-8 py-4 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Everything you need, nothing you don't</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '📋', title: 'Simple Lists', desc: 'Create lists for projects, personal tasks, or daily routines.', color: 'bg-blue-500' },
          { icon: '🔔', title: 'Smart Reminders', desc: 'Get notified at the right time, in the right place.', color: 'bg-green-500' },
          { icon: '👥', title: 'Team Sync', desc: 'Share lists with your team and collaborate in real-time.', color: 'bg-purple-500' },
          { icon: '📱', title: 'Works Everywhere', desc: 'iOS, Android, Web, and desktop apps that stay in sync.', color: 'bg-orange-500' },
          { icon: '🔄', title: 'Recurring Tasks', desc: 'Set it and forget it. Tasks repeat automatically.', color: 'bg-pink-500' },
          { icon: '📊', title: 'Progress Tracking', desc: 'See how much you have accomplished at a glance.', color: 'bg-cyan-500' },
        ].map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Task Demo */}
    <section className="max-w-5xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Today's Tasks</h3>
          <span className="text-gray-500 text-sm">3 of 5 completed</span>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { text: 'Review project proposal', done: true },
            { text: 'Send weekly report', done: true },
            { text: 'Call with design team', done: true },
            { text: 'Update documentation', done: false },
            { text: 'Plan next sprint', done: false },
          ].map((task, i) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${task.done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                {task.done && <span className="text-white text-sm">✓</span>}
              </div>
              <span className={task.done ? 'text-gray-400 line-through' : 'text-gray-800'}>{task.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-blue-500 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get organized?</h2>
        <p className="text-blue-100 mb-8">Join 2 million people who use Taskr every day.</p>
        <button className="px-8 py-4 bg-white text-blue-500 rounded-md font-bold hover:bg-blue-50 transition-colors">
          Start Free Trial
        </button>
      </div>
    </section>
  </div>
);

// ============================================================================
// 13. SKEUOMORPHISM - "Artisan Notes" Vintage Notebook
// ============================================================================
const SkeuomorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)' }}>
    {/* Leather Desk */}
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* App Header - Wood Plaque Style */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-serif text-amber-100 drop-shadow-md"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Artisan Notes
        </h1>
        <p className="text-amber-200/70 font-serif italic mt-2">Your digital leather journal</p>
      </header>

      {/* Notebook */}
      <div className="rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #DEB887, #D2691E)',
          boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.2), inset -3px -3px 6px rgba(0,0,0,0.3), 0 20px 50px rgba(0,0,0,0.5)',
          border: '6px solid #8B4513'
        }}>
        {/* Notebook Header */}
        <div className="px-6 py-4 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #A0522D, #8B4513)',
            borderBottom: '4px solid #654321'
          }}>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #FFD700, #B8860B)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }} />
            <span className="text-amber-100 font-serif">Personal Journal</span>
          </div>
          <div className="flex gap-2">
            {['📖', '✏️', '🔖'].map((icon, i) => (
              <button key={i} className="w-10 h-10 rounded flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #DEB887, #D2B48C)',
                  boxShadow: '0 3px 0 #8B4513, inset 0 1px 0 rgba(255,255,255,0.3)'
                }}>
                <span>{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Paper Content */}
        <div className="p-8" style={{
          background: 'linear-gradient(180deg, #FFFEF9, #F5F5DC)',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #E8E4C9 31px, #E8E4C9 32px)',
          boxShadow: 'inset 0 5px 10px rgba(0,0,0,0.1)'
        }}>
          {/* Date Header */}
          <div className="text-right mb-6">
            <span className="font-serif text-gray-600 italic">December 15, 2025</span>
          </div>

          {/* Note Entry */}
          <div className="space-y-4 font-serif text-gray-800 text-lg leading-loose">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
              Today I discovered the beauty of digital craftsmanship. There's something 
              magical about interfaces that feel tangible, that remind us of the physical 
              objects we cherish.
            </p>
            <p>
              The worn leather cover, the cream-colored pages, the golden clasps — each 
              element tells a story of care and intention.
            </p>
            <p className="italic text-gray-600">
              "The best design is invisible, but memorable."
            </p>
          </div>

          {/* Ribbon Bookmark */}
          <div className="absolute right-4 top-0 w-4 h-24"
            style={{
              background: 'linear-gradient(180deg, #DC143C, #8B0000)',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }} />
        </div>

        {/* Notebook Footer */}
        <div className="px-6 py-4 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #8B4513, #654321)'
          }}>
          <span className="text-amber-200/70 font-serif text-sm">Page 42 of 120</span>
          <div className="flex gap-4">
            <button className="text-amber-200 font-serif">← Previous</button>
            <button className="text-amber-200 font-serif">Next →</button>
          </div>
        </div>
      </div>

      {/* Desk Items */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>🖋️</div>
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>📚</div>
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>☕</div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 14. LIQUID GLASS - "Fluid" Premium SaaS
// ============================================================================
const LiquidGlassDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)' }}>
    {/* Animated Blobs */}
    <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-400 blur-3xl opacity-50 top-0 -left-32 animate-pulse" />
    <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400 blur-3xl opacity-50 bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-400 blur-3xl opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }} />
          <span className="text-xl font-semibold text-white">Fluid</span>
        </div>
        <nav className="flex gap-6 text-white/80">
          {['Product', 'Pricing', 'Docs', 'Blog'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Design that<br />flows
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          The next generation design system. Fluid, responsive, and beautiful on every screen.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl text-white font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
            Start Building
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white text-purple-600 font-semibold">
            View Examples
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '✨', title: 'Adaptive Components', desc: 'Components that morph and adapt to any context.' },
          { icon: '🌊', title: 'Fluid Layouts', desc: 'Seamless transitions between breakpoints.' },
          { icon: '🎨', title: 'Dynamic Theming', desc: 'Real-time theme customization with live preview.' },
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }}>
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white/70">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Showcase */}
      <section className="p-8 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
          backdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 16px 64px rgba(0,0,0,0.2)'
        }}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">See it in action</h2>
            <p className="text-white/70 mb-6">
              Watch how Fluid transforms your workflow with intelligent, context-aware design tools.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-medium"
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
              Play Demo →
            </button>
          </div>
          <div className="aspect-video rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,107,0.3), rgba(78,205,196,0.3))',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
            <span className="text-6xl">▶️</span>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 15. MOTION-DRIVEN - "Kinetic Studios" Creative Portfolio
// ============================================================================
const MotionDrivenDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-slideIn { animation: slideIn 0.8s ease-out forwards; }
    `}</style>

    {/* Header */}
    <header className="max-w-6xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <span className="text-2xl font-bold text-white">Kinetic</span>
        <div className="flex gap-6 text-white/70">
          {['Work', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-all duration-300 hover:scale-110">{item}</a>
          ))}
        </div>
      </nav>
    </header>

    {/* Hero */}
    <section className="max-w-6xl mx-auto px-8 py-16 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-slideIn">
        Motion is<br />
        <span className="animate-float inline-block" style={{ animationDelay: '0.2s' }}>our</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-float inline-block" style={{ animationDelay: '0.4s' }}>language</span>
      </h1>
      <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-slideIn" style={{ animationDelay: '0.3s' }}>
        We craft digital experiences that move people. Literally.
      </p>
    </section>

    {/* Floating Elements */}
    <section className="max-w-6xl mx-auto px-8 py-8">
      <div className="flex justify-center gap-8">
        {[
          { shape: '●', color: 'bg-pink-500', delay: '0s' },
          { shape: '■', color: 'bg-yellow-500', delay: '0.3s' },
          { shape: '▲', color: 'bg-cyan-500', delay: '0.6s' },
        ].map((item, i) => (
          <div key={i} className={`w-24 h-24 ${item.color} rounded-2xl flex items-center justify-center text-4xl text-white animate-float`}
            style={{ animationDelay: item.delay, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            {item.shape}
          </div>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Featured Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Nike Motion Campaign', type: 'Animation', color: 'from-red-600 to-orange-500' },
          { title: 'Spotify Wrapped 2025', type: 'Interactive', color: 'from-green-500 to-cyan-500' },
          { title: 'Apple Product Launch', type: '3D Motion', color: 'from-gray-700 to-gray-900' },
          { title: 'Google Doodle', type: 'Illustration', color: 'from-blue-500 to-purple-600' },
        ].map((project, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br ${project.color} cursor-pointer transition-all duration-500 hover:scale-105`}
            style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-medium">View Project →</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/60 text-sm">{project.type}</p>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-3 gap-8 text-center">
        {[
          { value: '150+', label: 'Projects' },
          { value: '50+', label: 'Awards' },
          { value: '8', label: 'Years' },
        ].map((stat, i) => (
          <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
            <p className="text-6xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 16. MICRO-INTERACTIONS - "Pulse" Social App
// ============================================================================
const MicroInteractionsDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-50">
    <style>{`
      .btn-hover:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(99,102,241,0.3); }
      .btn-hover:active { transform: scale(0.95); }
      .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
      .icon-bounce:hover { animation: bounce 0.5s; }
      @keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
    `}</style>

    {/* Header */}
    <header className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-2xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">◉</span>
            </div>
            <span className="text-xl font-bold">Pulse</span>
          </div>
          <div className="flex gap-4">
            {['🔔', '✉️', '👤'].map((icon, i) => (
              <button key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-150 icon-bounce hover:bg-gray-200">
                <span>{icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>

    {/* Feed */}
    <main className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Composer */}
      <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 card-hover">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <textarea className="w-full resize-none border-none outline-none text-lg placeholder-gray-400" 
              placeholder="What's on your mind?" rows={2} />
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                {['📷', '🎬', '📍', '😊'].map((icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 icon-bounce hover:bg-gray-100">
                    <span className="text-xl">{icon}</span>
                  </button>
                ))}
              </div>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold transition-all duration-150 btn-hover">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {[
        { user: 'Alex Chen', handle: '@alexchen', content: 'Just shipped a new feature! The micro-interactions make everything feel so alive 🚀', likes: 127, comments: 23 },
        { user: 'Sarah Miller', handle: '@sarahm', content: 'Love how this app responds to every tap. It\'s like having a conversation with the interface.', likes: 89, comments: 12 },
      ].map((post, i) => (
        <article key={i} className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 card-hover">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">{post.user}</span>
                <span className="text-gray-500">{post.handle}</span>
                <span className="text-gray-400">· 2h</span>
              </div>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <div className="flex gap-6">
                {[
                  { icon: '❤️', count: post.likes },
                  { icon: '💬', count: post.comments },
                  { icon: '🔄', count: 5 },
                  { icon: '📤', count: null },
                ].map((action, j) => (
                  <button key={j} className="flex items-center gap-2 text-gray-500 transition-all duration-150 hover:text-indigo-600 icon-bounce">
                    <span>{action.icon}</span>
                    {action.count && <span className="text-sm">{action.count}</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </main>

    {/* Floating Action Button */}
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg transition-all duration-150 btn-hover">
      +
    </button>
  </div>
);

// ============================================================================
// 17. INCLUSIVE DESIGN - "CityMove" Public Transit
// ============================================================================
const InclusiveDesignDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white overflow-x-hidden">
    {/* Header */}
    <header className="bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <MobileNav
          logo={
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 text-xl sm:text-2xl">🚌</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">CityMove</span>
            </div>
          }
          items={[
            { label: 'Routes' },
            { label: 'Schedules' },
            { label: 'Accessibility' },
          ]}
          hamburgerColor="#fff"
          menuBg="bg-blue-900"
          menuText="text-white"
        />
      </div>
    </header>

    {/* Main */}
    <main className="max-w-4xl mx-auto px-6 py-8">
      {/* Alert */}
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded-r-lg mb-8 flex items-start gap-4">
        <span className="text-2xl">⚠️</span>
        <div>
          <h2 className="font-bold text-gray-900">Service Alert</h2>
          <p className="text-gray-700">Blue Line: Minor delays (5-10 min) due to signal work. Audio announcements available.</p>
        </div>
      </div>

      {/* Trip Planner */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Trip</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2" htmlFor="from">From</label>
            <input id="from" type="text" className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-700"
              placeholder="Enter starting location" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2" htmlFor="to">To</label>
            <input id="to" type="text" className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-700"
              placeholder="Enter destination" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-gray-900 mb-2">Accessibility Needs</label>
              <div className="space-y-2">
                {[
                  { icon: '♿', label: 'Wheelchair accessible' },
                  { icon: '🚶', label: 'Limited walking' },
                  { icon: '👁️', label: 'Visual assistance' },
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-6 h-6 rounded border-2 border-gray-400 focus:ring-4 focus:ring-blue-400" />
                    <span className="text-lg">{option.icon} {option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button className="w-full py-4 bg-blue-700 text-white text-xl font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400">
            Find Routes
          </button>
        </div>
      </section>

      {/* Results */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Routes</h2>
        <div className="space-y-4">
          {[
            { route: 'Blue Line → Bus 42', time: '25 min', accessible: true, cost: '$2.50' },
            { route: 'Red Line (Direct)', time: '18 min', accessible: true, cost: '$2.50' },
          ].map((route, i) => (
            <a key={i} href="#" className="block p-6 border-2 border-gray-300 rounded-lg hover:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{route.route}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <span className="text-lg">⏱️ {route.time}</span>
                    <span>•</span>
                    <span className="text-lg">{route.cost}</span>
                    {route.accessible && <span className="text-lg">• ♿ Accessible</span>}
                  </p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  </div>
);

// ============================================================================
// 18. ZERO INTERFACE - "Echo" AI Assistant
// ============================================================================
const ZeroInterfaceDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-50 flex flex-col">
    {/* Minimal Header */}
    <header className="px-8 py-6">
      <div className="max-w-md mx-auto text-center">
        <span className="text-gray-400 text-sm">Echo AI</span>
      </div>
    </header>

    {/* Main - Ambient Interface */}
    <main className="flex-1 flex items-center justify-center px-8">
      <div className="max-w-md w-full text-center">
        {/* AI Orb */}
        <div className="relative mx-auto w-40 h-40 mb-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse opacity-30 blur-xl" />
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1 bg-white rounded animate-pulse"
                    style={{ height: `${20 + Math.random() * 30}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <p className="text-gray-500 text-lg mb-4">Listening...</p>
        <h2 className="text-2xl font-light text-gray-800 mb-8">
          "What's the weather like today?"
        </h2>

        {/* Response */}
        <div className="bg-white rounded-2xl p-6 shadow-sm max-w-sm mx-auto">
          <p className="text-gray-700 text-lg">
            It's currently <strong>72°F</strong> and sunny in San Francisco. 
            Perfect weather for a walk in the park! 🌞
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-12">
          <p className="text-gray-400 text-sm mb-4">Try saying:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Set a reminder', 'Play some music', 'What\'s my schedule?'].map((suggestion, i) => (
              <button key={i} className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm hover:bg-gray-100 transition-colors shadow-sm">
                "{suggestion}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>

    {/* Minimal Footer */}
    <footer className="px-8 py-6">
      <div className="max-w-md mx-auto flex justify-center gap-8 text-gray-400">
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">🎤</span>
          <span className="text-xs">Voice</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">⌨️</span>
          <span className="text-xs">Type</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">📷</span>
          <span className="text-xs">Scan</span>
        </button>
      </div>
    </footer>
  </div>
);

// ============================================================================
// 19. SOFT UI EVOLUTION - "Vitality" Health Tracker
// ============================================================================
const SoftUIEvolutionDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F0F4F8' }}>
    {/* Header */}
    <header className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-4px -4px 10px #ffffff, 4px 4px 10px #d1d9e6'
            }}>
            <span className="text-2xl">💚</span>
          </div>
          <span className="text-xl font-semibold text-gray-700">Vitality</span>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
            }}>
            <span>🔔</span>
          </button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
            }}>
            <span>⚙️</span>
          </button>
        </div>
      </div>
    </header>

    {/* Main */}
    <main className="max-w-4xl mx-auto px-6 py-8">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Good morning, Sarah!</h1>
        <p className="text-gray-500 mt-1">Here's your health summary for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: '🏃', value: '8,423', label: 'Steps', color: 'text-blue-600' },
          { icon: '🔥', value: '420', label: 'Calories', color: 'text-orange-600' },
          { icon: '💧', value: '6/8', label: 'Glasses', color: 'text-cyan-600' },
          { icon: '😴', value: '7h 42m', label: 'Sleep', color: 'text-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl text-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-6px -6px 15px #ffffff, 6px 6px 15px #d1d9e6'
            }}>
            <span className="text-3xl mb-2 block">{stat.icon}</span>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Progress Ring */}
      <div className="p-8 rounded-3xl mb-8"
        style={{
          background: '#F0F4F8',
          boxShadow: '-8px -8px 20px #ffffff, 8px 8px 20px #d1d9e6'
        }}>
        <div className="flex items-center gap-8">
          <div className="relative w-40 h-40 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#d1d9e6" strokeWidth="12" fill="none" />
              <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="12" fill="none"
                strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">75%</span>
              <span className="text-gray-500 text-sm">Daily Goal</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Great progress!</h3>
            <p className="text-gray-600 mb-4">You're 75% toward your daily health goal. Keep it up!</p>
            <button className="px-6 py-3 rounded-xl text-blue-600 font-semibold"
              style={{
                background: '#F0F4F8',
                boxShadow: '-4px -4px 10px #ffffff, 4px 4px 10px #d1d9e6'
              }}>
              View Details →
            </button>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="p-6 rounded-2xl"
        style={{
          background: '#F0F4F8',
          boxShadow: 'inset -4px -4px 10px #ffffff, inset 4px 4px 10px #d1d9e6'
        }}>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Today's Activities</h3>
        <div className="space-y-3">
          {[
            { icon: '🚶', activity: 'Morning Walk', time: '7:00 AM', duration: '30 min' },
            { icon: '🧘', activity: 'Yoga Session', time: '8:00 AM', duration: '45 min' },
            { icon: '🍳', activity: 'Healthy Breakfast', time: '9:00 AM', calories: '350 cal' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl"
              style={{
                background: '#F0F4F8',
                boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
              }}>
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-800">{item.activity}</p>
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>
              </div>
              <span className="text-gray-600 text-sm">{item.duration || item.calories}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

// ============================================================================
// 20. NEUBRUTALISM - "DEV.STACK" Tech Blog
// ============================================================================
const NeubrutalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-amber-50 overflow-x-hidden">
    {/* Header */}
    <header className="border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <MobileNav
          logo={<span className="text-2xl sm:text-3xl font-black">DEV.STACK</span>}
          items={[
            { label: 'Articles' },
            { label: 'Tutorials' },
            { label: 'Newsletter' },
            { label: 'Subscribe' },
          ]}
          hamburgerColor="#000"
          menuBg="bg-amber-50"
          menuText="text-black font-bold"
          desktopItemClass="gap-4"
        />
      </div>
    </header>

    {/* Hero */}
    <section className="border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6">
          Where developers <span className="bg-yellow-300 px-2">actually</span> learn stuff.
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          No fluff. No filler. Just practical tutorials and hot takes on modern web development.
        </p>
      </div>
    </section>

    {/* Featured */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-black mb-6">📌 Featured</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="bg-pink-400 p-6 border-4 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <span className="px-3 py-1 bg-black text-white text-sm font-bold">TUTORIAL</span>
          <h3 className="text-2xl font-black mt-4 mb-2">Build a REST API with Bun in 10 Minutes</h3>
          <p className="mb-4">Bun is blazing fast. Here's how to get started with your first API.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">@alexdev</span>
            <span className="text-sm">5 min read</span>
          </div>
        </article>
        <article className="bg-cyan-400 p-6 border-4 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <span className="px-3 py-1 bg-black text-white text-sm font-bold">OPINION</span>
          <h3 className="text-2xl font-black mt-4 mb-2">Why I Stopped Using React (And Came Back)</h3>
          <p className="mb-4">A journey through Vue, Svelte, and HTMX — and why React still wins.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">@sarahcodes</span>
            <span className="text-sm">8 min read</span>
          </div>
        </article>
      </div>
    </section>

    {/* Latest */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-black mb-6">🆕 Latest Articles</h2>
      <div className="space-y-4">
        {[
          { title: 'The Complete Guide to TypeScript 5.0', tag: 'GUIDE', color: 'bg-green-400' },
          { title: 'CSS Container Queries Are Here!', tag: 'NEWS', color: 'bg-orange-400' },
          { title: 'Why Every Dev Should Learn SQL', tag: 'OPINION', color: 'bg-purple-400' },
        ].map((article, i) => (
          <article key={i} className={`${article.color} p-4 sm:p-6 border-4 border-black flex justify-between items-center gap-3`}
            style={{ boxShadow: '6px 6px 0 #000' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
              <span className="px-2 py-1 bg-black text-white text-xs font-bold shrink-0 w-fit">{article.tag}</span>
              <span className="text-lg sm:text-xl font-black leading-tight">{article.title}</span>
            </div>
            <span className="text-2xl shrink-0">→</span>
          </article>
        ))}
      </div>
    </section>

    {/* Newsletter */}
    <section className="bg-yellow-300 border-y-4 border-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black mb-2">Get the weekly digest ✉️</h2>
            <p>Top articles and tutorials delivered every Friday.</p>
          </div>
          <div className="flex gap-3">
            <input type="email" placeholder="you@email.com" 
              className="px-4 py-3 border-4 border-black font-mono w-64" />
            <button className="px-6 py-3 bg-black text-white font-bold border-4 border-black"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// STYLES 21-49: Continuing with comprehensive demos
// ============================================================================

// 21. Bento Box Grid - "Mosaic" Product Features
const BentoBoxGridDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden" style={{ background: '#F5F5F7' }}>
    <header className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center">
      <p className="text-gray-500 mb-2">Introducing</p>
      <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 mb-4">Mosaic</h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">The complete design system for modern apps. Beautiful. Flexible. Powerful.</p>
    </header>
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
        <div className="col-span-2 row-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col justify-end text-white">
          <span className="text-6xl mb-4">✨</span>
          <h3 className="text-2xl font-semibold">Design Tokens</h3>
          <p className="text-white/80">Consistent styling across all components</p>
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between">
          <span className="text-4xl">🎨</span>
          <div><h3 className="font-semibold">Themes</h3><p className="text-gray-500 text-sm">Light & Dark</p></div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between">
          <span className="text-4xl">📱</span>
          <div><h3 className="font-semibold">Responsive</h3><p className="text-gray-500 text-sm">Every screen</p></div>
        </div>
        <div className="col-span-2 bg-gray-900 rounded-3xl p-6 text-white flex items-center gap-6">
          <span className="text-5xl">⚡</span>
          <div><h3 className="text-xl font-semibold">Lightning Fast</h3><p className="text-gray-400">Built for performance</p></div>
        </div>
        <div className="bg-blue-500 rounded-3xl p-6 text-white flex flex-col justify-between">
          <span className="text-4xl">🔧</span>
          <h3 className="font-semibold">50+ Components</h3>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 text-white flex flex-col justify-between">
          <span className="text-4xl">📚</span>
          <h3 className="font-semibold">Full Docs</h3>
        </div>
        <div className="col-span-2 bg-white rounded-3xl shadow-sm p-6 flex items-center justify-between">
          <div><h3 className="text-xl font-semibold text-gray-900">Ready to start?</h3><p className="text-gray-500">npm install mosaic-ui</p></div>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold">Get Started</button>
        </div>
      </div>
    </section>
  </div>
);

// 22. Y2K Aesthetic - "CHROME BABY" Fashion Brand
const Y2KDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(135deg, #FF69B4, #00FFFF)' }}>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8 text-center">
      <h1 className="text-6xl font-black text-white mb-2" style={{ textShadow: '3px 3px 0 #9400D3, 6px 6px 0 #C0C0C0' }}>
        CHROME BABY
      </h1>
      <p className="text-white/90 text-xl font-bold tracking-widest">★ FASHION FOR THE FUTURE ★</p>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'HOLO JACKET', price: '$299', emoji: '🧥' },
          { name: 'CYBER SHADES', price: '$149', emoji: '🕶️' },
          { name: 'PLATFORM BOOTS', price: '$249', emoji: '👢' },
        ].map((product, i) => (
          <div key={i} className="p-6 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 -5px 20px rgba(0,0,0,0.05)'
            }}>
            <div className="text-7xl mb-4">{product.emoji}</div>
            <h3 className="text-xl font-black text-purple-600">{product.name}</h3>
            <p className="text-pink-500 font-bold text-2xl my-2">{product.price}</p>
            <button className="w-full py-3 rounded-full font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #FF69B4, #9400D3)' }}>
              ADD TO BAG ✨
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="text-center py-12">
      <p className="text-white text-2xl font-bold" style={{ textShadow: '2px 2px 0 #9400D3' }}>
        ✨ FREE SHIPPING ON ORDERS OVER $100 ✨
      </p>
    </section>
  </div>
);

// ============================================================================
// 23. CYBERPUNK UI - "NEXUS.CORP" Crypto Trading Platform
// ============================================================================
const CyberpunkDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0D0D0D' }}>
    <style>{`
      @keyframes glitch { 0%, 100% { text-shadow: -2px 0 #FF00FF, 2px 0 #00FFFF; } 50% { text-shadow: 2px 0 #FF00FF, -2px 0 #00FFFF; } }
      @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
      .glitch:hover { animation: glitch 0.3s infinite; }
    `}</style>
    <div className="absolute inset-0 opacity-5 pointer-events-none"
      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)' }} />
    <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 relative z-10">
      <MobileNav
        logo={<h1 className="text-2xl sm:text-3xl font-mono font-bold glitch" style={{ color: '#00FF00', textShadow: '0 0 20px #00FF00' }}>NEXUS.CORP</h1>}
        items={[
          { label: 'TRADE' },
          { label: 'WALLET' },
          { label: 'MARKETS' },
          { label: 'DOCS' },
        ]}
        hamburgerColor="#00FF00"
        menuBg="bg-black"
        menuText="text-green-400"
        desktopItemClass="font-mono text-sm text-green-400"
      />
    </header>
    <section className="max-w-6xl mx-auto px-8 py-12 relative z-10">
      <p className="font-mono text-green-500 text-sm mb-4">// SYSTEM STATUS: ONLINE</p>
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6" style={{ color: '#00FF00', textShadow: '0 0 40px rgba(0,255,0,0.5)' }}>
        DECENTRALIZED<br />TRADING <span style={{ color: '#FF00FF' }}>PROTOCOL</span>
      </h2>
      <p className="font-mono text-gray-400 max-w-xl mb-8">
        &gt; Execute trades at light speed on the blockchain. Zero trust. Full transparency. Maximum gains.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 font-mono font-bold text-black"
          style={{ background: '#00FF00', boxShadow: '0 0 20px rgba(0,255,0,0.5)' }}>
          [CONNECT_WALLET]
        </button>
        <button className="px-8 py-4 font-mono border border-green-500 text-green-500 hover:bg-green-500/10">
          [VIEW_DOCS]
        </button>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-8 py-8 relative z-10">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: 'TVL', value: '$2.4B', change: '+12.4%' },
          { label: 'VOLUME_24H', value: '$847M', change: '+5.7%' },
          { label: 'USERS', value: '1.2M', change: '+3.2%' },
        ].map((stat, i) => (
          <div key={i} className="p-6 border border-green-500/30" style={{ background: 'rgba(0,255,0,0.05)' }}>
            <p className="font-mono text-gray-500 text-sm">{stat.label}</p>
            <p className="text-3xl font-mono font-bold mt-2" style={{ color: '#00FF00' }}>{stat.value}</p>
            <p className="font-mono text-sm mt-1" style={{ color: '#00FFFF' }}>{stat.change}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-8 py-8 relative z-10">
      <div className="p-8 border border-green-500/30" style={{ background: 'rgba(0,255,0,0.02)' }}>
        <div className="flex items-center gap-4 mb-6">
          <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#00FF00', boxShadow: '0 0 10px #00FF00' }} />
          <span className="font-mono text-green-500">LIVE_MARKET_FEED</span>
        </div>
        {[
          { pair: 'ETH/USDC', price: '$3,847.23', change: '+2.4%' },
          { pair: 'BTC/USDC', price: '$67,234.56', change: '+1.8%' },
          { pair: 'SOL/USDC', price: '$142.87', change: '+5.2%' },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center py-4 border-t border-green-500/20 font-mono">
            <span className="text-gray-300">{item.pair}</span>
            <span className="text-green-400">{item.price}</span>
            <span style={{ color: '#00FFFF' }}>{item.change}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 24. ORGANIC BIOPHILIC - "Willow" Sustainable Living App
// ============================================================================
const OrganicBiophilicDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5DC' }}>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🌿</span>
          <span className="text-2xl font-serif text-green-800">Willow</span>
        </div>
        <div className="flex gap-6">
          {['Home', 'Garden', 'Recipes', 'Community'].map((item) => (
            <a key={item} href="#" className="text-green-700 hover:text-green-900 transition-colors">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-5xl md:text-6xl font-serif text-green-900 mb-6 leading-tight">
        Live in harmony<br />with nature
      </h1>
      <p className="text-xl text-green-700 max-w-xl mb-12">
        Track your sustainable journey, grow your own food, and connect with a community 
        that cares about our planet.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 rounded-full font-medium text-white"
          style={{ background: '#228B22', boxShadow: '0 10px 30px rgba(34,139,34,0.3)' }}>
          Start Growing
        </button>
        <button className="px-8 py-4 rounded-full font-medium text-green-800 border-2 border-green-800 hover:bg-green-800 hover:text-white transition-colors">
          Learn More
        </button>
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: '🌱', title: 'Grow Tracker', desc: 'Monitor your plants from seed to harvest with personalized care tips.' },
          { icon: '🥗', title: 'Seasonal Recipes', desc: 'Cook with what is fresh and in season in your garden.' },
          { icon: '🌍', title: 'Impact Score', desc: 'See the positive impact of your sustainable choices.' },
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl" style={{ background: 'rgba(34,139,34,0.1)' }}>
            <span className="text-5xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-serif text-green-900 mb-2">{feature.title}</h3>
            <p className="text-green-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <div className="p-8 rounded-3xl flex items-center gap-8" style={{ background: 'rgba(139,69,19,0.1)' }}>
        <div className="text-8xl">🌻</div>
        <div>
          <h3 className="text-2xl font-serif text-green-900 mb-2">This Week's Challenge</h3>
          <p className="text-green-700 mb-4">Plant 3 pollinator-friendly flowers and help support local bee populations!</p>
          <button className="text-green-800 font-medium underline">Join 2,847 others →</button>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 25. AI-NATIVE UI - "Copilot" AI Assistant Interface
// ============================================================================
const AINativeDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-50 flex flex-col">
    <header className="px-8 py-4 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm">✨</span>
          </div>
          <span className="font-semibold">Copilot</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">New Chat</button>
      </div>
    </header>
    <main className="flex-1 max-w-3xl mx-auto w-full px-8 py-8">
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-gray-800">Can you help me write a product description for a sustainable water bottle?</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-xs">✨</span>
          </div>
          <div className="flex-1">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-800 mb-4">
                I would be happy to help! Here's a compelling product description:
              </p>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">EcoFlow Hydration Bottle</h4>
                <p className="text-gray-700 text-sm">
                  Stay refreshed while staying sustainable. Our triple-insulated stainless steel bottle 
                  keeps drinks cold for 24 hours or hot for 12. Made from 100% recycled materials with 
                  a lifetime warranty. One bottle saves 167 plastic bottles per year.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">Copy</button>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">Regenerate</button>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">Make shorter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <span>Copilot is thinking...</span>
        </div>
      </div>
    </main>
    <footer className="px-8 py-4 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
          <input type="text" className="flex-1 bg-transparent outline-none text-gray-800" 
            placeholder="Ask anything..." />
          <button className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            ↑
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          Copilot can make mistakes. Consider checking important information.
        </p>
      </div>
    </footer>
  </div>
);

// ============================================================================
// 26. MEMPHIS DESIGN - "SHAPES" Creative Festival
// ============================================================================
const MemphisDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#FFFEF7' }}>
    <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ background: '#FF71CE' }} />
    <div className="absolute top-40 right-20 w-20 h-20" style={{ background: '#FFCE5C', transform: 'rotate(45deg)' }} />
    <div className="absolute bottom-40 left-1/4 w-0 h-0" style={{ borderLeft: '40px solid transparent', borderRight: '40px solid transparent', borderBottom: '70px solid #86CCCA' }} />
    <div className="absolute top-1/2 right-10 w-16 h-40" style={{ background: 'repeating-linear-gradient(45deg, #000, #000 5px, transparent 5px, transparent 10px)' }} />
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8 relative z-10">
      <nav className="flex justify-between items-center">
        <h1 className="text-4xl font-black" style={{ color: '#6A7BB4' }}>SHAPES</h1>
        <div className="flex gap-6 font-bold">
          {['PROGRAM', 'ARTISTS', 'TICKETS', 'INFO'].map((item) => (
            <a key={item} href="#" className="hover:underline" style={{ textDecorationThickness: '3px' }}>{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 relative z-10">
      <p className="font-bold text-xl mb-4" style={{ color: '#FF71CE' }}>JULY 15-18, 2025 • BROOKLYN, NY</p>
      <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
        <span style={{ color: '#FF71CE' }}>ART</span> <span style={{ color: '#6A7BB4' }}>MUSIC</span><br />
        <span style={{ color: '#86CCCA' }}>DESIGN</span> <span style={{ color: '#FFCE5C' }}>CHAOS</span>
      </h2>
      <p className="text-xl max-w-xl mb-12">
        Four days of boundary-pushing creativity. 50+ artists. Infinite possibilities.
      </p>
      <button className="px-10 py-5 text-xl font-black text-white"
        style={{ background: '#FF71CE', boxShadow: '8px 8px 0 #6A7BB4' }}>
        GET TICKETS ↗
      </button>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8 relative z-10">
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { day: 'FRI', title: 'Opening Night', color: '#FF71CE' },
          { day: 'SAT', title: 'Main Stage', color: '#FFCE5C' },
          { day: 'SUN', title: 'Workshops', color: '#86CCCA' },
          { day: 'MON', title: 'Closing Party', color: '#6A7BB4' },
        ].map((event, i) => (
          <div key={i} className="p-6 text-white" style={{ background: event.color, transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>
            <p className="font-black text-sm opacity-80">{event.day}</p>
            <h3 className="text-2xl font-black mt-2">{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 relative z-10">
      <div className="p-8 border-4 border-black" style={{ background: '#FFCE5C', boxShadow: '12px 12px 0 #000' }}>
        <h3 className="text-3xl font-black mb-4">EARLY BIRD SPECIAL ★</h3>
        <p className="text-xl mb-6">Save 30% when you buy before May 1st!</p>
        <span className="text-4xl font-black">$149 → $99</span>
      </div>
    </section>
  </div>
);

// ============================================================================
// 27. VAPORWAVE - "PARADISE.FM" Lo-Fi Music Platform
// ============================================================================
const VaporwaveDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #FF71CE 0%, #01CDFE 50%, #B967FF 100%)' }}>
    <div className="absolute inset-0 opacity-30"
      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)' }} />
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8 relative z-10 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
        style={{ textShadow: '4px 4px 0 #B967FF, 8px 8px 0 #01CDFE', fontFamily: 'serif' }}>
        ＰＡＲＡＤＩＳＥ．ＦＭ
      </h1>
      <p className="text-white/80 text-xl">永遠の音楽 • Eternal Music</p>
    </header>
    <section className="max-w-4xl mx-auto px-8 py-8 relative z-10">
      <div className="p-8 rounded-lg text-center"
        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
        <div className="text-8xl mb-6">🌴</div>
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
          ＮＯＷ ＰＬＡＹＩＮＧ
        </h2>
        <p className="text-2xl text-white mb-2">ＳＵＮＳＥＴ ＤＲＥＡＭＳ</p>
        <p className="text-white/70">by リサフランク420</p>
        <div className="mt-8 flex justify-center gap-6">
          <button className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl hover:bg-white/30">⏮</button>
          <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl"
            style={{ color: '#B967FF', boxShadow: '0 0 40px rgba(255,255,255,0.5)' }}>▶</button>
          <button className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl hover:bg-white/30">⏭</button>
        </div>
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-8 py-8 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'serif' }}>
        ＴＯＰＰＬＡＹＬＩＳＴＳ
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'ＭＡＬＬ ＷＡＶＥ', tracks: '24 tracks', emoji: '🛒' },
          { title: 'ＬＡＴＥ ＮＩＧＨＴ', tracks: '32 tracks', emoji: '🌙' },
          { title: 'ＯＣＥＡＮ ＤＲＩＶＥ', tracks: '18 tracks', emoji: '🌊' },
        ].map((playlist, i) => (
          <div key={i} className="p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
            style={{ background: 'rgba(255,255,255,0.2)' }}>
            <div className="text-5xl mb-4">{playlist.emoji}</div>
            <h4 className="text-white font-bold" style={{ fontFamily: 'serif' }}>{playlist.title}</h4>
            <p className="text-white/60 text-sm">{playlist.tracks}</p>
          </div>
        ))}
      </div>
    </section>
    <footer className="text-center py-8 relative z-10">
      <p className="text-white/50" style={{ fontFamily: 'serif' }}>© １９８９ ＰＡＲＡＤＩＳＥ ＣＯＲＰ</p>
    </footer>
  </div>
);

// ============================================================================
// 28. DIMENSIONAL LAYERING - "Layers" Project Management
// ============================================================================
const DimensionalDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-100">
    <header className="max-w-6xl mx-auto px-8 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">L</div>
          <span className="text-xl font-semibold text-gray-900">Layers</span>
        </div>
        <div className="flex gap-6">
          {['Projects', 'Team', 'Calendar', 'Settings'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-8">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-200 rounded-3xl" style={{ zIndex: 1 }} />
        <div className="absolute -top-2 -left-2 w-full h-full bg-indigo-100 rounded-3xl" style={{ zIndex: 2 }} />
        <div className="relative bg-white rounded-3xl p-8 shadow-xl" style={{ zIndex: 3 }}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Launch Q4</h1>
              <p className="text-gray-500 mt-1">Marketing Campaign • 12 tasks remaining</p>
            </div>
            <div className="flex -space-x-2">
              {['bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, i) => (
                <div key={i} className={`w-10 h-10 ${color} rounded-full border-2 border-white`} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {['To Do', 'In Progress', 'Done'].map((status, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-700 mb-4">{status}</h3>
                <div className="space-y-4">
                  {[1, 2].map((j) => (
                    <div key={j} className="relative">
                      <div className="absolute -bottom-1 -right-1 w-full h-full bg-gray-200 rounded-xl" />
                      <div className="relative bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900">Task {i * 2 + j}</h4>
                        <p className="text-sm text-gray-500 mt-1">Due in {j + i} days</p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Design</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

// ============================================================================
// 29. EXAGGERATED MINIMALISM - "VOID" Architecture Studio
// ============================================================================
const ExaggeratedMinimalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    <header className="max-w-7xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <span className="text-xl tracking-widest">VOID</span>
        <div className="hidden sm:flex gap-8 text-sm tracking-widest">
          {['WORK', 'ABOUT', 'CONTACT'].map((item) => (
            <a key={item} href="#" className="hover:line-through">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <main className="max-w-7xl mx-auto px-8 py-24">
      <h1 className="text-[12vw] font-black leading-[0.85] tracking-tight text-black mb-24">
        SPACE<br />
        IS<br />
        <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>EVERYTHING</span>
      </h1>
      <div className="flex justify-between items-end">
        <p className="text-xl max-w-sm text-gray-600">
          We create architecture that breathes. 
          Minimal intervention. Maximum impact.
        </p>
        <button className="px-12 py-6 border-2 border-black text-black font-bold tracking-widest hover:bg-black hover:text-white transition-colors">
          VIEW PROJECTS
        </button>
      </div>
    </main>
    <section className="max-w-7xl mx-auto px-8 py-24 border-t-2 border-black">
      <div className="grid grid-cols-2 gap-24">
        <div>
          <span className="text-9xl font-black text-gray-200">01</span>
          <h3 className="text-4xl font-bold mt-8 mb-4">Tokyo Residence</h3>
          <p className="text-gray-600">A home that dissolves the boundary between inside and outside.</p>
        </div>
        <div>
          <span className="text-9xl font-black text-gray-200">02</span>
          <h3 className="text-4xl font-bold mt-8 mb-4">Oslo Pavilion</h3>
          <p className="text-gray-600">Pure geometry in dialogue with the Nordic landscape.</p>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 30. KINETIC TYPOGRAPHY - "MOTION" Creative Studio
// ============================================================================
const KineticTypographyDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-black text-white overflow-hidden">
    <style>{`
      @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes typewriter { from { width: 0; } to { width: 100%; } }
      .marquee { animation: slide 20s linear infinite; }
    `}</style>
    <header className="max-w-6xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <span className="text-2xl font-bold">MOTION</span>
        <div className="flex gap-6">
          {['Work', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:opacity-50">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="py-24 overflow-hidden">
      <div className="whitespace-nowrap marquee">
        <span className="text-[15vw] font-black inline-block">
          WE CREATE MOTION • WE CREATE EMOTION • WE CREATE MOTION • WE CREATE EMOTION •
        </span>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-6xl font-bold mb-8 overflow-hidden">
        <span className="inline-block" style={{ animation: 'typewriter 2s steps(20) forwards' }}>
          Design that moves.
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        We are a motion design studio that brings brands to life through animation, 
        visual effects, and kinetic experiences.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Brand Animation', desc: 'Logos that breathe and move' },
          { title: 'UI Motion', desc: 'Interfaces that feel alive' },
          { title: 'Title Sequences', desc: 'Stories told in seconds' },
          { title: 'Social Content', desc: 'Scroll-stopping moments' },
        ].map((service, i) => (
          <div key={i} className="p-8 border border-gray-800 hover:border-white transition-colors group">
            <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-4 transition-transform">{service.title}</h3>
            <p className="text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 31. PARALLAX STORYTELLING - "Journey" Brand Story
// ============================================================================
const ParallaxDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#1A1A2E' }}>
    <div className="fixed inset-0 pt-16 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
      <div className="text-[30vw] font-black text-white/5">STORY</div>
    </div>
    <div className="relative z-10">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="text-pink-500 uppercase tracking-widest mb-4">Scroll to discover</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">Our Journey</h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            From a small garage in San Francisco to serving millions worldwide. This is our story.
          </p>
          <div className="mt-12 animate-bounce">
            <span className="text-4xl">↓</span>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center px-8" style={{ background: 'linear-gradient(180deg, transparent, rgba(233,69,96,0.2))' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-pink-500 text-9xl font-black opacity-50">01</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">The Beginning</h2>
            <p className="text-gray-400 text-lg">
              In 2015, three friends with a shared vision started building something different. 
              No investors, no fancy office—just passion and purpose.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl" />
        </div>
      </section>
      <section className="min-h-screen flex items-center px-8" style={{ background: 'linear-gradient(180deg, rgba(233,69,96,0.2), rgba(15,52,96,0.5))' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <span className="text-blue-500 text-9xl font-black opacity-50">02</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">The Growth</h2>
            <p className="text-gray-400 text-lg">
              By 2020, we had 1 million users. Not through growth hacks or viral marketing, 
              but by building something people actually love.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center px-8 text-center" style={{ background: 'rgba(15,52,96,0.5)' }}>
        <div>
          <span className="text-white text-9xl font-black opacity-50">∞</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">The Future</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
            This is just the beginning. Join us as we write the next chapter together.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-full">
            Join Our Journey
          </button>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 32. SWISS MODERNISM 2.0 - "Ratio" Design System
// ============================================================================
const SwissModernism2Demo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    <header className="max-w-6xl mx-auto px-8 py-8 border-b border-gray-200">
      <nav className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2">
          <span className="text-2xl font-bold tracking-tight">ratio.</span>
        </div>
        <div className="col-span-8 flex justify-center gap-8">
          {['Components', 'Guidelines', 'Resources', 'Changelog'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="col-span-2 text-right">
          <button className="px-4 py-2 bg-black text-white text-sm">Get Started</button>
        </div>
      </nav>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <p className="text-red-600 font-medium mb-4">Version 3.0</p>
          <h1 className="text-6xl font-bold leading-tight mb-8">
            A systematic approach to modern interface design.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ratio is a comprehensive design system built on mathematical principles, 
            typographic scales, and grid-based layouts.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white font-medium">Read Documentation</button>
            <button className="px-6 py-3 border border-black text-black font-medium">View on GitHub</button>
          </div>
        </div>
        <div className="col-span-4">
          <div className="space-y-4">
            <div className="h-32 bg-black rounded" />
            <div className="h-20 bg-red-600 rounded" />
            <div className="h-16 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </main>
    <section className="max-w-6xl mx-auto px-8 py-16 border-t border-gray-200">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <span className="text-sm text-gray-500 font-medium">01</span>
          <h3 className="text-2xl font-bold mt-2 mb-4">Grid System</h3>
          <p className="text-gray-600">12-column responsive grid with mathematical spacing scale.</p>
        </div>
        <div className="col-span-4">
          <span className="text-sm text-gray-500 font-medium">02</span>
          <h3 className="text-2xl font-bold mt-2 mb-4">Typography</h3>
          <p className="text-gray-600">Modular scale based on perfect fourth (1.333) ratio.</p>
        </div>
        <div className="col-span-4">
          <span className="text-sm text-gray-500 font-medium">03</span>
          <h3 className="text-2xl font-bold mt-2 mb-4">Components</h3>
          <p className="text-gray-600">60+ accessible components following systematic principles.</p>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 33. HUD / SCI-FI FUI - "ORBITAL" Space Operations
// ============================================================================
const HUDSciFiDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative" style={{ background: '#0A0F1C' }}>
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    <header className="max-w-6xl mx-auto px-8 py-6 relative z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#00FFFF', boxShadow: '0 0 10px #00FFFF' }} />
          <span className="font-mono text-cyan-400 tracking-widest">ORBITAL COMMAND</span>
        </div>
        <div className="font-mono text-cyan-400/60 text-sm">
          MISSION TIME: 047:23:15
        </div>
      </div>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-8 relative z-10">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'ALTITUDE', value: '408 KM', status: 'NOMINAL' },
          { label: 'VELOCITY', value: '7.66 KM/S', status: 'OPTIMAL' },
          { label: 'CREW STATUS', value: '6 ACTIVE', status: 'HEALTHY' },
        ].map((stat, i) => (
          <div key={i} className="p-6 border relative overflow-hidden" style={{ borderColor: 'rgba(0,255,255,0.3)', background: 'rgba(0,255,255,0.05)' }}>
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r" style={{ borderColor: 'rgba(0,255,255,0.5)' }} />
            <p className="font-mono text-cyan-400/60 text-xs tracking-widest">{stat.label}</p>
            <p className="font-mono text-3xl text-cyan-400 mt-2" style={{ textShadow: '0 0 10px rgba(0,255,255,0.5)' }}>{stat.value}</p>
            <p className="font-mono text-xs text-green-400 mt-2">● {stat.status}</p>
          </div>
        ))}
      </div>
      <div className="p-8 border relative" style={{ borderColor: 'rgba(0,255,255,0.3)', background: 'rgba(0,255,255,0.02)' }}>
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l" style={{ borderColor: '#00FFFF' }} />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r" style={{ borderColor: '#00FFFF' }} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l" style={{ borderColor: '#00FFFF' }} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r" style={{ borderColor: '#00FFFF' }} />
        <div className="text-center">
          <p className="font-mono text-cyan-400/60 text-sm mb-4">ORBITAL TRAJECTORY</p>
          <div className="w-64 h-64 mx-auto rounded-full border-2 relative" style={{ borderColor: 'rgba(0,255,255,0.3)' }}>
            <div className="absolute inset-4 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.2)' }} />
            <div className="absolute inset-8 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.1)' }} />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: '#00FFFF', boxShadow: '0 0 20px #00FFFF' }} />
            <div className="absolute top-4 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-8 py-3 font-mono text-cyan-400 border" style={{ borderColor: 'rgba(0,255,255,0.5)', background: 'rgba(0,255,255,0.1)' }}>
          [ DOCK ]
        </button>
        <button className="px-8 py-3 font-mono text-white" style={{ background: '#00FFFF', color: '#0A0F1C' }}>
          [ LAUNCH ]
        </button>
      </div>
    </main>
  </div>
);

// ============================================================================
// 34. PIXEL ART - "8-BIT QUEST" Retro Game Platform
// ============================================================================
const PixelArtDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0F0F23', imageRendering: 'pixelated' }}>
    <style>{`
      @font-face { font-family: 'PixelFont'; src: local('Courier New'); }
      * { font-family: 'Courier New', monospace; }
      .pixel-border { box-shadow: 4px 0 0 #FFF, -4px 0 0 #FFF, 0 4px 0 #FFF, 0 -4px 0 #FFF, 4px 4px 0 #FFF, -4px -4px 0 #FFF, 4px -4px 0 #FFF, -4px 4px 0 #FFF; }
    `}</style>
    <header className="max-w-4xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">★ 8-BIT QUEST ★</h1>
        <div className="flex gap-6 text-sm">
          {['PLAY', 'SHOP', 'SCORES'].map((item) => (
            <a key={item} href="#" className="text-white hover:text-yellow-400">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-4xl mx-auto px-8 py-12 text-center">
      <div className="text-6xl mb-8">🎮</div>
      <h2 className="text-4xl font-bold text-white mb-4" style={{ textShadow: '4px 4px 0 #FF0000' }}>
        CLASSIC GAMES
      </h2>
      <p className="text-green-400 mb-8">PRESS START TO CONTINUE</p>
      <div className="inline-block p-6 bg-blue-900" style={{ boxShadow: '8px 8px 0 #000' }}>
        <p className="text-white text-xl">HIGH SCORE: 999,999</p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-8 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'SPACE BLASTER', color: 'bg-red-600', emoji: '🚀' },
          { title: 'DUNGEON CRAWL', color: 'bg-green-600', emoji: '🗡️' },
          { title: 'PIXEL RACER', color: 'bg-blue-600', emoji: '🏎️' },
        ].map((game, i) => (
          <div key={i} className={`${game.color} p-6 text-center`} style={{ boxShadow: '8px 8px 0 #000' }}>
            <div className="text-5xl mb-4">{game.emoji}</div>
            <h3 className="text-white font-bold mb-2">{game.title}</h3>
            <button className="px-4 py-2 bg-yellow-400 text-black font-bold text-sm mt-4"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              PLAY NOW
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-8 py-12 text-center">
      <div className="inline-block p-8 bg-purple-900" style={{ boxShadow: '8px 8px 0 #000' }}>
        <p className="text-yellow-400 text-xl mb-4">★ DAILY CHALLENGE ★</p>
        <p className="text-white mb-4">Beat today's level for bonus coins!</p>
        <p className="text-green-400 text-3xl font-bold">+500 🪙</p>
      </div>
    </section>
  </div>
);

// ============================================================================
// 35. BENTO GRIDS - "Craft" Personal Portfolio
// ============================================================================
const BentoGridsDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5F7' }}>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-4xl font-semibold text-gray-900">Sarah Chen</h1>
      <p className="text-gray-500 mt-2">Product Designer • San Francisco</p>
    </header>
    <main className="max-w-5xl mx-auto px-4 sm:px-8 py-4">
      <div className="grid grid-cols-4 gap-4 auto-rows-[140px]">
        <div className="col-span-2 row-span-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 flex flex-col justify-between text-white">
          <div>
            <p className="text-white/70 text-sm">Featured Project</p>
            <h3 className="text-2xl font-semibold mt-2">Fintech App Redesign</h3>
          </div>
          <p className="text-white/80">A complete overhaul of a banking app serving 2M+ users</p>
        </div>
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-sm">
          <span className="text-3xl">📧</span>
          <p className="text-sm text-gray-600">hello@sarah.design</p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between text-white">
          <span className="text-3xl">🎯</span>
          <p className="text-sm">10 years experience</p>
        </div>
        <div className="col-span-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-6 flex items-center justify-between text-white">
          <div>
            <p className="text-white/80 text-sm">Latest Article</p>
            <h3 className="font-semibold mt-1">Design Systems at Scale</h3>
          </div>
          <span className="text-4xl">📝</span>
        </div>
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm">
          <p className="text-4xl font-bold text-gray-900">50+</p>
          <p className="text-sm text-gray-500 mt-1">Projects</p>
        </div>
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-sm">
          <span className="text-3xl">🐦</span>
          <p className="text-sm text-gray-600">@sarahdesigns</p>
        </div>
        <div className="col-span-2 bg-blue-500 rounded-3xl p-6 flex items-center gap-4 text-white">
          <span className="text-5xl">💼</span>
          <div>
            <p className="font-semibold">Open to opportunities</p>
            <p className="text-white/80 text-sm">Senior Product Design roles</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm">
          <span className="text-3xl">🏆</span>
          <p className="text-sm text-gray-600 mt-2">3x Awwwards</p>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 flex flex-col justify-between text-white">
          <span className="text-3xl">🎨</span>
          <p className="text-sm">View Dribbble</p>
        </div>
      </div>
    </main>
  </div>
);

// ============================================================================
// 36. SPATIAL UI (VISIONOS) - "Atmosphere" Meditation Experience
// ============================================================================
const SpatialUIDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-8 py-12">
      <header className="text-center mb-16">
        <div className="inline-block px-8 py-4 rounded-3xl mb-8"
          style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(40px) saturate(180%)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <span className="text-white/80 text-sm">Now in Spatial Audio</span>
        </div>
        <h1 className="text-5xl font-semibold text-white mb-4">Atmosphere</h1>
        <p className="text-white/60">Immersive meditation for Vision Pro</p>
      </header>
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: 'Forest Sanctuary', duration: '20 min', icon: '🌲' },
          { title: 'Ocean Depths', duration: '15 min', icon: '🌊' },
          { title: 'Mountain Peak', duration: '25 min', icon: '🏔️' },
          { title: 'Night Sky', duration: '30 min', icon: '✨' },
        ].map((env, i) => (
          <div key={i} className="p-6 rounded-3xl cursor-pointer transition-transform hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(40px) saturate(180%)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span className="text-4xl">{env.icon}</span>
            <h3 className="text-xl font-medium text-white mt-4">{env.title}</h3>
            <p className="text-white/50 text-sm mt-1">{env.duration}</p>
          </div>
        ))}
      </section>
      <section className="p-8 rounded-3xl text-center"
        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(40px) saturate(180%)', border: '1px solid rgba(255,255,255,0.2)' }}>
        <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}>
          <span className="text-5xl">🧘</span>
        </div>
        <h2 className="text-2xl font-medium text-white mb-2">Ready to begin?</h2>
        <p className="text-white/60 mb-6">Put on your headset and enter a world of calm</p>
        <button className="px-8 py-4 rounded-full text-white font-medium"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          Start Session
        </button>
      </section>
    </div>
  </div>
);

// ============================================================================
// 37. E-INK / PAPER - "Chronicle" Digital Journal
// ============================================================================
const EInkDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#FDFBF7' }}>
    <header className="max-w-2xl mx-auto px-8 py-8 border-b-2 border-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold">Chronicle</h1>
        <span className="font-serif text-gray-600">December 15, 2025</span>
      </div>
    </header>
    <main className="max-w-2xl mx-auto px-8 py-12">
      <article className="font-serif">
        <h2 className="text-4xl font-bold mb-4 leading-tight">The Art of Slow Reading</h2>
        <p className="text-gray-600 mb-8">By Elena Marchetti • 8 min read</p>
        <p className="text-xl leading-relaxed mb-6 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          In an age of infinite scroll and endless notifications, there is a quiet revolution 
          brewing among readers who have chosen to slow down.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          They call it "slow reading"—a deliberate practice of engaging deeply with text, 
          savoring each sentence, and allowing ideas to marinate in the mind before moving on.
        </p>
        <blockquote className="border-l-4 border-gray-900 pl-6 my-8 italic text-xl">
          "A book is a garden carried in the pocket."
          <span className="block text-base mt-2 not-italic text-gray-600">— Chinese Proverb</span>
        </blockquote>
        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          The practice has roots in ancient contemplative traditions, but its modern revival 
          speaks to a growing hunger for depth in an increasingly shallow digital landscape.
        </p>
      </article>
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200 mt-12">
        <button className="font-serif text-gray-600 hover:text-black">← Previous</button>
        <button className="font-serif text-gray-600 hover:text-black">Next →</button>
      </div>
    </main>
    <footer className="max-w-2xl mx-auto px-8 py-8 text-center font-serif text-gray-500">
      <p>Read in peace. No ads. No tracking.</p>
    </footer>
  </div>
);

// ============================================================================
// 38. GEN Z CHAOS / MAXIMALISM - "UNHINGED" Fashion Drop
// ============================================================================
const GenZChaosDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#FFFF00' }}>
    <div className="absolute top-20 left-10 text-8xl rotate-12">🔥</div>
    <div className="absolute top-40 right-10 text-6xl -rotate-12">✨</div>
    <div className="absolute bottom-20 left-1/4 text-7xl rotate-45">👀</div>
    <div className="absolute top-1/2 right-1/4 text-5xl -rotate-6">💀</div>
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20zM20 0v20H0V0h20z\' fill=\'%23FF00FF\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")' }} />
    <header className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <h1 className="text-6xl font-black" style={{ transform: 'rotate(-2deg)', textShadow: '4px 4px 0 #FF00FF' }}>
        UNHINGED
      </h1>
    </header>
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="p-8" style={{ background: '#FF00FF', transform: 'rotate(1deg)', boxShadow: '8px 8px 0 #000' }}>
        <p className="text-white font-black text-xl mb-2">⚠️ LIMITED DROP ⚠️</p>
        <h2 className="text-5xl font-black text-white mb-4" style={{ textShadow: '3px 3px 0 #00FFFF' }}>
          CHAOS COLLECTION
        </h2>
        <p className="text-white text-xl">DROPS IN 00:47:23</p>
      </div>
    </section>
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'CHAOS TEE', price: '$69', bg: '#00FFFF' },
          { name: 'UNHINGED HOODIE', price: '$129', bg: '#FF6B6B' },
          { name: 'BRAIN ROT CAP', price: '$45', bg: '#00FF00' },
        ].map((item, i) => (
          <div key={i} className="p-6 text-center" style={{ background: item.bg, transform: `rotate(${i % 2 ? 2 : -2}deg)`, boxShadow: '6px 6px 0 #000' }}>
            <div className="text-6xl mb-4">👕</div>
            <h3 className="font-black text-xl mb-2">{item.name}</h3>
            <p className="font-black text-2xl">{item.price}</p>
            <button className="mt-4 px-6 py-2 bg-black text-white font-black">
              NEED IT
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="overflow-hidden whitespace-nowrap">
        <span className="inline-block animate-pulse text-4xl font-black" style={{ animationDuration: '0.5s' }}>
          NO REFUNDS • FINAL SALE • NO THOUGHTS • JUST VIBES • NO REFUNDS • FINAL SALE •
        </span>
      </div>
    </section>
  </div>
);

// ============================================================================
// 39. BIOMIMETIC / ORGANIC 2.0 - "Bloom" Biotech Platform
// ============================================================================
const BiomimeticDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #001E3C 0%, #0A2540 100%)' }}>
    <style>{`
      @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      .breathing { animation: breathe 4s ease-in-out infinite; }
    `}</style>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full breathing" style={{ background: 'linear-gradient(135deg, #00FF41, #00FFFF)' }} />
          <span className="text-xl font-medium text-white">Bloom</span>
        </div>
        <div className="flex gap-6">
          {['Research', 'Platform', 'About'].map((item) => (
            <a key={item} href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 text-center">
      <div className="w-40 h-40 mx-auto mb-12 rounded-full breathing"
        style={{ background: 'radial-gradient(circle, rgba(0,255,65,0.3) 0%, transparent 70%)', border: '2px solid rgba(0,255,65,0.5)' }}>
        <div className="w-full h-full rounded-full flex items-center justify-center"
          style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 60%)' }}>
          <span className="text-6xl">🧬</span>
        </div>
      </div>
      <h1 className="text-5xl font-light text-white mb-6">
        Life-inspired<br />
        <span style={{ color: '#00FF41' }}>technology</span>
      </h1>
      <p className="text-xl text-white/60 max-w-xl mx-auto mb-12">
        We study nature's 3.8 billion years of R&D to create sustainable solutions for humanity's greatest challenges.
      </p>
      <button className="px-8 py-4 rounded-full text-white font-medium"
        style={{ background: 'linear-gradient(135deg, rgba(0,255,65,0.3), rgba(0,255,255,0.3))', border: '1px solid rgba(0,255,65,0.5)' }}>
        Explore Our Research
      </button>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Cellular Computing', desc: 'Processing inspired by neural networks', icon: '🔬' },
          { title: 'Bio-materials', desc: 'Self-healing sustainable materials', icon: '🌱' },
          { title: 'Swarm Intelligence', desc: 'Collective problem-solving systems', icon: '🐝' },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-3xl breathing" style={{ background: 'rgba(0,255,65,0.05)', border: '1px solid rgba(0,255,65,0.2)', animationDelay: `${i * 0.5}s` }}>
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-xl text-white mt-4 mb-2">{item.title}</h3>
            <p className="text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 40. ANTI-POLISH / RAW AESTHETIC - "Sketch" Creative Portfolio
// ============================================================================
const AntiPolishDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#FAFAF8' }}>
    <style>{`
      .sketch-border { border: 2px solid #1A1A1A; border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; }
      .hand-drawn { font-family: 'Comic Sans MS', cursive, sans-serif; }
    `}</style>
    <header className="max-w-4xl mx-auto px-8 py-8">
      <h1 className="text-4xl hand-drawn" style={{ transform: 'rotate(-1deg)' }}>alex's portfolio ✏️</h1>
    </header>
    <main className="max-w-4xl mx-auto px-8 py-8">
      <section className="mb-16">
        <p className="text-xl text-gray-600 hand-drawn mb-8" style={{ transform: 'rotate(0.5deg)' }}>
          hi! i make things on the internet. sometimes they work. ¯\_(ツ)_/¯
        </p>
        <div className="sketch-border p-8" style={{ background: '#FFFEF0', transform: 'rotate(-0.5deg)' }}>
          <h2 className="text-2xl hand-drawn mb-4">about me</h2>
          <p className="hand-drawn text-gray-700">
            designer & developer based in brooklyn. i like making weird websites, 
            drinking too much coffee, and pretending i understand CSS grid.
          </p>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl hand-drawn mb-8" style={{ transform: 'rotate(1deg)' }}>selected work *</h2>
        <div className="space-y-6">
          {[
            { title: 'weird website #1', desc: 'a site that does... something?', year: '2024' },
            { title: 'app thing', desc: 'an app i made for fun', year: '2024' },
            { title: 'brand stuff', desc: 'logos and colors and fonts oh my', year: '2023' },
          ].map((work, i) => (
            <div key={i} className="sketch-border p-6 flex justify-between items-center"
              style={{ transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)`, background: i === 1 ? '#FFF9DB' : '#FFF' }}>
              <div>
                <h3 className="text-xl hand-drawn">{work.title}</h3>
                <p className="text-gray-600 hand-drawn">{work.desc}</p>
              </div>
              <span className="hand-drawn text-gray-400">{work.year}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="sketch-border p-8 text-center" style={{ background: '#F0FFF0', transform: 'rotate(0.5deg)' }}>
        <h2 className="text-2xl hand-drawn mb-4">wanna chat? 💬</h2>
        <p className="hand-drawn text-gray-700 mb-4">i'm always down to talk about projects, ideas, or just random stuff</p>
        <a href="mailto:alex@email.com" className="hand-drawn text-blue-600 underline">alex@email.com</a>
      </section>
    </main>
    <footer className="max-w-4xl mx-auto px-8 py-8 text-center">
      <p className="hand-drawn text-gray-400">made with ☕ and questionable decisions</p>
    </footer>
  </div>
);

// ============================================================================
// 41. TACTILE DIGITAL / DEFORMABLE UI - "Bounce" Social App
// ============================================================================
const TactileDigitalDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #E8F4F8 0%, #FFF5F5 100%)' }}>
    <style>{`
      .squishy:active { transform: scale(0.95); }
      .squishy { transition: transform 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
      .bouncy:hover { animation: bounce 0.5s; }
      @keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
    `}</style>
    <header className="max-w-md mx-auto px-6 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: '#FF6B6B' }}>Bounce</h1>
        <div className="w-10 h-10 rounded-full squishy cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)', boxShadow: '0 4px 12px rgba(255,107,107,0.3)' }} />
      </div>
    </header>
    <main className="max-w-md mx-auto px-6 py-4 space-y-4">
      <div className="p-6 rounded-3xl squishy cursor-pointer"
        style={{ background: '#FFF', boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 -4px 0 rgba(0,0,0,0.05)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bouncy"
            style={{ background: 'linear-gradient(135deg, #87CEEB, #4ECDC4)' }} />
          <div>
            <p className="font-semibold">Jamie Park</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">Just discovered this amazing coffee shop! The vibes are immaculate ✨☕</p>
        <div className="flex gap-3">
          {[{ emoji: '❤️', count: 42 }, { emoji: '💬', count: 8 }, { emoji: '🔄', count: 3 }].map((action, i) => (
            <button key={i} className="px-4 py-2 rounded-full flex items-center gap-2 squishy"
              style={{ background: '#F5F5F5' }}>
              <span className="bouncy inline-block">{action.emoji}</span>
              <span className="text-sm text-gray-600">{action.count}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-3xl squishy cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)', boxShadow: '0 10px 30px rgba(255,230,109,0.3)' }}>
        <p className="text-white font-semibold mb-2">🎉 Weekend Challenge!</p>
        <p className="text-white/90">Share 3 things that made you smile today</p>
        <button className="mt-4 px-6 py-3 bg-white rounded-full font-semibold squishy"
          style={{ color: '#FF6B6B' }}>
          Join Challenge
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['🎨', '📸', '🎵'].map((icon, i) => (
          <button key={i} className="aspect-square rounded-2xl flex items-center justify-center text-3xl squishy bouncy"
            style={{ background: '#FFF', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}>
            {icon}
          </button>
        ))}
      </div>
    </main>
    <nav className="fixed bottom-0 left-0 right-0 bg-white px-8 py-4">
      <div className="max-w-md mx-auto flex justify-around">
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <button key={i} className={`w-12 h-12 rounded-full flex items-center justify-center text-xl squishy bouncy ${i === 2 ? 'text-white' : ''}`}
            style={i === 2 ? { background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)', boxShadow: '0 4px 12px rgba(255,107,107,0.4)' } : {}}>
            {icon}
          </button>
        ))}
      </div>
    </nav>
  </div>
);

// ============================================================================
// 42. NATURE DISTILLED - "Terra" Sustainable Goods
// ============================================================================
const NatureDistilledDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F0E1' }}>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-serif" style={{ color: '#5D4E37' }}>Terra</h1>
        <div className="flex gap-6">
          {['Shop', 'About', 'Journal'].map((item) => (
            <a key={item} href="#" className="text-sm" style={{ color: '#8B7355' }}>{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="text-5xl font-serif mb-6" style={{ color: '#5D4E37' }}>
        Goods from<br />the earth
      </h2>
      <p className="text-xl max-w-xl mb-12" style={{ color: '#8B7355' }}>
        Handcrafted essentials made with sustainable materials and traditional techniques. 
        Every piece tells a story.
      </p>
      <button className="px-8 py-4 rounded-full font-medium"
        style={{ background: '#C67B5C', color: '#FFF' }}>
        Explore Collection
      </button>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Ceramic Vase', price: '$89', material: 'Hand-thrown clay' },
          { name: 'Linen Throw', price: '$145', material: 'Organic linen' },
          { name: 'Wooden Bowl', price: '$65', material: 'Reclaimed oak' },
        ].map((product, i) => (
          <div key={i} className="group">
            <div className="aspect-square rounded-2xl mb-4 flex items-center justify-center"
              style={{ background: '#E8DFD0' }}>
              <span className="text-6xl group-hover:scale-110 transition-transform">
                {i === 0 ? '🏺' : i === 1 ? '🧣' : '🥣'}
              </span>
            </div>
            <h3 className="font-serif text-lg" style={{ color: '#5D4E37' }}>{product.name}</h3>
            <p className="text-sm" style={{ color: '#8B7355' }}>{product.material}</p>
            <p className="font-medium mt-2" style={{ color: '#C67B5C' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <div className="p-12 rounded-3xl" style={{ background: '#E8DFD0' }}>
        <div className="max-w-xl">
          <h3 className="text-3xl font-serif mb-4" style={{ color: '#5D4E37' }}>Our Promise</h3>
          <p className="text-lg" style={{ color: '#8B7355' }}>
            Every Terra product is made to last, sourced responsibly, and crafted by artisans 
            who are paid fairly. When you choose Terra, you choose a better way.
          </p>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 43. INTERACTIVE CURSOR DESIGN - "Studio" Creative Agency
// ============================================================================
const InteractiveCursorDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gray-900 text-white">
    <style>{`
      .cursor-hover:hover { cursor: none; }
      .magnetic:hover { transform: scale(1.1); }
      .reveal:hover span { transform: translateY(0); }
      .reveal span { transform: translateY(100%); transition: transform 0.3s; }
    `}</style>
    <header className="max-w-6xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <span className="text-2xl font-bold magnetic transition-transform">STUDIO</span>
        <div className="flex gap-8">
          {['Work', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="magnetic transition-transform hover:text-pink-500">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-24">
      <h1 className="text-7xl font-bold mb-8 leading-tight">
        We create<br />
        <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>experiences</span><br />
        that matter
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        A creative agency specializing in digital experiences, brand identity, and interactive design.
      </p>
      <div className="inline-block">
        <button className="group px-8 py-4 border-2 border-white rounded-full magnetic transition-all hover:bg-white hover:text-gray-900 overflow-hidden">
          <span className="flex items-center gap-2">
            View Our Work
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </span>
        </button>
      </div>
    </main>
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Nike Campaign', type: 'Digital Experience' },
          { title: 'Spotify Redesign', type: 'Brand Identity' },
          { title: 'Apple Launch', type: 'Interactive' },
          { title: 'Google Doodle', type: 'Animation' },
        ].map((project, i) => (
          <div key={i} className="group p-8 border border-gray-800 rounded-2xl cursor-none cursor-hover magnetic transition-all hover:border-pink-500 hover:bg-pink-500/10">
            <p className="text-gray-500 text-sm mb-2">{project.type}</p>
            <h3 className="text-2xl font-bold group-hover:text-pink-500 transition-colors">{project.title}</h3>
            <div className="mt-4 overflow-hidden reveal">
              <span className="inline-block text-pink-500">View Project →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 44. VOICE-FIRST MULTIMODAL - "Aria" Voice Assistant
// ============================================================================
const VoiceFirstDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
    <style>{`
      @keyframes wave { 0%, 100% { height: 20px; } 50% { height: 40px; } }
      .wave { animation: wave 1s ease-in-out infinite; }
    `}</style>
    <header className="px-8 py-6">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <span className="font-semibold text-gray-800">Aria</span>
        <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">⚙️</button>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-8">
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl">
          <div className="flex gap-1 items-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-2 bg-white rounded wave" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
        <h2 className="text-2xl text-gray-800 mb-2">Listening...</h2>
        <p className="text-gray-500">Say "Hey Aria" to start</p>
      </div>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0" />
            <div>
              <p className="text-gray-800 mb-3">
                "Good morning! It's 72°F and sunny today. You have 3 meetings scheduled. 
                Would you like me to summarize them?"
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Yes, please
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>Try saying:</p>
          <p className="mt-2">"What's on my calendar?" • "Play some music" • "Set a reminder"</p>
        </div>
      </div>
    </main>
    <footer className="px-8 py-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
          <button className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
            🎤
          </button>
          <input type="text" placeholder="Or type a message..." 
            className="flex-1 bg-transparent outline-none text-gray-800" />
        </div>
      </div>
    </footer>
  </div>
);

// ============================================================================
// 45. 3D PRODUCT PREVIEW - "Luxe" Watch Store
// ============================================================================
const ThreeDProductDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F8F8F8' }}>
    <header className="max-w-6xl mx-auto px-8 py-6">
      <nav className="flex justify-between items-center">
        <span className="text-2xl font-light tracking-widest">LUXE</span>
        <div className="flex gap-6 text-sm">
          {['Collections', 'About', 'Stores'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-black">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center relative overflow-hidden">
          <div className="text-[200px] transform hover:rotate-12 transition-transform duration-500 cursor-grab">
            ⌚
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">↻</button>
            <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">⊕</button>
            <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">📸</button>
          </div>
          <p className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Heritage Collection</p>
          <h1 className="text-4xl font-light mb-4">Chronograph Elite</h1>
          <p className="text-gray-600 mb-8">
            Crafted with Swiss precision, the Chronograph Elite features a 42mm 
            stainless steel case, sapphire crystal, and automatic movement with 
            72-hour power reserve.
          </p>
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-3">Select Case</p>
            <div className="flex gap-3">
              {['Silver', 'Gold', 'Black'].map((color, i) => (
                <button key={color} className={`w-10 h-10 rounded-full border-2 ${i === 0 ? 'border-black' : 'border-gray-200'}`}
                  style={{ background: i === 0 ? '#C0C0C0' : i === 1 ? '#FFD700' : '#1A1A1A' }} />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-3">Select Strap</p>
            <div className="flex gap-3">
              {['Leather', 'Metal', 'Rubber'].map((strap, i) => (
                <button key={strap} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {strap}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <span className="text-3xl font-light">$4,500</span>
            <button className="px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
              <span>View in AR</span>
              <span>📱</span>
            </button>
          </div>
          <button className="w-full py-4 bg-black text-white font-medium rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  </div>
);

// ============================================================================
// 46. GRADIENT MESH / AURORA EVOLVED - "Prism" Creative Studio
// ============================================================================
const GradientMeshDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden">
    <style>{`
      @keyframes aurora { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    `}</style>
    <div className="absolute inset-0"
      style={{
        background: 'linear-gradient(-45deg, #00FFFF, #FF00FF, #FFFF00, #0066FF, #00FF66, #FF6B6B)',
        backgroundSize: '400% 400%',
        animation: 'aurora 15s ease infinite'
      }} />
    <div className="absolute inset-0 backdrop-blur-3xl" style={{ background: 'rgba(255,255,255,0.1)' }} />
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
      <header className="py-8">
        <nav className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white drop-shadow-lg">Prism</span>
          <div className="flex gap-6">
            {['Work', 'Services', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white/80 hover:text-white">{item}</a>
            ))}
          </div>
        </nav>
      </header>
      <section className="py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
          Color is<br />everything
        </h1>
        <p className="text-xl text-white/80 max-w-xl mx-auto mb-12">
          We craft visual experiences that captivate, engage, and inspire. 
          Let's paint something beautiful together.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
            Start a Project
          </button>
          <button className="px-8 py-4 bg-white/20 text-white rounded-full font-semibold backdrop-blur border border-white/30 hover:bg-white/30 transition-colors">
            View Work
          </button>
        </div>
      </section>
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Brand Identity', count: '50+ projects' },
            { title: 'Web Design', count: '80+ sites' },
            { title: 'Motion', count: '30+ videos' },
          ].map((service, i) => (
            <div key={i} className="p-8 rounded-3xl backdrop-blur"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white/60">{service.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 47. EDITORIAL GRID / MAGAZINE - "Slate" Online Magazine
// ============================================================================
const EditorialGridDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-white">
    <header className="border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-black">SLATE</h1>
          <div className="flex gap-6 text-sm font-medium">
            {['Culture', 'Tech', 'Design', 'Opinion'].map((cat) => (
              <a key={cat} href="#" className="hover:underline underline-offset-4">{cat}</a>
            ))}
          </div>
        </div>
      </div>
    </header>
    <main className="max-w-6xl mx-auto px-8 py-12">
      <div className="grid grid-cols-12 gap-8">
        <article className="col-span-8 border-b-2 border-gray-200 pb-8 mb-8">
          <span className="text-red-600 font-bold text-sm uppercase">Featured</span>
          <h2 className="text-5xl font-bold mt-4 mb-4 leading-tight">
            The Future of Design is Already Here—We Just Don't See It
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            How emerging technologies are quietly reshaping the creative industry, 
            and why most designers are missing the revolution.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div>
              <p className="font-semibold">Marcus Chen</p>
              <p className="text-sm text-gray-500">December 15, 2025 • 12 min read</p>
            </div>
          </div>
        </article>
        <aside className="col-span-4">
          <h3 className="font-bold text-sm uppercase mb-6 border-b-2 border-black pb-2">Most Read</h3>
          <div className="space-y-6">
            {[
              { num: '01', title: 'Why Silicon Valley is Betting on Spatial Computing' },
              { num: '02', title: 'The Death of the Homepage (And What Comes Next)' },
              { num: '03', title: "Inside Apple's Secret Design Lab" },
            ].map((article, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-3xl font-black text-gray-200">{article.num}</span>
                <p className="font-semibold hover:underline cursor-pointer">{article.title}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <section className="grid grid-cols-3 gap-8 border-t-2 border-black pt-8">
        {[
          { cat: 'Culture', title: 'How Gen Z is Redefining Luxury', author: 'Sofia Rivera' },
          { cat: 'Tech', title: 'The AI Tools Every Designer Needs in 2025', author: 'James Liu' },
          { cat: 'Opinion', title: 'Minimalism is Dead. Long Live Maximalism.', author: 'Elena Park' },
        ].map((article, i) => (
          <article key={i}>
            <span className="text-red-600 font-bold text-xs uppercase">{article.cat}</span>
            <h3 className="text-xl font-bold mt-2 mb-3 hover:underline cursor-pointer">{article.title}</h3>
            <p className="text-sm text-gray-500">{article.author}</p>
          </article>
        ))}
      </section>
    </main>
  </div>
);

// ============================================================================
// 48. CHROMATIC ABERRATION / RGB SPLIT - "Glitch" Music Label
// ============================================================================
const ChromaticDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0A0A0A' }}>
    <style>{`
      @keyframes rgbSplit { 0%, 100% { text-shadow: -2px 0 #FF0000, 2px 0 #00FFFF; } 50% { text-shadow: 2px 0 #FF0000, -2px 0 #00FFFF; } }
      @keyframes glitch { 0%, 90%, 100% { transform: translate(0); } 92% { transform: translate(-2px, 1px); } 94% { transform: translate(2px, -1px); } 96% { transform: translate(-1px, 2px); } 98% { transform: translate(1px, -2px); } }
      .rgb-text { animation: rgbSplit 0.5s infinite; }
      .glitch-hover:hover { animation: glitch 0.3s infinite; }
    `}</style>
    <header className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-white rgb-text">GLITCH</h1>
        <div className="flex gap-6">
          {['Artists', 'Releases', 'Events', 'Shop'].map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-white glitch-hover">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 text-center">
      <p className="text-gray-500 mb-4">NEW RELEASE</p>
      <h2 className="text-6xl md:text-8xl font-black text-white mb-8 rgb-text">
        SYSTEM<br />ERROR
      </h2>
      <p className="text-xl text-gray-400 max-w-xl mx-auto mb-12">
        The debut album from VOID_WALKER. 12 tracks of pure electronic chaos.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-black font-bold glitch-hover">
          STREAM NOW
        </button>
        <button className="px-8 py-4 border border-white text-white font-bold glitch-hover"
          style={{ textShadow: '-1px 0 #FF0000, 1px 0 #00FFFF' }}>
          PRE-ORDER VINYL
        </button>
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
      <h3 className="text-xl font-bold text-white mb-6 rgb-text">LATEST RELEASES</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Digital Decay', artist: 'CIRCUIT_BREAKER' },
          { title: 'Neon Nights', artist: 'SYNTH_GHOST' },
          { title: 'Data Stream', artist: 'PIXEL_WITCH' },
        ].map((release, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-square mb-4 relative overflow-hidden"
              style={{ background: `linear-gradient(${45 + i * 30}deg, #FF0000, #00FF00, #0000FF)`, filter: 'saturate(0.8)' }}>
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
                🎵
              </div>
            </div>
            <h4 className="font-bold text-white glitch-hover">{release.title}</h4>
            <p className="text-gray-500 text-sm">{release.artist}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 49. VINTAGE ANALOG / RETRO FILM - "Analog" Photography Portfolio
// ============================================================================
const VintageAnalogDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative" style={{ background: '#F5E6C8' }}>
    <div className="absolute inset-0 opacity-30 pointer-events-none"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
    <header className="relative z-10 max-w-4xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-serif" style={{ color: '#5D4037' }}>analog</h1>
        <div className="flex gap-6 font-serif">
          {['Gallery', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" style={{ color: '#8D6E63' }} className="hover:underline">{item}</a>
          ))}
        </div>
      </nav>
    </header>
    <main className="relative z-10 max-w-4xl mx-auto px-8 py-12">
      <section className="text-center mb-16">
        <h2 className="text-5xl font-serif mb-6" style={{ color: '#4E342E' }}>
          Capturing moments<br />on film
        </h2>
        <p className="text-xl font-serif max-w-xl mx-auto" style={{ color: '#8D6E63' }}>
          A collection of photographs shot exclusively on 35mm and medium format film. 
          No digital. No filters. Just light and chemistry.
        </p>
      </section>
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative group cursor-pointer">
            <div className="aspect-[4/3] flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(${i * 45}deg, #D4A574, #8B7355)`,
                filter: 'sepia(0.3) contrast(0.9) saturate(0.8)',
                border: '8px solid #FFF',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}>
              📷
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-serif text-sm" style={{ color: '#5D4037' }}>Kodak Portra 400 • Contax G2</p>
            </div>
          </div>
        ))}
      </section>
      <section className="p-8 text-center" style={{ background: 'rgba(255,255,255,0.5)' }}>
        <h3 className="text-2xl font-serif mb-4" style={{ color: '#4E342E' }}>Equipment</h3>
        <div className="flex justify-center gap-8 font-serif" style={{ color: '#8D6E63' }}>
          <span>Leica M6</span>
          <span>•</span>
          <span>Hasselblad 500C</span>
          <span>•</span>
          <span>Contax G2</span>
        </div>
      </section>
    </main>
    <footer className="relative z-10 text-center py-8 font-serif" style={{ color: '#A1887F' }}>
      <p>Shot on film since 2015</p>
    </footer>
  </div>
);

// Map all demos to their slugs
const styleDemos: Record<string, React.FC<StyleDemoProps>> = {
  'minimalism-swiss-style': MinimalismDemo,
  'neumorphism': NeumorphismDemo,
  'glassmorphism': GlassmorphismDemo,
  'brutalism': BrutalismDemo,
  '3d-hyperrealism': ThreeDDemo,
  'vibrant-block-based': VibrantDemo,
  'dark-mode-oled': DarkModeDemo,
  'accessible-ethical': AccessibleDemo,
  'claymorphism': ClaymorphismDemo,
  'aurora-ui': AuroraDemo,
  'retro-futurism': RetroFuturismDemo,
  'flat-design': FlatDesignDemo,
  'skeuomorphism': SkeuomorphismDemo,
  'liquid-glass': LiquidGlassDemo,
  'motion-driven': MotionDrivenDemo,
  'micro-interactions': MicroInteractionsDemo,
  'inclusive-design': InclusiveDesignDemo,
  'zero-interface': ZeroInterfaceDemo,
  'soft-ui-evolution': SoftUIEvolutionDemo,
  'neubrutalism': NeubrutalismDemo,
  'bento-box-grid': BentoBoxGridDemo,
  'y2k-aesthetic': Y2KDemo,
  'cyberpunk-ui': CyberpunkDemo,
  'organic-biophilic': OrganicBiophilicDemo,
  'ai-native-ui': AINativeDemo,
  'memphis-design': MemphisDemo,
  'vaporwave': VaporwaveDemo,
  'dimensional-layering': DimensionalDemo,
  'exaggerated-minimalism': ExaggeratedMinimalismDemo,
  'kinetic-typography': KineticTypographyDemo,
  'parallax-storytelling': ParallaxDemo,
  'swiss-modernism-2': SwissModernism2Demo,
  'hud-scifi-fui': HUDSciFiDemo,
  'pixel-art': PixelArtDemo,
  'bento-grids': BentoGridsDemo,
  'spatial-ui-visionos': SpatialUIDemo,
  'e-ink-paper': EInkDemo,
  'gen-z-chaos-maximalism': GenZChaosDemo,
  'biomimetic-organic-2': BiomimeticDemo,
  'anti-polish-raw-aesthetic': AntiPolishDemo,
  'tactile-digital-deformable-ui': TactileDigitalDemo,
  'nature-distilled': NatureDistilledDemo,
  'interactive-cursor-design': InteractiveCursorDemo,
  'voice-first-multimodal': VoiceFirstDemo,
  '3d-product-preview': ThreeDProductDemo,
  'gradient-mesh-aurora-evolved': GradientMeshDemo,
  'editorial-grid-magazine': EditorialGridDemo,
  'chromatic-aberration-rgb-split': ChromaticDemo,
  'vintage-analog-retro-film': VintageAnalogDemo,
};