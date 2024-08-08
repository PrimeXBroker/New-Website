"use client";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const ForexTable = () => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [colDefs, setColDefs] = useState([
    {
      field: "Symbol",
      valueGetter: (params) => {
        return params.data.symbole;
      },
      filter: true,
      floatingFilter: true,
    },
    { field: "full name" },
    { field: " contract size" },
    { field: "Minimum lot size" },
    { field: "Minimum Transaction Step" },
    { field: "maximum lot size" },
    { field: "swap" },
  ]);
  const pagination = true;
  const paginationPageSize = 20;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const getExcelData = async () => {
    try {
      const response = await fetch("/assets/data/forex.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const headers = [];
      const data = XLSX.utils
        .sheet_to_json(worksheet, { header: 1 })
        .map((row, rowIndex) => {
          if (rowIndex === 0) {
            row.forEach((header) => headers.push({ title: header }));
            return null;
          } else {
            const rowData = {};
            row.forEach((cell, index) => {
              rowData[headers[index].title] = cell;
            });
            return rowData;
          }
        })
        .filter((row) => row);

      setHeaders(headers);
      setData(data);
    } catch (e) {
      console.error("Error fetching and parsing Excel file:", error);
    }
  };
  useEffect(() => {
    getExcelData();
  }, []);
  return (
    <section className="container">
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 800 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </section>
  );
};

export default ForexTable;
