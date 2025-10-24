import { NavLink, ExamStage, Testimonial, Article, PrelimsSubjectContent, MainsPaperContent, PYQ, InterviewQuestionCategory, Resource, Topper } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Prelims', path: '/prelims' },
  { name: 'Mains', path: '/mains' },
  { name: 'Interview', path: '/interview' },
  { name: 'Current Affairs', path: '/current-affairs' },
  { name: 'Resources', path: '/resources' },
  { name: 'Mock Tests', path: '/mock-tests' },
  { name: 'Blog', path: '/blog' },
];

export const EXAM_STAGES: ExamStage[] = [
    {
      title: 'Preliminary Exam',
      description: 'The first stage of the exam, consisting of two objective-type papers (GS and CSAT).',
      path: '/prelims',
    },
    {
      title: 'Main Exam',
      description: 'A written examination with nine papers, including essay, GS, and optional subjects.',
      path: '/mains',
    },
    {
      title: 'Interview Guidance',
      description: 'The final stage, a personality test to assess the candidate\'s suitability for a civil services career.',
      path: '/interview',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "UPSC Prep Hub's structured notes and daily current affairs were a game-changer for my preparation. The mock tests are closest to the actual exam.",
        name: 'Ananya Sharma',
        rank: 'AIR 21, CSE 2023',
        imageUrl: 'https://picsum.photos/100/100?random=1',
    },
    {
        quote: "The answer writing practice platform helped me improve my score in Mains significantly. The feedback from mentors is invaluable.",
        name: 'Rohan Verma',
        rank: 'AIR 56, CSE 2023',
        imageUrl: 'https://picsum.photos/100/100?random=2',
    },
    {
        quote: "From Prelims to the Interview, I relied completely on this platform. The one-on-one mock interviews boosted my confidence immensely.",
        name: 'Priya Singh',
        rank: 'AIR 89, CSE 2023',
        imageUrl: 'https://picsum.photos/100/100?random=3',
    },
];

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Decoding the Economic Survey 2024-25',
        excerpt: 'A comprehensive analysis of the key highlights and implications of the latest Economic Survey for the Indian economy.',
        category: 'Economy',
        date: 'July 28, 2024',
        imageUrl: 'https://picsum.photos/400/250?random=4',
    },
    {
        id: 2,
        title: 'The Geopolitics of the Indo-Pacific Region',
        excerpt: 'Understanding the strategic importance and the evolving power dynamics in the Indo-Pacific.',
        category: 'International Relations',
        date: 'July 27, 2024',
        imageUrl: 'https://picsum.photos/400/250?random=5',
    },
    {
        id: 3,
        title: 'Supreme Court Judgements on Fundamental Rights',
        excerpt: 'A deep dive into recent landmark judgements by the Supreme Court that have redefined the scope of fundamental rights.',
        category: 'Polity',
        date: 'July 26, 2024',
        imageUrl: 'https://picsum.photos/400/250?random=6',
    },
     {
        id: 4,
        title: 'New Advances in CRISPR-Cas9 Technology',
        excerpt: 'Exploring the latest breakthroughs in gene-editing technology and its potential ethical considerations.',
        category: 'Science & Tech',
        date: 'July 25, 2024',
        imageUrl: 'https://picsum.photos/400/250?random=7',
    },
];

