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
    <section className="bg-[#000000] pt-12 sm:pt-20">
      <div className="container highlights-col">
        <div className="table-responsive overflow-x-auto">
          <table
            className="table text-[#ffffff] mb-0 w-full"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0",
            }}
            dir="ltr"
          >
            <thead>
              <tr style={{ backgroundColor: "#111111" }}>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    style={{
                      borderRight:
                        index === headers.length - 1
                          ? "none"
                          : "1px solid #1d1d1d",
                      borderBottom: "none",
                    }}
                    className="px-5 py-5 text-left"
                  >
                    <h5 className="text-sm text-[#fed100]">{header}</h5>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor: rowIndex % 2 === 0 ? "#000000" : "#111111",
                  }}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      className={`py-5 px-5 text-sm ${
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
                        borderRight:
                          cellIndex === row.length - 1
                            ? "none"
                            : "1px solid #1d1d1d",
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
