import axios from "axios";
import * as XLSX from "xlsx";

const generateXlsx = (data, path) => {
  const book = XLSX.utils.book_new();
  const sheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(book, sheet, path);

  const timestamp = Date.now();
  const filename = `${path}-${timestamp}.xlsx`;
  XLSX.writeFile(book, filename);
};

export const getData = async (path, setLoading) => {
  // const baseURL = `http//146.83.216.251/api/csv/game/${path}`;
  const baseURL = `/api/${path}`;

  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: baseURL,
    headers: { "Content-Type": "application/json" },
    timeout: 20000,
  };

  try {
    const { data } = await axios.request(config);
    generateXlsx(data[`${path}s`], path);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
