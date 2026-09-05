type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-5 text-4xl">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}