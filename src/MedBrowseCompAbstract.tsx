import React from 'react';

const MedBrowseCompAbstract: React.FC = () => (
  <section id="abstract" className="py-10 md:py-16 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Abstract
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
        <p>
          Large language models (LLMs) are increasingly envisioned as decision-support
          tools in clinical practice. Safe reasoning, however, demands integration of
          heterogeneous sources&mdash;clinical trials, primary studies, regulatory
          documents and cost data&mdash;under strict accuracy constraints.
        </p>
        <p>
          Existing evaluations often rely on synthetic prompts or single-hop queries,
          leaving real-world utility unclear. <span className="font-semibold text-sky-700">MedBrowseComp </span>
           closes this gap by benchmarking medical information-seeking agents that must
          plan, browse, and synthesize up-to-date evidence across the web.
        </p>
      </div>
    </div>
  </section>
);

export default MedBrowseCompAbstract;
