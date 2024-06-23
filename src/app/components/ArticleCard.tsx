// components/ArticleCard.tsx

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  author,
  publishedAt,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-3 flex items-center">
          <img
            src="/avatar.jpg"
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-gray-700 text-sm">{author}</p>
          <p className="text-gray-500 text-xs ml-auto">{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
