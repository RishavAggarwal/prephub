export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface ExamStage {
  title: string;
  description: string;
  path: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  rank: string;
  imageUrl: string;
}

// New types for detailed content
export interface Video {
  id: number;
  title: string;
  duration: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface PYQ {
  id: number;
  question: string;
  year: number;
  topic: string;
}

export interface PrelimsSubjectContent {
  subject: string;
  notes: string;
  videos: Video[];
  quiz: QuizQuestion[];
}

export interface MainsPaperContent {
  paper: string;
  title: string;
  syllabus: string[];
}

export interface InterviewQuestion {
    id: number;
    question: string;
}

export interface InterviewQuestionCategory {
    category: string;
    questions: InterviewQuestion[];
}

export interface Resource {
    id: number;
    title: string;
    type: 'Book' | 'Report' | 'NCERT';
    description: string;
}

export interface Topper {
    id: number;
    name: string;
    rank: string;
    year: number;
    strategyLink: string;
    answerCopyLink: string;
}
