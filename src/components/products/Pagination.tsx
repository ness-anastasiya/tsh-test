import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/";
import _ from "lodash";

import { theme } from "../../theme";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    border: "none",
    padding: "10px",
    background: "none",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Nunito, san-serif",
    fontSize: "16px",
  },
});

type PaginationProps = {
  noOfPages: number;
  productPage: number;
  handleChange?: (e: React.BaseSyntheticEvent) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  noOfPages,
  productPage,
  handleChange,
}) => {
  const classes = useStyles();

  const { items } = usePagination({
    count: noOfPages,
    page: productPage,
  });
  const selectedPage = items.findIndex((item) => item.selected === true);

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          // pages <= 6
          if (noOfPages <= 6) {
            let children = null;

            if (type === "page") {
              children = <Page selected={selected} item={item} page={page} />;
            } else {
              children = <FirstLast type={type} item={item} />;
            }
            return (
              <li key={index} onClick={handleChange}>
                {children}
              </li>
            );
          }

          // pages > 6, selected page 1 or 2
          if (noOfPages > 6 && (selectedPage === 1 || selectedPage === 2)) {
            let children = null;
            const arr = [1, 2, 3, noOfPages, noOfPages - 1, noOfPages - 2];

            if (type === "page" && _.includes(arr, page)) {
              children = <Page selected={selected} item={item} page={page} />;
            } else if (type === "page" && !_.includes(arr, page)) {
              children = <Disabled />;
            } else {
              children = <FirstLast type={type} item={item} />;
            }
            return (
              <li key={index} onClick={handleChange}>
                {children}
              </li>
            );
          }

          // pages > 6, selected page 3 and more
          if (noOfPages > 6) {
            let children = null;
            const arr = [
              selectedPage - 1,
              selectedPage,
              selectedPage + 1,
              noOfPages,
              noOfPages - 1,
              noOfPages - 2,
            ];

            if (
              type === "page" &&
              !_.includes(arr, page) &&
              page < selectedPage + 1 &&
              page === 1
            ) {
              children = <Disabled />;
            } else if (
              type === "page" &&
              !_.includes(arr, page) &&
              page < selectedPage + 1
            ) {
              return null;
            } else if (type === "page" && _.includes(arr, page)) {
              children = <Page selected={selected} item={item} page={page} />;
            } else if (type === "page" && !_.includes(arr, page)) {
              children = <Disabled />;
            } else {
              children = <FirstLast type={type} item={item} />;
            }
            return (
              <li key={index} onClick={handleChange}>
                {children}
              </li>
            );
          }

          return null;
        })}
      </ul>
    </nav>
  );
};

export const Disabled = () => {
  const classes = useStyles();
  return (
    <button className={classes.ul} disabled>
      ...
    </button>
  );
};

type FirstLastProps = {
  type: string;
  item: object;
};
export const FirstLast: React.FC<FirstLastProps> = ({ type, item }) => {
  const classes = useStyles();
  return (
    <button
      className={classes.ul}
      type="button"
      {...item}
    >
      {type === "previous" ? "First" : "Last"}
    </button>
  );
};

type PageProps = {
  selected: boolean;
  item: object;
  page: number;
};
export const Page: React.FC<PageProps> = ({ selected, item, page }) => {
  const classes = useStyles();
  return (
    <button
      className={classes.ul}
      type="button"
      style={{
        color: selected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      }}
      {...item}
    >
      {page}
    </button>
  );
};
