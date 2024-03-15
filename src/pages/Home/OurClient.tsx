import AppHeading from "../../common/Heading";

export default function OurClient() {
  const images = [
    "/ourClients/image-1.png",
    "/ourClients/image-2.png",
    "/ourClients/image-3.png",
    "/ourClients/image-4.png",
    "/ourClients/image-5.png",
    "/ourClients/image-6.png",
    "/ourClients/image-7.png",
    "/ourClients/image-8.png",
  ];
  return (
    <div className="py-20">
      <div className="w-[85%] mx-auto">
        <AppHeading title="Our Clients" className="text-center" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {images.map((img, i) => (
            <div key={i} className=" flex items-center justify-center">
              <img src={img} alt={"out client"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
