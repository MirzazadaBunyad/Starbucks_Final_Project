import { useState } from "react";
import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const planets = [
  {
    id: 1,
    name: "25",
    title: "Customize your drink",
    url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png",
    description:
      "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
  },
  {
    id: 2,
    name: "100",
    title:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
    description:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    id: 3,
    name: "200",
    title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
    description:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    id: 4,
    name: "300",
    title: "Sandwich, protein box or at-home coffee",
    url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png",
    description:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    id: 5,
    name: "400",
    title: "Select Starbucks® merchandise",
    url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
    description:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
];

const PlanetInfo = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  const handlePlanetClick = (id) => {
    const selected = planets.find((item) => item.id === id);
    setSelectedPlanet(selected);
  };

  return (
    <div>
      <div className=" max-md:flex max-md:justify-between flex justify-center bg-[#F1F8F5]">
        {planets.map((item) => {
          return (
            <NavLink
              className="flex border-b-2 items-center text-[25px] font-[SodoSB] px-[16px] pb-[16px] "
              key={item.id}
              onClick={() => {
                handlePlanetClick(item.id);
              }}
            >
              {item.name}
              <MdStar className="text-[#CBA68B] text-[16px]" />
            </NavLink>
          );
        })}
      </div>
      <div className="max-md:w-full max-md:flex-col flex justify-center items-center py-[32px] bg-[#D4E9E2]">
        <img
          className="w-[375px] max-md:w-full"
          src={selectedPlanet.url}
          alt="Card image cap"
        />
        <div className="max-md:w-full max-md:text-center px-[16px] w-[375px]">
          <h1 className="pb-[16px] max-md:text-[19px] text-[24px] font-[SodoSB]">
            {selectedPlanet.title}
          </h1>
          <p className="text-[16px] max-md:text-[14px] font-[Sodo]">{selectedPlanet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
