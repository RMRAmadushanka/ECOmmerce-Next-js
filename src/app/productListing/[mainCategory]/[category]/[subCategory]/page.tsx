"use client";
import Footer from "@/components/footer/Footer";
// import { allSweatshirtsData } from "@/utilities/data/productsCategory/all-sweatshirts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { preload } from "react-dom";
import { stringify } from "postcss";
import { usePathname } from "next/navigation";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import FilterIcon from "@/components/icons/ecommerce/FilterIcon";
import { ProductType, getProducts } from "@/apis/products";
import { useQuery } from "react-query";
import { ProductsProps } from "@/apis/products";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/all-sweatshirts/ProductItem";

interface Props {
  params: {
    mainCategory: string;
    category: string;
    subCategory: string;
  };
}

const Products = (params: Props) => {
  const p = params.params;

  console.log("p ::", p.mainCategory)


  const [query, setQuery] = useState({
    productName: "",
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    page: 1,
    pageSize: 50,
    categories: [decodeURIComponent(p.mainCategory), decodeURIComponent(p.category), decodeURIComponent(p.subCategory)],
    brands: [],
  });

  const { data, isLoading, error } = useQuery(["products", query], () =>
    getProducts(
      query.productName, // product name
      query.minPrice, // min price
      query.maxPrice, // max price
      query.page, // page number
      query.pageSize, // page size
      query.categories,
      query.brands
    )
  );

  const handleSetPage = (page: number) => {
    setQuery({
      ...query,
      page: page,
    });
  };

  useEffect(() => {
    console.log("query page : " + query.page);
  }, [query]);

  const handleFilter = () => {
    console.log("handleFilter");
  };

  const handleProductColor = () => {
    console.log("handleProductColor");
  };

  const handleProductType = () => {
    console.log("handleProductType");
  };

  // useEffect(() => {
  //     console.log("data : ", data);
  // }, [data])

  if (error) {
    return <p>Got Error</p>;
  }

  if (isLoading || !data) {
    return <p>Loading</p>;
  }

  return (
    <>
      {p.mainCategory && p.category && p.subCategory && <p className="px-4 md:px-16 pt-10 text-md font-semibold text-gray-400 text-sm">
        {decodeURIComponent(p.mainCategory)} / {decodeURIComponent(p.category)}{" "}
        / {decodeURIComponent(p.subCategory).slice(0, -1)}
      </p>}
      {/* filters */}
      <div className="flex flex-col sm:flex-row gap-5 justify-between py-9 px-4 md:px-8 lg:px-16">
        <div className="flex gap-4 text-sm font-semibold items-center">
          <span
            className="flex gap-1 items-center justify-center hover:cursor-pointer"
            onClick={handleFilter}
          >
            <FilterIcon />
            <p className="hidden sm:block hover:cursor-pointer">
              Sort and filter
            </p>
          </span>
          <p className="hover:cursor-pointer" onClick={handleProductColor}>
            color
          </p>
          <p className="hover:cursor-pointer" onClick={handleProductType}>
            Product type
          </p>
        </div>
        {/* Total items */}
        <p>{data.length} results</p>
      </div>
      {/* Products */}
      <ul className="grid mb-20 grid-cols-2 justify-center lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-6 px-4 md:px-8 lg:px-16">
        {data.map((Item: ProductType, index: number) => {
          const encodedProductId = encodeURIComponent(Item.id);
          return (
            //encodeURIComponent(JSON.stringify(Item))
            <Link key={index} href={`/product/${encodedProductId}`}>
              <ProductItem
                id={Item.id}
                image={Item.image}
                title={Item.name}
                price={Item.discounted_price}
                originalPrice={Item.retail_price}
                discount={Item.discount}
                quantity={999}
              />
            </Link>
          );
        })}
      </ul>
      {/* Pagination */}
      <div>
        <Pagination page={query.page} setPage={handleSetPage} />
      </div>
      {/* navigate to main page again */}
      <div className="bg-lightGray mb-6 flex items-center justify-center py-12">
        <span className="border border-darkGray flex items-center justify-center px-2 text-xs font-semibold py-1 rounded-full bg-white gap-2">
          <Link href="/">
            <p className="text-gray-400 uppercase hover:underline hover:cursor-pointer font-bold">
              Lacoste
            </p>
          </Link>
          <p>/</p>
          <p>All Sweatshirts</p>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Products;
