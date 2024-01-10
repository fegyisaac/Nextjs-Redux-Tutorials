

const CartActions = () => {
  let quantity = 1;

  return (
    <div className="min-h-[50px]">
      <div className="mt-auto">
        {quantity === 0 ? (
          <button className="bg-green-500 w-full py-1 rounded-md">
            + Add to Cart
          </button>
        ) : (
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="flex justify-between items-center gap-2">
              <button className="w-7 h-7 bg-blue-700 rounded-sm">-</button>
              <span>{`${quantity} in Cart`}</span>
              <button className="w-7 h-7 bg-blue-700 rounded-sm">+</button>
            </div>
            <button className="bg-red-600 text-white text-[13px] py-1 px-2 rounded-md">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartActions;
