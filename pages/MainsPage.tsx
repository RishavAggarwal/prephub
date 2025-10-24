import React, { useState } from 'react';
import { MAINS_PAPERS_CONTENT } from '../constants';

const MAINS_PAPERS = ['GS Paper I', 'GS Paper II', 'GS Paper III', 'GS Paper IV', 'Essay', 'Optional Subjects'];
const OPTIONAL_SUBJECTS = ['Public Administration', 'Sociology', 'History', 'Geography', 'Political Science', 'Anthropology', 'Mathematics', 'Philosophy'];

const PaperCard: React.FC<{ title: string, onClick: () => void, isActive: boolean }> = ({ title, onClick, isActive }) => (
    <button 
      onClick={onClick}
      className={`p-6 rounded-lg shadow-md text-center transition-all duration-300 cursor-pointer ${
        isActive ? 'bg-primary text-white shadow-xl -translate-y-1' : 'bg-white hover:shadow-xl hover:-translate-y-1'
      }`}
    >
        <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-primary'}`}>{title}</h3>
    </button>
);

const MainsPage: React.FC = () => {
    const [selectedPaper, setSelectedPaper] = useState<string | null>('GS Paper I');
    const paperContent = MAINS_PAPERS_CONTENT.find(p => p.paper === selectedPaper);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center text-primary mb-10">Main Exam Preparation</h1>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Mains Papers Dashboard</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {MAINS_PAPERS.map(paper => (
                        <PaperCard 
                            key={paper} 
                            title={paper} 
                            onClick={() => setSelectedPaper(paper)} 
                            isActive={selectedPaper === paper}
                        />
                    ))}
                </div>
            </div>

            {paperContent && (
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-primary mb-4">{paperContent.paper}: {paperContent.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary">
                        {paperContent.syllabus.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                        <h2 className="text-2xl font-bold text-primary mb-4">Daily Answer Writing Practice</h2>
                        <p className="text-text-secondary mb-4">
                            "The man who moves a mountain begins by carrying away small stones." - Confucius. <br/>
                            Write and upload your answers daily for expert and peer review.
                        </p>
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Q: Discuss the role of the Finance Commission in ensuring fiscal federalism in India. (150 words)</h4>
                            <textarea
                                className="w-full h-40 p-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                                placeholder="Write your answer here..."
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-6 py-2 font-semibold text-white bg-secondary rounded-md hover:bg-green-600">Upload for Review</button>
                            <button className="px-6 py-2 font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white">View Model Answer</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                        <h2 className="text-2xl font-bold text-primary mb-4">Optional Subjects Hub</h2>
                        <ul className="space-y-2">
                            {OPTIONAL_SUBJECTS.slice(0, 5).map(subject => (
                                <li key={subject} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 text-text-secondary cursor-pointer">{subject}</li>
                            ))}
                        </ul>
                         <button className="mt-4 w-full px-4 py-2 font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white">View All Optionals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainsPage;
