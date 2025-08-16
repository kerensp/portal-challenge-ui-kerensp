import Container from "@/components/ui/container";

export function BannerGridSkeleton() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full h-[180px] md:h-[227px] rounded-xl bg-gray-200 animate-pulse"
            aria-hidden="true"
          />
        ))}
      </div>
    </Container>
  );
}
