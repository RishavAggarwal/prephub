import React, { useState, useMemo } from 'react';
import { INTERVIEW_QUESTIONS } from '../constants';

const InterviewPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = useMemo(() => {
    if (!searchTerm) {
      return INTERVIEW_QUESTIONS;
    }
    return INTERVIEW_QUESTIONS.map(category => {
      const filtered = category.questions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...category, questions: filtered };
    }).filter(category => category.questions.length > 0);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-10">Interview Guidance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">DAF Guidance</h2>
          <p className="text-text-secondary mb-4">Learn how to fill your Detailed Application Form (DAF) effectively. Your DAF is the foundation of your interview.</p>
          <button className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-md hover:bg-blue-800">Download DAF Guide</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Tips from Toppers</h2>
           <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
                <li>Know Your DAF Inside Out</li>
                <li>Be Honest and Confident</li>
                <li>Develop a Balanced Opinion</li>
            </ul>
          <button className="mt-4 w-full px-4 py-2 font-semibold text-white bg-primary rounded-md hover:bg-blue-800">More Topper Tips</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Book Mock Interview</h2>
          <p className="text-text-secondary mb-4">Schedule one-on-one mock interview sessions with experienced panelists and get personalized feedback.</p>
          <button className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-md hover:bg-green-600">Book a Session</button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary text-center mb-2">Interview Question Bank</h2>
        <div className="max-w-xl mx-auto mb-6">
           <input 
            type="text" 
            placeholder="Search questions (e.g., 'civil services', 'district magistrate')" 
            className="w-full border rounded-full py-2 px-4 text-center focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-6">
          {filteredQuestions.map(category => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-primary border-b-2 border-primary pb-1 mb-3">{category.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {category.questions.map(q => (
                  <li key={q.id}>{q.question}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default InterviewPage;
