import AppButton from "../../common/Button";

export default function NotFound() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">Nothing to see here!</h2>
        <p className="mt-6">
          <AppButton title="Go to Home" link path="/" />
        </p>
      </div>
    </div>
  );
}
