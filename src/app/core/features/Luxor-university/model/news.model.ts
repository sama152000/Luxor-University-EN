export interface News {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  content: string;
  contentAr: string;
  imageUrl: string;
  images: string[];
  date: Date;
  author: string;
  authorAr: string;
  category: string;
  categoryAr: string;
  isFeatured?: boolean;
  isBreaking?: boolean;
  isTrending?: boolean;
  views: number;
  tags: string[];
  tagsAr: string[];
}

export interface NewsFilter {
  category?: string;
  dateFrom?: Date;
  dateTo?: Date;
  searchTerm?: string;
}

export interface NewsResponse {
  items: News[];
  total: number;
  page: number;
  pageSize: number;
}