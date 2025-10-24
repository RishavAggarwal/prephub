
import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { Article } from '../types';

const CATEGORIES = ['All', ...new Set(ARTICLES.map(a => a.category))];

const CurrentAffairsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredArticles = activeCategory === 'All' 
        ? ARTICLES 
        : ARTICLES.filter(article => article.category === activeCategory);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center text-primary mb-4">Current Affairs Hub</h1>
            <p className="text-center text-text-secondary mb-10">Your daily dose of news analysis, editorial summaries, and compilations.</p>

            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {CATEGORIES.map(category => (
                    <button 
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                            activeCategory === category 
                                ? 'bg-primary text-white' 
                                : 'bg-white text-gray-700 hover:bg-gray-100 border'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article: Article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
                        <div className="overflow-hidden">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-semibold text-secondary bg-green-100 px-2 py-1 rounded-full">{article.category}</span>
                                <span className="text-xs text-text-secondary">{article.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors flex-grow">{article.title}</h3>
                            <p className="text-sm text-text-secondary mt-2 mb-4">{article.excerpt}</p>
                            <a href="#" className="mt-auto text-secondary font-semibold self-start hover:underline">Read More &rarr;</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrentAffairsPage;
