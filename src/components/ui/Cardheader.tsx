import Image from "next/image";
const Cardheader = ({ image_src }: { image_src: string }) => {
  return (
    <>
      <Image
        src={image_src}
        alt="feature template"
        width={500}
        height={500}
        className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-[200px]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      />
    </>
  );
};

export default Cardheader;
