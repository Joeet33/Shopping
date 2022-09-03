import { NextPage } from "next";
import { Nav } from "../components/nav";

const Pay: NextPage = () => {
  interface ShoppingProps {
    id: number;
    item: string;
    price: string;
  }

  const card: ShoppingProps[] = [
    {
      id: 1,
      item: "t-shirt",
      price: "£10",
    },
    {
      id: 2,
      item: "shorts",
      price: "£20",
    },
  ];

  return (
    <>
      <Nav />
      <div className="container">
        {card.map((card) => {
          return (
            <ul key={card.id}>
              <li>
                <div>{card.item}</div>
                <div>{card.price}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Pay;
