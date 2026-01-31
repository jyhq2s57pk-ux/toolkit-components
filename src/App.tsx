import { FeatureCard, FeatureVariant } from './components';

const variants: FeatureVariant[] = [
  'iconography',
  'color',
  'typography',
  'composition',
  'photography',
];

function App() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-semibold mb-8 font-inter">
          Feature Cards
        </h1>

        {/* Default Size Cards */}
        <section className="mb-12">
          <h2 className="text-white/60 text-sm uppercase tracking-wider mb-4 font-inter">
            Default Size
          </h2>
          <div className="flex flex-col gap-4">
            {variants.map((variant) => (
              <FeatureCard
                key={variant}
                variant={variant}
                size="default"
                onClick={() => console.log(`Clicked: ${variant}`)}
              />
            ))}
          </div>
        </section>

        {/* Compact Size Cards */}
        <section>
          <h2 className="text-white/60 text-sm uppercase tracking-wider mb-4 font-inter">
            Compact Size
          </h2>
          <div className="flex flex-col gap-4">
            {variants.map((variant) => (
              <FeatureCard
                key={`compact-${variant}`}
                variant={variant}
                size="compact"
                onClick={() => console.log(`Clicked compact: ${variant}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
