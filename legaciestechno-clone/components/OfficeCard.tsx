interface OfficeCardProps {
  image: string;
  city: string;
  address: string;
}
export default function OfficeCard({ image, city, address }: OfficeCardProps) {
  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <img src={image} alt={city} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-5 space-y-2">
        <h3 className="text-xl font-semibold tracking-wide">{city}</h3>
        <p className="text-md text-[#191919] leading-relaxed min-h-[48px]">
          {address}
        </p>
      </div>
    </div>
  );
}
