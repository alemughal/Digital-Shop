'use client'

import React, { useState } from "react";
import EcommerceCard from "@/Components/Card";
import CardData from "@/Components/CardData";
import { Pagination } from "antd";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 1;

  const totalCards = CardData.length; // Total number of cards available
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = CardData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="items-start text-start m-10">
        <h1 className="font-bold text-5xl">New Arrivals Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 gap-6 mb-5 mx-12 sm:mt-12">
        {currentCards.map((card, index) => (
          <EcommerceCard key={card.id} data={card} />
        ))}
      </div>
      <Pagination
        className="text-center"
        current={currentPage}
        pageSize={cardsPerPage}
        total={totalCards}
        onChange={handlePageChange}
      />
    </>
  );
};

export default PaginationComponent;