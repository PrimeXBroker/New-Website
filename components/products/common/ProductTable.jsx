"use client";
import { Pagination } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ProductTable = ({ headers, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const filteredData = data.filter((row) => row && row.length > 0);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredData.length, totalPages]);

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container highlights-col">
        <div className="table-responsive overflow-x-auto">
          <table
            className="table text-tm dark:text-tm-dark mb-0 w-full"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0",
            }}
            dir="ltr"
          >
            <thead>
              <tr className="bg-cc dark:bg-cc-dark">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className={`px-5 py-5 text-left ${
                      index === headers.length - 1
                        ? "none"
                        : "border-r border-e1 dark:border-e1-dark"
                    }`}
                  >
                    <h5 className="text-sm text-pcp dark:text-pcp-dark">
                      {header}
                    </h5>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0
                      ? "bg-p dark:bg-p-dark"
                      : "bg-cc dark:bg-cc-dark"
                  }`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      className={`py-5 px-5 text-sm ${
                        cellIndex === row.length - 1
                          ? "none"
                          : "border-r border-e1 dark:border-e1-dark"
                      } ${
                        cellIndex === 1
                          ? "w-[460px]"
                          : cellIndex === 0
                          ? "w-[185px]"
                          : "w-[220px]"
                      }`}
                      key={cellIndex}
                      style={{
                        minWidth:
                          cellIndex === 1
                            ? "320px"
                            : cellIndex === 0
                            ? "155px"
                            : "175px",
                        textAlign: cellIndex === 0 ? "left" : "left",
                        borderTop: "none",
                        borderBottom: "none",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length > recordsPerPage && (
          <div className="flex justify-center mt-8">
            <Pagination
              total={totalPages}
              page={currentPage}
              onChange={setCurrentPage}
              size="lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTable;
