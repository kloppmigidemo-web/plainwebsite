
import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ColorSystemCard } from './components/ColorSystemCard';
import { ComparisonTable } from './components/ComparisonTable';
import { FactList } from './components/FactList';
import { ExperimentCard } from './components/ExperimentCard';
import { Conclusion } from './components/Conclusion';
import { rybData, rgbData, whyItMatters, funFacts, experiments } from './constants';
import { ListItem } from './components/ListItem';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed">
      <Header />

      <main className="container mx-auto p-4 sm:p-6 lg:p-12">
        <Section title="What Are Primary Colors?">
          <p className="text-lg text-slate-600">
            Primary colors are the foundation of all other colors. They are called "primary" because they cannot be
            created by mixing other colors together. Instead, all other colors are made by combining primary colors in
            different ways.
          </p>
        </Section>

        <Section title="The Two Color Systems">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ColorSystemCard {...rybData} />
            <ColorSystemCard {...rgbData} />
          </div>
        </Section>

        <Section title="Key Differences: Paint vs Light">
          <ComparisonTable />
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              <strong className="text-slate-900">Subtractive mixing (paint):</strong> Each color you add absorbs more light, making the result darker.
            </p>
            <p>
              <strong className="text-slate-900">Additive mixing (light):</strong> Each color you add creates more light, making the result brighter.
            </p>
          </div>
        </Section>

        <Section title="Why Primary Colors Matter">
          <ul className="space-y-4">
            {whyItMatters.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ul>
        </Section>

        <Section title="Fun Facts">
          <FactList facts={funFacts} />
        </Section>

        <Section title="Simple Experiment You Can Try">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperimentCard {...experiments.paint} />
            <ExperimentCard {...experiments.light} />
          </div>
        </Section>

        <Conclusion />
      </main>
    </div>
  );
};

export default App;
