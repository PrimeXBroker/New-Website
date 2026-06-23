const SectionSkeleton = ({ className = "min-h-[300px]" }) => {
  return (
    <div className={`bg-p dark:bg-p-dark py-16 sm:py-28 ${className}`}>
      <div className="container">
        <div className="animate-pulse">
          {/* Title skeleton */}
          <div className="flex justify-center mb-10">
            <div className="h-8 bg-cc dark:bg-cc-dark rounded w-[300px]" />
          </div>
          {/* Content skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-[200px] bg-cc dark:bg-cc-dark rounded-2xl" />
            <div className="h-[200px] bg-cc dark:bg-cc-dark rounded-2xl" />
            <div className="h-[200px] bg-cc dark:bg-cc-dark rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
