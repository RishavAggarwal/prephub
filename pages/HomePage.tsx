
import React from 'react';
import { Link } from 'react-router-dom';
import { EXAM_STAGES, TESTIMONIALS, ARTICLES } from '../constants';
import { Feature } from '../types';
import { BookOpenIcon, UsersIcon, GlobeAltIcon, PencilAltIcon } from '../components/IconComponents';

const FEATURES: Feature[] = [
    { icon: BookOpenIcon, title: 'Comprehensive Syllabus', description: 'Covering every topic for Prelims, Mains, and Interview in detail.' },
    { icon: UsersIcon, title: 'Expert Mentorship', description: 'Guidance from experienced educators and successful candidates.' },
    { icon: GlobeAltIcon, title: 'Daily Current Affairs', description: 'Stay updated with daily news analysis, editorials, and magazines.' },
    { icon: PencilAltIcon, title: 'Advanced Mock Tests', description: 'Practice with tests that simulate the real exam environment.' },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary">Your Complete Guide to Cracking the Civil Services Exam</h1>
          <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            A one-stop solution for UPSC CSE preparation with comprehensive resources, expert guidance, and a personalized learning path.
          </p>
          <div className="mt-8">
            <Link to="/login" className="px-8 py-3 text-lg font-semibold text-white bg-secondary rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose UPSC Prep Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Stages Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center text-primary mb-12">Prepare for Every Stage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXAM_STAGES.map((stage) => (
              <Link to={stage.path} key={stage.title} className="block p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary">{stage.title}</h3>
                <p className="mt-2 text-text-secondary">{stage.description}</p>
                 <span className="mt-4 inline-block text-secondary font-semibold group-hover:underline">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Daily Updates Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Latest Updates & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ARTICLES.slice(0, 4).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                 <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                 <div className="p-4">
                    <span className="text-xs font-semibold text-secondary bg-green-100 px-2 py-1 rounded-full">{article.category}</span>
                    <h3 className="mt-2 text-md font-bold text-text-primary hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{article.date}</p>
                 </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/current-affairs" className="px-6 py-2 font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-text-secondary italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <div className="ml-4">
                    <p className="font-bold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-accent font-semibold">{testimonial.rank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
