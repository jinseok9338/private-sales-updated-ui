import { Skeleton } from "~/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pt-[152px] pb-[56px]">
        {/* Header */}
        <header className="flex flex-col w-full absolute top-0">
          {/* Notice Bar */}
          <div className="flex py-2 px-4 items-baseline bg-common-black justify-center gap-2">
            <Skeleton className="h-4 w-24 bg-gray-700" />
            <Skeleton className="h-4 w-20 bg-gray-700" />
          </div>

          {/* Logo and Icons */}
          <div className="h-[52px] bg-common-white w-full px-4 py-3">
            <div className="flex justify-between items-center">
              <Skeleton className="w-[66px] h-[18px]" />
              <div className="flex gap-4 items-center">
                <Skeleton className="w-7 h-7 rounded-full" />
                <Skeleton className="w-7 h-7 rounded-full" />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-common-white justify-center h-[60px] w-full px-4 py-3">
            <Skeleton className="w-full h-[36px] rounded-sm" />
          </div>
        </header>

        {/* Main Content */}
        <div className="w-full">
          {/* Banner Image */}
          <div className="w-full px-4">
            <Skeleton className="aspect-square w-full" />
          </div>

          {/* Size Guide Button */}
          <div className="w-full flex justify-center h-[60px] py-2 px-4">
            <Skeleton className="w-full h-[48px] rounded-[4px]" />
          </div>

          {/* Filter Area */}
          <div className="w-full flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-[2px]" />
              <Skeleton className="w-16 h-4" />
            </div>
            <Skeleton className="w-[18px] h-[18px]" />
          </div>

          {/* Product Grid */}
          <div className="w-full">
            <div className="grid gap-[1px] grid-cols-2">
              {[1, 2, 3, 4, 6, 8].map((i) => (
                <div key={i} className="flex flex-col">
                  <Skeleton className="aspect-[199.33/239.20] w-full" />
                  <div className="flex flex-col pl-3 pr-2 pt-3 pb-6">
                    <Skeleton className="h-4 w-[80%] mb-1" />
                    <Skeleton className="h-4 w-[60%] mb-1" />
                    <Skeleton className="h-4 w-[40%] mb-1" />
                    <Skeleton className="h-4 w-[30%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed max-w-[600px] w-full bottom-0 bg-white border-t">
          <nav className="flex items-center justify-around h-[56px]">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center justify-center gap-1"
              >
                <Skeleton className="w-7 h-7 rounded-full" />
                <Skeleton className="w-12 h-3" />
              </div>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}
