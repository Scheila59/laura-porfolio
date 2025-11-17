export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Test des Palettes Saisonnières
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-spring-background border-4 border-spring-primary rounded-lg p-6">
          <h2 className="text-2xl font-bold text-spring-text mb-4">
            🌸 Printemps
          </h2>
          <div className="space-y-2">
            <div className="h-12 bg-spring-primary rounded"></div>
            <div className="h-12 bg-spring-secondary rounded"></div>
            <div className="h-12 bg-spring-accent rounded"></div>
          </div>
        </div>

        <div className="bg-summer-background border-4 border-summer-primary rounded-lg p-6">
          <h2 className="text-2xl font-bold text-summer-text mb-4">☀️ Été</h2>
          <div className="space-y-2">
            <div className="h-12 bg-summer-primary rounded"></div>
            <div className="h-12 bg-summer-secondary rounded"></div>
            <div className="h-12 bg-summer-accent rounded"></div>
          </div>
        </div>

        <div className="bg-autumn-background border-4 border-autumn-primary rounded-lg p-6">
          <h2 className="text-2xl font-bold text-autumn-text mb-4">
            🍂 Automne
          </h2>
          <div className="space-y-2">
            <div className="h-12 bg-autumn-primary rounded"></div>
            <div className="h-12 bg-autumn-secondary rounded"></div>
            <div className="h-12 bg-autumn-accent rounded"></div>
          </div>
        </div>

        <div className="bg-winter-background border-4 border-winter-primary rounded-lg p-6">
          <h2 className="text-2xl font-bold text-winter-text mb-4">❄️ Hiver</h2>
          <div className="space-y-2">
            <div className="h-12 bg-winter-primary rounded"></div>
            <div className="h-12 bg-winter-secondary rounded"></div>
            <div className="h-12 bg-winter-accent rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
