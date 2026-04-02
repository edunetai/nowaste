export interface Innovation {
  id: number;
  title: string;
  origin: string;
  originLink?: string;
  originLinks?: { name: string; url: string }[];
  description: string;
  icon: string;
  imageSrc?: string;
}

export interface Incentive {
  title: string;
  description: string;
}

export interface FundingSource {
  name: string;
  amount: string;
  description: string;
}

export interface RoadmapStep {
  phase: string;
  duration: string;
  focus: string[];
}
