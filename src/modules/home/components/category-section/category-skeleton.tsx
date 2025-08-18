const CategorySectionSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-3"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-20 h-4 rounded bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySectionSkeleton;
