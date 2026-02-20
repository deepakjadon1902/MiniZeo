const Loader = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-lg border border-border bg-card">
          <div className="aspect-square bg-secondary" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-3/4 rounded bg-secondary" />
            <div className="flex items-center justify-between">
              <div className="h-5 w-16 rounded bg-secondary" />
              <div className="h-7 w-16 rounded bg-secondary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
