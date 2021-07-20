import { useRouter } from "next/router";
import { Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useState, useEffect } from "react";

const LayoutGrid = ({ children }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  // const changeHandler = (e, value) => {
  //   setPage(value);
  // };

  useEffect(() => {
    router.push(page.toString());
  }, [page]);

  return (
    <Paper className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 m-5 md:grid-cols-4">
        {children}
      </div>
      <Pagination
        page={page}
        count={10}
        size="large"
        onChange={(e, v) => setPage(v)}
      />
    </Paper>
  );
};

export default LayoutGrid;
