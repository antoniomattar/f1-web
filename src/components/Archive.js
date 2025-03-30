export default function Archive() {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Race Archive</h1>
        <p className="text-lg leading-relaxed mb-4">
          Explore past races and relive the excitement of Formula 1! 🏁
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <a
              href="https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              2024 Bahrain Grand Prix
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://en.wikipedia.org/wiki/2024_Saudi_Arabian_Grand_Prix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              2024 Saudi Arabian Grand Prix
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              2024 Australian Grand Prix
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
