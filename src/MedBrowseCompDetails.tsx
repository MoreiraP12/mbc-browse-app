import React from 'react';

const MedBrowseCompDetails: React.FC = () => {
  return (
    <section id="benchmark-details" className="py-10 md:py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Benchmark & Dataset Overview
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-sky-700 mt-6 mb-4">Key Contributions</h3>
          <ul className="list-disc list-inside space-y-2 bg-slate-50 dark:bg-gray-800 p-4 rounded-md shadow">
            <li>
              <span className="font-semibold">Novel Dataset:</span> over a thousand curated, verifiable questions that require web exploration and precise medical terminology.
            </li>
            <li>
              <span className="font-semibold">Baseline Analysis:</span> empirical evaluation of LLMs and agentic systems highlighting current limitations in medical retrieval.
            </li>
            <li>
              <span className="font-semibold">Capability Gap:</span> demonstrates the gap between generic browsing agents and specialized medical search.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-sky-700 mt-8 mb-4">Dataset Construction</h3>
          <p>
            The dataset spans more than a thousand questions in the medical domain, each crafted to require consulting reputable sources and interpreting clinical terminology correctly.
          </p>
          <p>
            Built from the <a href="https://hemonc.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">HemOnc.org</a> database, entries are linked with PubMed and ClinicalTrials.gov (as of April 2025). A structured version is available on <a href="https://huggingface.co/datasets/AIM-Harvard/MedBrowseComp" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">HuggingFace</a>.
          </p>
          <p>
            Questions were filtered to avoid duplicates and enriched with FDA Orange Book data. After manual verification, 121 trials remain with metadata, efficacy metrics, approval status and market information.
          </p>
          <p>
            These resources form a benchmark for evaluating short-hop computer use agents and deeper multi-hop research systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedBrowseCompDetails; 