export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-beige to-bronze-light/20 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 border-4 border-bronze border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xl font-serif font-bold text-charcoal">
            Ivan <span className="text-bronze">Saxophon</span>
          </span>
        </div>
        <p className="text-charcoal/60 text-sm">Loading...</p>
      </div>
    </div>
  );
} 