export const PRELIMS_CONTENT: PrelimsSubjectContent[] = [
    {
        subject: 'History',
        notes: 'Ancient India covers the Indus Valley Civilization, Vedic period, Mauryas, and Guptas. Medieval India focuses on the Delhi Sultanate and Mughal Empire. Modern India starts from the advent of Europeans, the 1857 revolt, and the freedom struggle. Focus on key timelines, personalities, and socio-economic conditions.',
        videos: [
            { id: 1, title: 'Indus Valley Civilization in 30 Minutes', duration: '30:15' },
            { id: 2, title: 'Complete Mughal Empire Explained', duration: '1:12:45' },
            { id: 3, title: 'Indian National Movement (1885-1947)', duration: '2:30:00' },
        ],
        quiz: [
            { id: 1, question: 'Who was the founder of the Mauryan Empire?', options: ['Ashoka', 'Bindusara', 'Chandragupta Maurya', 'Ajatashatru'], answer: 'Chandragupta Maurya' },
            { id: 2, question: 'The Battle of Plassey was fought in which year?', options: ['1757', '1764', '1857', '1776'], answer: '1757' },
        ]
    },
    {
        subject: 'Geography',
        notes: 'Physical Geography includes topics like geomorphology, climatology, oceanography. Indian Geography covers physical features, river systems, climate, minerals, and industries. World Geography focuses on major natural regions and resources. Map-based questions are crucial.',
        videos: [
            { id: 1, title: 'Understanding Monsoons', duration: '25:50' },
            { id: 2, title: 'Major River Systems of India', duration: '45:10' },
        ],
        quiz: [
            { id: 1, question: 'Which is the highest peak in India?', options: ['K2', 'Kangchenjunga', 'Nanda Devi', 'Mt. Everest'], answer: 'Kangchenjunga' },
        ]
    },
    {
        subject: 'Polity',
        notes: 'Based primarily on the Indian Constitution. Key topics include Preamble, Fundamental Rights, DPSP, Union & State executive, legislature, judiciary, and constitutional bodies. M. Laxmikanth is the standard reference book. Focus on conceptual clarity and recent amendments.',
        videos: [
            { id: 1, title: 'Preamble and Basic Structure Doctrine', duration: '35:20' },
            { id: 2, title: 'Fundamental Rights (Article 12-35)', duration: '1:05:00' },
        ],
        quiz: [
            { id: 1, question: 'Which article deals with the Right to Equality?', options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'], answer: 'Article 14' },
        ]
    },
    // Add similar content for Economy, Environment, Science & Tech
    { subject: 'Economy', notes: '...', videos: [], quiz: [] },
    { subject: 'Environment', notes: '...', videos: [], quiz: [] },
    { subject: 'Science & Tech', notes: '...', videos: [], quiz: [] },
];

export const MAINS_PAPERS_CONTENT: MainsPaperContent[] = [
    { paper: 'GS Paper I', title: 'Indian Heritage, History & Geography', syllabus: ['Indian culture: salient aspects of Art Forms, literature and Architecture from ancient to modern times.', 'Modern Indian history from about the middle of the eighteenth century until the present- significant events, personalities, issues.', 'The Freedom Struggle — its various stages and important contributors /contributions from different parts of the country.', 'Post-independence consolidation and reorganization within the country.', 'History of the world will include events from 18th century such as industrial revolution, world wars...', 'Salient features of Indian Society, Diversity of India.'] },
    { paper: 'GS Paper II', title: 'Governance, Constitution, Polity', syllabus: ['Indian Constitution—historical underpinnings, evolution, features, amendments, significant provisions and basic structure.', 'Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure...', 'Separation of powers between various organs dispute redressal mechanisms and institutions.', 'Comparison of the Indian constitutional scheme with that of other countries.', 'Parliament and State legislatures—structure, functioning, conduct of business, powers & privileges and issues arising out of these.'] },
    { paper: 'GS Paper III', title: 'Technology, Economic Development, Security', syllabus: ['Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment.', 'Inclusive growth and issues arising from it.', 'Government Budgeting.', 'Major crops-cropping patterns in various parts of the country...', 'Science and Technology- developments and their applications and effects in everyday life.'] },
    { paper: 'GS Paper IV', title: 'Ethics, Integrity, and Aptitude', syllabus: ['Ethics and Human Interface: Essence, determinants and consequences of Ethics in-human actions...', 'Attitude: content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion.', 'Aptitude and foundational values for Civil Service, integrity, impartiality and non-partisanship, objectivity, dedication to public service...', 'Emotional intelligence-concepts, and their utilities and application in administration and governance.'] },
];

export const PYQS: PYQ[] = [
    { id: 1, question: 'With reference to the history of India, consider the following pairs: (1) Aurang - In-charge of treasury of the State, (2) Banian - Indian agent of the East India Company, (3) Mirasidar - Designated revenue payer to the State. Which of the pairs given above is/are correctly matched?', year: 2022, topic: 'History' },
    { id: 2, question: 'Which of the following is not a sub-index of the World Bank\'s \'Ease of Doing Business Index\'?', year: 2021, topic: 'Economy' },
];

export const INTERVIEW_QUESTIONS: InterviewQuestionCategory[] = [
    {
        category: 'DAF & Personal',
        questions: [
            { id: 1, question: 'Tell us about yourself, starting from your education to your work experience.' },
            { id: 2, question: 'Why do you want to join the Civil Services?' },
            { id: 3, question: 'What is the meaning of your name and how do you relate to it?' },
            { id: 4, question: 'Explain the relevance of your graduation subject in administration.' },
        ]
    },
    {
        category: 'Current Affairs',
        questions: [
            { id: 1, question: 'What is your opinion on the "One Nation, One Election" proposal?' },
            { id: 2, question: 'Discuss the implications of the latest QUAD summit.' },
        ]
    },
    {
        category: 'Situational',
        questions: [
            { id: 1, question: 'You are a District Magistrate. There is a communal riot in your district. How would you handle it?' },
            { id: 2, question: 'A senior officer is pressuring you to approve a project that you know is not in the public interest. What will you do?' },
        ]
    }
];

export const DIGITAL_LIBRARY_RESOURCES: Resource[] = [
    { id: 1, title: 'Indian Polity by M. Laxmikanth', type: 'Book', description: 'The essential book for understanding the Indian political system and constitution.' },
    { id: 2, title: 'A Brief History of Modern India by Spectrum', type: 'Book', description: 'Covers the history of modern India for the civil services examination.' },
    { id: 3, title: 'NCERT Class XI: India Physical Environment', type: 'NCERT', description: 'Fundamental concepts of Indian geography.' },
    { id: 4, title: 'Economic Survey (Latest Volume)', type: 'Report', description: 'An annual document of the Ministry of Finance, reviewing the economic development.' },
];

export const TOPPERS: Topper[] = [
    { id: 1, name: 'Tina Dabi', rank: 'AIR 1', year: 2015, strategyLink: '#', answerCopyLink: '#' },
    { id: 2, name: 'Anudeep Durishetty', rank: 'AIR 1', year: 2017, strategyLink: '#', answerCopyLink: '#' },
    { id: 3, name: 'Shruti Sharma', rank: 'AIR 1', year: 2021, strategyLink: '#', answerCopyLink: '#' },
];
