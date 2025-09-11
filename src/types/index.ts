export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface HeaderProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}