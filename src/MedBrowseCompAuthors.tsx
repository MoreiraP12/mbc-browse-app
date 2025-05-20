import React from 'react';

const MedBrowseCompAuthors: React.FC = () => {
  const authors = [
    { name: "Shan Chen", affiliations: ["1", "2", "3"], note: "Co-first authors: Shan Chen and Pedro Moreira" },
    { name: "Pedro Moreira", affiliations: ["4", "5"], note: "Co-first authors: Shan Chen and Pedro Moreira" },
    { name: "Yuxin Xiao", affiliations: ["4"] },
    { name: "Sam Schmidgall", affiliations: ["6"] },
    { name: "Jeremy Warner", affiliations: ["7", "8"] },
    { name: "Hugo Aerts", affiliations: ["1", "2", "9"] },
    { name: "Thomas Hartvigsen", affiliations: ["10"] },
    { name: "Jack Gallifant", affiliations: ["1", "2"] },
    { name: "Danielle S. Bitterman", affiliations: ["1", "2", "3", "8"], note: "Corresponding author: dbitterman@bwh.harvard.edu" },
  ];

  const affiliations = {
    "1": "Harvard",
    "2": "Mass General Brigham",
    "3": "Boston Children's Hospital",
    "4": "MIT",
    "5": "Universitat Pompeu Fabra",
    "6": "Johns Hopkins University",
    "7": "Brown University",
    "8": "HemOnc.org",
    "9": "Maastricht University",
    "10": "University of Virginia",
  };

  // Create a map for unique notes to avoid repetition
  const uniqueNotes = new Map();
  authors.forEach(author => {
    if (author.note) {
      if (!uniqueNotes.has(author.note)) {
        uniqueNotes.set(author.note, author.name);
      }
    }
  });

  return (
    <section id="authors" className="py-10 md:py-16 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
          Authors & Affiliations
        </h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl">
          <div className="text-center mb-8 leading-relaxed">
            {authors.map((author, index) => (
              <span key={author.name} className="inline-block mx-1 whitespace-nowrap">
                <span className="font-semibold">{author.name}</span>
                <sup className="text-sm">
                  {author.affiliations.join(',')}
                  {author.note && (author.note.startsWith("Co-first") || author.note.startsWith("Corresponding")) ? '*' : ''}
                </sup>
                {index < authors.length - 1 && ','}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            {Object.entries(affiliations).map(([key, value]) => (
              <div key={key} className="flex">
                <span className="mr-2 font-semibold">{key}.</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {uniqueNotes.size > 0 && (
            <div className="text-left space-y-1 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-6">
              {Array.from(uniqueNotes.entries()).map(([note, _], index) => (
                <p key={index}><span className="italic">* {note}</span></p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MedBrowseCompAuthors; 