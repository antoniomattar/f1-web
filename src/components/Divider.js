export default function Divider(props) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-lg font-medium text-gray-900">
          {props.name}
        </span>
      </div>
    </div>
  );
}
