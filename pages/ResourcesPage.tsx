import React, { useState } from 'react';
import { DIGITAL_LIBRARY_RESOURCES, TOPPERS } from '../constants';

type ResourceTab = "Library" | "Syllabus" | "Toppers";

const TABS: { id: ResourceTab; title: string; description: string }[] = [
    { id: 'Library', title: 'Digital Library', description: 'Download NCERTs, standard books, and government reports.' },
    { id: 'Syllabus', title: 'UPSC Syllabus', description: 'The official UPSC syllabus for Prelims and Mains.' },
    { id: 'Toppers', title: "Topper's Corner", description: 'Insights from interviews and strategies of successful candidates.' },
];

const TabButton: React.FC<{title: string, isActive: boolean, onClick: () => void}> = ({ title, isActive, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-full p-4 rounded-lg shadow-lg text-center transition-all duration-300 ${
            isActive ? 'bg-primary text-white scale-105' : 'bg-white hover:bg-gray-50'
        }`}
    >
        <h3 className="text-xl font-bold">{title}</h3>
    </button>
);

const ResourcesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ResourceTab>('Library');

    const renderContent = () => {
        switch (activeTab) {
            case 'Library':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DIGITAL_LIBRARY_RESOURCES.map(res => (
                            <div key={res.id} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-primary">{res.title}</h4>
                                    <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">{res.type}</span>
                                </div>
                                <p className="text-sm text-text-secondary mt-1">{res.description}</p>
                                <button className="text-sm mt-2 font-semibold text-secondary">Download &rarr;</button>
                            </div>
                        ))}
                    </div>
                );
            case 'Syllabus':
                return (
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2">GS Paper I</h4>
                        <p className="text-text-secondary text-sm">Indian Heritage and Culture, History and Geography of the World and Society.</p>
                        <h4 className="font-bold text-primary text-lg mt-4 mb-2">GS Paper II</h4>
                        <p className="text-text-secondary text-sm">Governance, Constitution, Polity, Social Justice and International relations.</p>
                         <button className="mt-4 px-6 py-2 font-semibold text-white bg-secondary rounded-md hover:bg-green-600">Download Full Syllabus PDF</button>
                    </div>
                );
            case 'Toppers':
                 return (
                    <div className="space-y-3">
                        {TOPPERS.map(topper => (
                            <div key={topper.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-primary">{topper.name}</h4>
                                    <p className="text-sm text-text-secondary">{topper.rank}, CSE {topper.year}</p>
                                </div>
                                <div className="space-x-2">
                                     <a href={topper.strategyLink} className="text-sm font-semibold text-primary">Strategy</a>
                                     <a href={topper.answerCopyLink} className="text-sm font-semibold text-secondary">Answer Copy</a>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center text-primary mb-10">Resource Hub</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {TABS.map(tab => (
                    <TabButton 
                        key={tab.id}
                        title={tab.title}
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    />
                ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">{TABS.find(t => t.id === activeTab)?.title}</h2>
                {renderContent()}
            </div>
        </div>
    );
};

export default ResourcesPage;
