export const BannerSkeleton = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 lg:flex-[2] bg-gray-200 rounded-lg animate-pulse aspect-[390/240] lg:aspect-[959/474]" />
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 flex-1">
            <div className="bg-gray-200 rounded-lg animate-pulse aspect-[391/189] lg:aspect-[468/227]" />
            <div className="bg-gray-200 rounded-lg animate-pulse aspect-[391/189] lg:aspect-[468/227]" />
          </div>
        </div>
      </div>
    </section>
  )
}
