import React from 'react';

const MedBrowseCompResults: React.FC = () => {
  return (
    <section id="results" className="py-10 md:py-16 bg-slate-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
          Benchmark Results
        </h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-sky-700 mb-6 text-center">Overall Performance on MedBrowseComp-50</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
              The chart below summarizes accuracy of several agent setups on MedBrowseComp-50. Deeper chains of reasoning lower accuracy, but multi-hop research agents remain far stronger than single-shot query systems.
            </p>
            <div className="mb-4 flex justify-center">
              <img 
                src={process.env.PUBLIC_URL + '/medcomp.png'}
                alt="MedBrowseComp Performance Chart (medcomp.png)" 
                className="rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Figure 1: Overall performance on MedBrowseComp-50. Retrieval-Augmented Generation boosts accuracy on shallow tasks, but its gains fade beyond three hops.
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-sky-700 mb-6 text-center">Detailed Performance Analysis</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
              A second chart breaks down scores across individual tasks.
            </p>
            <div className="mb-4 flex justify-center">
              <img 
                src={process.env.PUBLIC_URL + '/overall-perf.png'}
                alt="Detailed MedBrowseComp Performance (overall-perf.png)" 
                className="rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Figure 2: Detailed performance metrics from the MedBrowseComp benchmark (overall-perf.png).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedBrowseCompResults; 