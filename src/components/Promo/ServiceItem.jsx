import promoImg from "../../images/promoImage";

const ServiceItem = (props) => {
  const { children = "Haw Anying", imageSrc } = props;
  return (
    <div className="w-[100px] service-item flex flex-col items-center">
      <div className="m-2 w-[50px] flex items-center justify-center overflow-hidden h-[50px] bg-slate-200 rounded-full">
        {imageSrc && (
          <img src={imageSrc} alt={children} className="w-full h-full" />
        )}
      </div>
      <p className="text-xs text-gray-800 text-center">{children}</p>
    </div>
  );
};

const MainServiceItem = () => {
  const items = [
    { name: "Promo Hari Ini", key: "promotoday" },
    { name: "Beli Lokal", key: "newproduct" },
    { name: "Mumpung Murah", key: "turunharga" },
    { name: "Tiket & Hiburan", key: "ticket" },
    { name: "Tokopedia Seru", key: "tokpedev" },
    { name: "Keuangan", key: "keuangan" },
    { name: "Film & Musik", key: "credit" },
    { name: "Elektronik", key: "official" },
    { name: "Pulsa & Token", key: "topup" },
    { name: "Bayar di Tempat", key: "cod" },
    { name: "Tokopedia NOW!", key: "liveshop" },
    { name: "Fashion", key: "fashion" },
    { name: "Live Shopping", key: "liveshop" },
    { name: "Tokopedia Farma", key: "farmasi" },
    { name: "HP & Tablet", key: "toy" },
    { name: "Lihat Semua", key: "seeall" },
  ];

  const firstRow = items.slice(0, 8);
  const secondRow = items.slice(8, 16);

  return (
    <div className="service-items-container">
      <div className="flex px-2">
        {firstRow.map((item, i) => (
          <ServiceItem key={i} imageSrc={promoImg[item.key]}>
            {item.name}
          </ServiceItem>
        ))}
      </div>
      <div className="flex px-2 mt-4">
        {secondRow.map((item, i) => (
          <ServiceItem key={i + 8} imageSrc={promoImg[item.key]}>
            {item.name}
          </ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default MainServiceItem;
