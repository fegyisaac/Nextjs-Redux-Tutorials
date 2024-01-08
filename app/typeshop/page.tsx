import Catalogues from "@/components/Catalogues";
import doe from "@/public/doe.jpg";
import mark from "@/public/mark.jpg";
import shelve from "@/public/shelve.jpg";
import zeke from "@/public/zeke.jpg";

const TypeShop = () => {
  const data = [
    {
      id: 1,
      image: mark,
      name: "Books",
      price: 10.98,
    },
    {
      id: 2,
      image: doe,
      name: "Car",
      price: 109.0,
    },
    {
      id: 3,
      image: shelve,
      name: "Chalkboard",
      price: 2.9,
    },
    {
      id: 4,
      image: zeke,
      name: "Duster",
      price: 1008.9,
    },
  ];
  return (
    <div className="px-3 text-white">
      <div>STORE</div>

      <div>
        <div>
          <div className="flex justify-evenly gap-3 items-center flex-wrap mb-5">
            {data.map((item) => (
              <Catalogues {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeShop;
{
  /* {['doe','mark','shelve','zeke'].map((path, i) => { */
}
{
  /* <div key={i}> */
}
{
  /* </div> */
}
{
  /* }) } */
}
