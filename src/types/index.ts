export type Country = {
  code: string;
  label: string;
  flag: string;
};

export type Category = {
  id: string;
  label: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;
  label: string;
};

export type MockVideo = {
  id: string;
  title: string;
  channel: string;   // @handle 포함
  username?: string; // @handle만 (blockquote embed용)
  views: string;
  likes: string;
  tiktokId: string;
  videoUrl?: string; // 실제 TikTok 페이지 URL (blockquote embed용)
  selected: boolean;
};

export type ProductInfo = {
  name: string;
  imageUrl: string | null;
  imageFile: File | null;
  sellingPoints: string[];
};

export type GuidelineSection = {
  timeRange: string;
  title: string;
  script: string;
  shotTips: string[];
  captionTip: string;
  imageUrl?: string;
};

export type Guideline = {
  productName: string;
  country: string;
  category: string;
  subcategory: string;
  sections: GuidelineSection[];
};

export type AppStep = "setup" | "videos" | "product" | "guideline";
