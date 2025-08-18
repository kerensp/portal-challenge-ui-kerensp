import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonSearchBar() {
  return (
    <div className="hidden w-full max-w-2xl pr-2 focus:ring-2 focus:ring-accent md:flex">
      <div className="relative flex flex-1 items-center">
        <div className={'absolute'}>
          <Skeleton className="h-[50px] w-[140px] rounded-[50px] border-0 bg-[linear-gradient(180deg,_#A1A4C3_0%,_#4E5291_100%)] text-white [&>svg]:text-white">
            <Skeleton className="w-full bg-[#F1F2F4]" />
          </Skeleton>
        </div>
        <Skeleton className="h-[50px] flex-1 rounded-[50px] border-0 bg-[#F1F2F4] pl-[150px] pr-[60px]" />
        <Skeleton className="-ml-[27px] h-10 w-10 -translate-x-5 rounded-[40px] bg-[#F1F2F4]" />
      </div>
    </div>
  );
}
