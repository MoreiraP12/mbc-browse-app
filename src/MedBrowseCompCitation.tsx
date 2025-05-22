import React, { useState } from 'react';
import { Copy, CheckCircle, FileText, Quote } from 'lucide-react';

const MedBrowseCompCitation = () => {
  const [copiedBib, setCopiedBib] = useState(false);
  
  const bibTexCitation = `@misc{chen2025medbrowsecompbenchmarkingmedicaldeep,
      title={MedBrowseComp: Benchmarking Medical Deep Research and Computer Use}, 
      author={Shan Chen and Pedro Moreira and Yuxin Xiao and Sam Schmidgall and Jeremy Warner and Hugo Aerts and Thomas Hartvigsen and Jack Gallifant and Danielle S. Bitterman},
      year={2025},
      eprint={2505.14963},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2505.14963}, 
}`;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBib(true);
      setTimeout(() => setCopiedBib(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="citation" className="py-10 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            <Quote className="inline mr-3" size={32} />
            Citation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            If you use MedBrowseComp in your research, please cite our paper.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* BibTeX Citation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                <FileText className="mr-2" size={20} />
                BibTeX Citation
              </h3>
              <button
                onClick={() => copyToClipboard(bibTexCitation)}
                className="flex items-center bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-md transition-colors"
              >
                {copiedBib ? (
                  <CheckCircle size={16} className="mr-1" />
                ) : (
                  <Copy size={16} className="mr-1" />
                )}
                {copiedBib ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {bibTexCitation}
              </pre>
            </div>
          </div>

          {/* ArXiv Link */}
          <div className="text-center">
            <a
              href="https://arxiv.org/abs/2505.14963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg"
            >
              <FileText className="mr-2" size={20} />
              View Paper on arXiv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedBrowseCompCitation; 