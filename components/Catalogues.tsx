import CunrrencyFormatter from "@/utilities/CunrrencyFormatter";
import Image, { StaticImageData } from "next/image";
import CartActions from "./CartActions";

type CatalogueProps = {
  id: number,
  name: string,
  image: StaticImageData,
  price: number,
}


const Catalogues = ({id, name, image, price}: CatalogueProps) => {
    return ( 
        <div>
            <div key={id} className="px-6 pt-5 pb-4 bg-green-800 shadow-md rounded-md">
                <div className="h-[200px] w-[200px] object-cover">
                  <Image
                    src={image}
                    alt={name}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex justify-between items-center my-3 ">
                  <span className="text-base font-medium">{name}</span>
                  <span className="ml-3 text-slate-400">{CunrrencyFormatter(price)}</span>
                </div>
                <CartActions />
              </div>
        </div>
     );
}
 
export default Catalogues;