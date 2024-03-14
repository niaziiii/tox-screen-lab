import AppButton from "../../common/Button";

export default function NotFound() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">Page is under development</h2>
        <p className="mt-6 m-auto">
          <AppButton title="Home" link path="/" />
        </p>
      </div>
    </div>
  );
}
