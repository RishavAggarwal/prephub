import React, { useState } from 'react';
import { PRELIMS_CONTENT, PYQS } from '../constants';
import { PrelimsSubjectContent } from '../types';

const GS_PAPER_1_SUBJECTS = ['History', 'Geography', 'Polity', 'Economy', 'Environment', 'Science & Tech'];
const CSAT_PAPER_2_SUBJECTS = ['Comprehension', 'Logical Reasoning', 'Basic Numeracy'];

const Section: React.FC<{title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => (
    <div className={`bg-white p-6 rounded-lg shadow-md mb-8 ${className}`}>
        <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">{title}</h2>
        {children}
    </div>
);

const SubjectCard: React.FC<{subject: string}> = ({ subject }) => (
    <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
        <h3 className="font-semibold">{subject}</h3>
    </div>
);

const PrelimsPage: React.FC = () => {
    const [activeSubject, setActiveSubject] = useState('History');
    const content = PRELIMS_CONTENT.find(c => c.subject === activeSubject) || PRELIMS_CONTENT[0];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center text-primary mb-10">Preliminary Exam Preparation</h1>

            <Section title="GS Paper 1: General Studies">
                <div className="flex flex-wrap gap-2 mb-6">
                    {GS_PAPER_1_SUBJECTS.map(subject => (
                       <button 
                         key={subject} 
                         onClick={() => setActiveSubject(subject)}
                         className={`px-4 py-2 rounded-md font-semibold transition-colors text-sm ${activeSubject === subject ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                       >
                         {subject}
                       </button>
                    ))}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-primary mb-2">Study Notes: {content.subject}</h3>
                        <p className="text-text-secondary mb-4 prose">{content.notes}</p>
                         <h4 className="text-lg font-semibold text-primary mb-2 mt-4">Topic-wise Quiz</h4>
                         {content.quiz.length > 0 ? (
                            <div className="space-y-3">
                            {content.quiz.map(q => (
                                <div key={q.id} className="text-sm">
                                    <p className="font-medium">{q.id}. {q.question}</p>
                                    <p className="text-gray-500 text-xs">A) {q.options[0]} B) {q.options[1]} C) {q.options[2]} D) {q.options[3]}</p>
                                </div>
                            ))}
                             <button className="mt-2 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white">Start Full Quiz</button>
                            </div>
                         ) : <p className="text-text-secondary">No quiz available yet.</p>}
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Video Lectures</h4>
                        {content.videos.length > 0 ? (
                            <ul className="space-y-2">
                            {content.videos.map(v => (
                                <li key={v.id} className="p-3 bg-white rounded-md shadow-sm text-sm cursor-pointer hover:bg-green-50">
                                    <p className="font-semibold">{v.title}</p>
                                    <p className="text-xs text-gray-500">{v.duration}</p>
                                </li>
                            ))}
                            </ul>
                        ) : <p className="text-text-secondary">No videos available yet.</p>}
                    </div>
                </div>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <Section title="CSAT Paper 2: Aptitude Test">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {CSAT_PAPER_2_SUBJECTS.map(subject => <SubjectCard key={subject} subject={subject} />)}
                     </div>
                </Section>
                <Section title="Prelims Mock Tests">
                    <p className="text-text-secondary mb-4">Full-length and sectional mock tests with timer, real-time analytics, and performance comparison.</p>
                    <button className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-md hover:bg-green-600">Go to Mock Test Series</button>
                </Section>
            </div>

            <Section title="Previous Years' Questions (PYQ) Archive">
                <div className="space-y-4">
                {PYQS.map(pyq => (
                    <div key={pyq.id} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold">{pyq.question}</p>
                        <div className="flex justify-between items-center mt-2 text-xs">
                           <span className="font-bold text-primary">{pyq.topic}</span>
                           <span className="text-text-secondary">Year: {pyq.year}</span>
                        </div>
                    </div>
                ))}
                </div>
                <button className="mt-6 w-full px-4 py-3 font-semibold text-white bg-primary rounded-md hover:bg-blue-800">Explore Full PYQ Archive</button>
            </Section>
        </div>
    );
};

export default PrelimsPage;
