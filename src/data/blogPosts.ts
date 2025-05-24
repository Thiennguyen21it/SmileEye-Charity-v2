import { BlogPost } from "../types";

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    titleKey: "blog_post_1_title",
    date: "2024-01-15",
    content: "blog_post_1_content",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    titleKey: "blog_post_2_title",
    date: "2024-01-10",
    content: "blog_post_2_content",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    titleKey: "blog_post_3_title",
    date: "2024-01-05",
    content: "blog_post_3_content",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    titleKey: "blog_post_4_title",
    date: "2023-12-28",
    content: "blog_post_4_content",
    image:
      "https://images.unsplash.com/photo-1574483726179-e55e4b78b6ba?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    titleKey: "blog_post_5_title",
    date: "2023-12-20",
    content: "blog_post_5_content",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    titleKey: "blog_post_6_title",
    date: "2023-12-15",
    content: "blog_post_6_content",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
  },
];

export const blogCategories = [
  { key: "all", labelKey: "all_posts" },
  { key: "featured", labelKey: "featured" },
  { key: "updates", labelKey: "project_updates" },
  { key: "stories", labelKey: "community_stories" },
  { key: "volunteer", labelKey: "volunteer_experiences" },
  { key: "funding", labelKey: "funding_progress" },
];
