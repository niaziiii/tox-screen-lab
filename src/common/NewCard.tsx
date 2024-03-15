import AppButton from "./Button";

export default function NewCard({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[350px] bg-white">
        <img src={img ? img : "/supplies/image-1.png"} alt="news" />
        <h3 className="text-2xl text-darkBlue p-2">{title}</h3>
        <p className="text-xs p-2">{description}</p>
        <div className="mt-4 p-2">
          <AppButton
            title="Learn more"
            className="bg-transparent !text-lightBlue  hover:bg-transparent hover:!text-lightBlue/70 w-[140px]"
            style={{ border: "1px solid #41BFDD", borderRadius: "15px" }}
          />
        </div>
      </div>
    </div>
  );
}
