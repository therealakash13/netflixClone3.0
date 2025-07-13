export interface Language {
  english_name: string;
  name: string;
}

export interface Genre {
  name: string;
}

export interface Company {
  logo_path: string;
  name: string;
}

export interface Country {
  name: string;
}

export interface VideoDetailsProps {
  videoData?: any;
  tvData?: any;
  videoUrl?: string;
  selectedData: { name: string; key: string }[];
  setKey: (key: string) => void;
  moveToLink: () => void;
  onCategoryClick: (category: string) => void;
  categories: string[];
}
