const footers = [
  {
    id: 1,
    title: "Watch",
    subTitle: [
      { id: 1, label: "Spotlight" },
      { id: 2, label: "Movies" },
      { id: 3, label: "TV" },
      { id: 4, label: "Free" },
    ],
  },
  {
    id: 2,
    title: "My Account",
    subTitle: [
      { id: 1, label: "My Video" },
      { id: 2, label: "Account" },
      { id: 3, label: "Manage Device" },
      { id: 4, label: "Setting" },
    ],
  },
  {
    id: 3,
    title: "Features",
    subTitle: [
      { id: 1, label: "Family" },
      { id: 2, label: "Disc To Digital" },
      { id: 3, label: "Instawatch" },
      { id: 4, label: "Movies Anywhere" },
    ],
  },
  {
    id: 4,
    title: "Help",
    subTitle: [
      { id: 1, label: "About Us" },
      { id: 2, label: "Devices" },
      { id: 3, label: "Support" },
      { id: 4, label: "Forum" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-around text-center mt-14 pb-7 text-white font-bold ">
        {footers.map((item) => {
          return (
            <div key={item.id}>
              <h2 className=" text-2xl lg:text-3xl">{item.title}</h2>
              <div className=" grid gap-3 mt-5">
                {item.subTitle.map((footItem) => {
                  return (
                    <p key={footItem.id} className=" text-sm">
                      {footItem.label}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className=" text-center text-white text-xl font-semibold py-3">
        Designed and Developed By Emmanuel 2023.
      </p>
    </>
  );
};

export default Footer;
