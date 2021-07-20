import { Router, useRouter } from "next/router";
import { Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useState, useEffect, useCallback } from "react";

const LayoutGrid = ({ children }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const handleStart = () => {
    setLoading(true);
  };
  const handleComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
    };
  }, [Router]);

  useEffect(() => {
    router.push(page.toString());
  }, [page]);

  return (
    <Paper className="flex flex-col justify-center items-center">
      {!loading ? (
        <div className="grid grid-cols-2 gap-4 m-5 md:grid-cols-4">
          {children}
        </div>
      ) : (
        <div className="text-center text-lg m-5">loading...</div>
      )}
      <Pagination
        page={page}
        count={10}
        size="large"
        onChange={(_, v) => setPage(v)}
      />
    </Paper>
  );
};

export default LayoutGrid;
