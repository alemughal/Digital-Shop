import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';
import cardData from './CardData';

const NewArrivalCard = () => {
  const cardDataSlice = cardData.slice(0, 4); // Slice the array to get up to 8 IDs

  return (
    <>
      {cardDataSlice.map((card, index) => (
        <div key={card.id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
          <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={card.image} alt="product image" />
            <img src={card.hoverImage} className="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 transform hover:opacity-100" alt="Nova imagem" />
            <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-pulse group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">{card.title}</h5>
            </a>
            <p className="text-gray-700 mt-2">{card.description}</p>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">${card.price}</span>
                <span className="text-sm text-slate-900 line-through">{card.oldPrice}</span>
              </p>
            </div>
            <button className="flex items-center w-full justify-between rounded-3xl text-xl bg-blue-700 px-7 py-2.5 text-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300">
              Add to cart <RiShoppingBasketLine className="ml-1" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewArrivalCard;