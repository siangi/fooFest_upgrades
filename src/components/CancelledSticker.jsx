export default function CancelledSticker() {
  return (
    <div className="bg-transparent_black flex  text-center row-start-0 col-start-0 row-start-1 col-start-1 z-10 py-3 h-full w-full">
      <figure className="flex flex-col gap-5 max-w-[40%] m-auto items-center opacity-100">
        <img
          className="max-w-[8rem]"
          src={process.env.PUBLIC_URL + "./icons/crossEyes.svg"}
          alt=""
        />
        <figcaption className="text-white font-bodyFont text-lg lg:text-3xl">
          CANCELLED
        </figcaption>
      </figure>
    </div>
  );
}
