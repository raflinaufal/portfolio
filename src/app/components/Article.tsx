import ArticleCard from "./ArticleCard";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
}

const ArticlesPage: React.FC = () => {
  // Contoh data artikel
  const articles: Article[] = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/article1.jpg",
      author: "John Doe",
      publishedAt: "June 21, 2024",
    },
    {
      title: "Dolor Sit Amet",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "/article2.jpg",
      author: "Jane Smith",
      publishedAt: "June 20, 2024",
    },
    {
      title: "Dolor Sit Amet",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "/article2.jpg",
      author: "Jane Smith",
      publishedAt: "June 20, 2024",
    },
    // Tambahkan artikel lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <div>
        <div className=" mb-5">Latest Article</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            author={article.author}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <div className="my-5 border-b w-full" />
    </div>
  );
};

export default ArticlesPage;
