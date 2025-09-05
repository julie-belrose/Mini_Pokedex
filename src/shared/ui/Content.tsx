import { EmptyState } from '../components/EmptyState';

export function LoadingSkeleton({ count = 8 }: { count?: number }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="animate-pulse rounded border p-4">
            <div className="h-24 w-full rounded bg-gray-200 mb-3" />
            <div className="h-4 w-3/4 rounded bg-gray-200 mb-2" />
            <div className="h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    );
}



export function ErrorMessage({ children = 'An error has occurred.' }: { children?: React.ReactNode }) {
    return <div className="p-4 rounded bg-red-50 text-red-700">{children}</div>;
}

export type ContentProps<T> = {
    items: readonly T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    keyExtractor?: (item: T, index: number) => React.Key;
    isLoading?: boolean;
    skeletonCount?: number;
    error?: string | null;
    empty?: React.ReactNode;
    children?: React.ReactNode; 
};

export function Content<T>({
    items,
    renderItem,
    keyExtractor,
    isLoading = false,
    skeletonCount = 8,
    error = null,
    empty,
    children,
  }: ContentProps<T>) {
    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (isLoading && items.length === 0) return <LoadingSkeleton count={skeletonCount} />;
    if (!isLoading && items.length === 0) return <EmptyState {...(empty ? { children: empty } : { title: 'No results found', message: 'The results you were looking for were not found.' })} />;
  
    return (
      <section className="content">
        {children && <div className="mb-4">{children}</div>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const key = keyExtractor ? keyExtractor(item, i) : i;
            return <div key={key}>{renderItem(item, i)}</div>;
          })}
        </div>
      </section>
    );
  }