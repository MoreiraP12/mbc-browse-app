import React from 'react';
import { FileText, Database, Search, BarChart2, Layers, Book, Users, Settings, CheckCircle, Globe, Clock, Building, TrendingUp, Calendar, Key, AlertCircle, Bot, MessageSquare } from 'lucide-react';

const MedBrowseCompHops = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">MedBrowseComp Research Questions</h2>
      
      <div className="flex flex-row gap-6">
        {/* Agent Questions Section */}
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <Bot className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="font-bold text-xl text-green-800">Computer Use Agent Questions</h3>
          </div>
          
          <div className="rounded-lg p-5 shadow-md bg-green-50 dark:bg-gray-900 border-2 border-green-500 text-gray-800 dark:text-gray-200 h-[650px] overflow-auto">
            <div className="mb-6">
              <h4 className="font-bold text-lg text-green-700 mb-2">Base Question:</h4>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-green-200 mb-3">
                <p className="text-base">"On Hemonc.org, find/search the clinical trial id that best describes the efficacy of Lenalidomide monotherapy compared to Erythropoetin beta and Lenalidomide when used to treat Myelodysplastic syndrome."</p>
                <p className="text-base font-semibold mt-2">Output format: NCT&lt;Number&gt;</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold text-lg text-green-700 mb-2">Extended Questions:</h4>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-green-200">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-base">Track_second_authors</li>
                  <li className="text-base">Track_pmids</li>
                  <li className="text-base">Track_start_date</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <Globe className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-bold text-lg text-green-700">Website Ground Truth</h4>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-green-200">
                <p className="text-base mb-2">Website link: <a href="https://hemonc.org/wiki/Myelodysplastic_syndrome" className="text-blue-600 hover:underline">https://hemonc.org/wiki/Myelodysplastic_syndrome</a></p>
                <img src={process.env.PUBLIC_URL + '/lenalidomide.png'} alt="Lenalidomide treatment data from HemOnc.org" className="w-full rounded border border-gray-200" />
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <MessageSquare className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-bold text-lg text-green-700">Additional Context</h4>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-green-200">
                <p className="text-base">Follow-up queries expand on the clinical trial data to trace connections between authors, publications, and timeline information.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Deep Research Questions Section */}
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="font-bold text-xl text-blue-800">Deep Research Questions</h3>
          </div>
          
          <div className="h-[650px] overflow-auto">
            {/* Hop 1 - Clinical Trial Ingredient */}
            <div className="rounded-lg p-5 shadow-md bg-blue-50 dark:bg-blue-900 border-2 border-blue-500 text-gray-800 dark:text-gray-200">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hop 1: Clinical Trial Ingredient</h3>
                  </div>
                  <p className="text-base mb-3">"For clinical trial NCT00843882, among the more effective regimen ingredients, find which ingredient starts with the letter 'L'."</p>
                  <div className="mt-3 bg-white dark:bg-gray-900 p-3 rounded border border-blue-200">
                    <p className="text-lg font-bold">INGREDIENT: LENALIDOMIDE</p>
                  </div>
            </div>
            
            {/* Hop 2 - Company with Latest FDA Approval */}
            <div className="rounded-lg p-5 shadow-md bg-blue-100 dark:bg-blue-800 border-2 border-blue-600 text-gray-800 dark:text-gray-200 mt-5">
                  <div className="flex items-center mb-3">
                    <Building className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hop 2: Company with Latest FDA Approval</h3>
                  </div>
                  <p className="text-base mb-3">"Then, find which company has the latest FDA approval date up till Dec, 2024 for this identified ingredient."</p>
                  <div className="mt-3 bg-white dark:bg-gray-900 p-3 rounded border border-blue-200">
                    <p className="text-lg font-bold">COMPANY: CELGENE CORPORATION</p>
                    <p className="text-base text-gray-700">(Part of BRISTOL MYERS SQUIBB)</p>
                  </div>
            </div>
            
            {/* Hop 3 - Patent Expiration Date */}
            <div className="rounded-lg p-5 shadow-md bg-blue-200 dark:bg-blue-700 border-2 border-blue-700 text-gray-800 dark:text-gray-200 mt-5">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hop 3: Patent Expiration Date</h3>
                  </div>
                  <p className="text-base mb-3">"Then, for this identified ingredient that was last approved up till Dec, 2024, when is its patent expiration date?"</p>
                  <div className="mt-3 bg-white dark:bg-gray-900 p-3 rounded border border-blue-200">
                    <p className="text-lg font-bold">DATE: Apr 27, 2027</p>
                  </div>
            </div>
            
            {/* Hop 4 - FDA Exclusivity Date */}
            <div className="rounded-lg p-5 shadow-md bg-blue-300 dark:bg-blue-600 border-2 border-blue-800 text-gray-800 dark:text-gray-200 mt-5">
                  <div className="flex items-center mb-3">
                    <Key className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hop 4: FDA Exclusivity Date</h3>
                  </div>
                  <p className="text-base mb-3">"Then, for this identified ingredient that was last approved up till Dec, 2024, when is its exclusivity date according to the FDA?"</p>
                  <div className="mt-3 bg-white dark:bg-gray-900 p-3 rounded border border-blue-200">
                    <p className="text-lg font-bold">DATE: 5/28/2026</p>
                  </div>
            </div>
            
            {/* Hop 5 - Stock Market Data */}
            <div className="rounded-lg p-5 shadow-md bg-blue-400 dark:bg-blue-500 border-2 border-blue-900 text-gray-800 dark:text-gray-200 mt-5">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hop 5: Stock Market Data</h3>
                  </div>
                  <p className="text-base mb-3">"If this company is listed on any US stock market, provide: 1. The stock ticker symbol 2. The opening stock price on the FDA approval date"</p>
                  <div className="mt-3 bg-white dark:bg-gray-900 p-3 rounded border border-blue-200">
                    <p className="text-lg font-bold">TICKER: BMY (Bristol Myers Squibb)</p>
                    <p className="text-lg font-bold">OPENING PRICE: $46.73</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Sources */}
            
      <div className="mt-10 border-t-2 border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="font-bold text-center text-blue-800 text-xl mb-4">Data Sources for Deep Research Questions</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="rounded-lg p-3 shadow-md flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 border border-gray-300">
            <FileText className="w-6 h-6 mb-2 text-blue-600" />
            <div className="font-semibold text-sm">Clinical Trial Database</div>
          </div>
          <div className="rounded-lg p-3 shadow-md flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 border border-gray-300">
            <Database className="w-6 h-6 mb-2 text-blue-600" />
            <div className="font-semibold text-sm">FDA Approval Records</div>
          </div>
          <div className="rounded-lg p-3 shadow-md flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 border border-gray-300">
            <Book className="w-6 h-6 mb-2 text-blue-600" />
            <div className="font-semibold text-sm">Patent Database</div>
          </div>
          <div className="rounded-lg p-3 shadow-md flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 border border-gray-300">
            <AlertCircle className="w-6 h-6 mb-2 text-blue-600" />
            <div className="font-semibold text-sm">FDA Exclusivity Registry</div>
          </div>
          <div className="rounded-lg p-3 shadow-md flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 border border-gray-300">
            <BarChart2 className="w-6 h-6 mb-2 text-blue-600" />
            <div className="font-semibold text-sm">Financial Markets Data</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-base text-gray-500 dark:text-gray-400">
        MedBrowseComp Deep Research Questions: Testing agent ability to navigate interconnected medical knowledge sources
      </div>
    </div>
  );
};

export default MedBrowseCompHops;
