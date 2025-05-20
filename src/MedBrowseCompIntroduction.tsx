import React from 'react';

const MedBrowseCompIntroduction: React.FC = () => {
  return (
    <section id="introduction" className="py-10 md:py-16 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Introducing MedBrowseComp
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Autonomous agentic systems powered by LLMs need rigorous domain evaluation, especially in medicine where mistakes carry real harm. Yet existing models frequently hallucinate facts. MedBrowseComp tests an agent’s ability to reason, navigate the web and cite authoritative evidence, closing the gap between flashy demos and dependable clinical tools.
          </p>
          <p>
            Traditional benchmarks like MMLU or MedQA focus on static recall from pretrained knowledge. They rarely reflect the messy reality of pagination, broken links or conflicting sources that clinicians face when gathering evidence online. A benchmark for this dynamic landscape is overdue.
          </p>
          <p>
            <span className="font-semibold text-sky-700">MedBrowseComp</span> challenges agents to browse general sites, medical databases, wikis and PDFs to retrieve verifiable medical facts.
          </p>
          <p>
            Inspired by BrowseComp and built with physicians using <a href="https://hemonc.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">HemOnc.org</a>, MedBrowseComp presents concise fact-seeking questions. Its dataset evolves with the literature, ensuring a relevant and lasting benchmark.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedBrowseCompIntroduction; 