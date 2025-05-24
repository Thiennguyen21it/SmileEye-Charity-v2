import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faSearch,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { blogPostsData, blogCategories } from "../data/blogPosts";

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    let filtered = blogPostsData;

    // Filter by category (simplified for demo)
    if (selectedCategory !== "all") {
      // In a real app, posts would have category fields
      filtered = blogPostsData;
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          t(post.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
          t(post.content).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm, t]);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateContent = (content: string, maxLength: number): string => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("blog_title")}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto">
            {t("blog_subtitle")}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-none text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t("categories")}
              </h3>
              <nav className="space-y-2">
                {blogCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.key
                        ? "bg-emerald-100 text-emerald-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t(category.labelKey)}
                  </button>
                ))}
              </nav>

              {/* Recent Posts Widget */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {t("recent_posts")}
                </h3>
                <div className="space-y-4">
                  {blogPostsData.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <img
                        src={post.image}
                        alt={t(post.titleKey)}
                        className="w-16 h-12 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                          {t(post.titleKey)}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedCategory === "all"
                  ? t("all_posts")
                  : t(
                      blogCategories.find((c) => c.key === selectedCategory)
                        ?.labelKey || "all_posts"
                    )}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      index === 0 ? "md:grid md:grid-cols-2 md:gap-6" : ""
                    }`}
                  >
                    {/* Featured Post Layout */}
                    {index === 0 ? (
                      <>
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={t(post.titleKey)}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {t("featured")}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faUser} />
                              <span>SmileEye Team</span>
                            </div>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                            {t(post.titleKey)}
                          </h2>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {truncateContent(t(post.content), 200)}
                          </p>
                          <button className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                            <span>{t("read_more")}</span>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-sm"
                            />
                          </button>
                        </div>
                      </>
                    ) : (
                      /* Regular Post Layout */
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="relative md:col-span-1">
                          <img
                            src={post.image}
                            alt={t(post.titleKey)}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faUser} />
                              <span>SmileEye Team</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                            {t(post.titleKey)}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {truncateContent(t(post.content), 150)}
                          </p>
                          <div className="flex items-center justify-between">
                            <button className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                              <span>{t("read_more")}</span>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-sm"
                              />
                            </button>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <FontAwesomeIcon icon={faHeart} />
                              <span className="text-sm">24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm
                    ? `No articles match your search "${searchTerm}"`
                    : "No articles in this category yet"}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}

            {/* Load More Button (Placeholder) */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Load More Articles
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blog;
