import { Router, useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    <div className="flex flex-col justify-start items-center ">
      {!loading ? (
        <div className="grid grid-cols-2 gap-4 m-5 md:grid-cols-4">
          {children}
        </div>
      ) : (
        <CircularProgress size={40} className="m-3" />
      )}
      <Pagination
        page={page}
        count={10}
        size="large"
        onChange={(_, v) => setPage(v)}
      />
    </div>
  );
};

export default LayoutGrid;
