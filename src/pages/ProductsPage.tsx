import React from "react";

import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";

import { ITEMS_PER_PAGE, PRODUCT_COLLECTION } from "../helpers/data";
import { Item } from "../components/products/Item";
import { Pagination } from "../components/products/Pagination";
import { ToolBar } from "../components/products/ToolBar";
import { ModalDescription } from "../components/products/ModalDescription";
import { EmptyCard } from "../components/products/EmptyCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxHeight: "100vh",
      maxWidth: "100vw",
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
    },
    paper: {
      height: "100vh",
      minWidth: "100%",
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contentContainer: {
      width: "100%",
      height: "100hv",
      padding: "1% 5%",
      margin: 0,
      [theme.breakpoints.up("lg")]: {
        padding: "1% 15%",
      },
    },
    paginationContainer: {
      paddingBottom: "3%",
    },
  })
);

export const ProductsPage = () => {
  const classes = useStyles();

  const [search, setSearch] = React.useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const [checkboxData, setCheckboxData] = React.useState({
    isActive: false,
    isPromo: false,
  });
  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxData({
      ...checkboxData,
      [event.target.name]: event.target.checked,
    });
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (_: React.BaseSyntheticEvent, value: number) => {
    setPage(value);
  };

  const [modalData, setModalData] = React.useState({
    open: false,
    title: "",
    description: "",
  });
  const handleShowDetails = (e: React.MouseEvent) => {
    const targetProduct = PRODUCT_COLLECTION.find(
      (product) => product.id === e.currentTarget.id
    );
    targetProduct &&
      setModalData({
        open: true,
        title: targetProduct.title,
        description: targetProduct.description,
      });
  };
  const handleCloseDetails = () => {
    setModalData({
      open: false,
      title: "",
      description: "",
    });
  };

  const filteredProducts = () => {
    const result = PRODUCT_COLLECTION.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
    if (checkboxData.isPromo)
      return result.filter((item) => item.isPromo === true);
    if (checkboxData.isActive)
      return result.filter((item) => item.isInStock === true);
    return result;
  };
  const filteredList = filteredProducts();

  const noOfPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  return (
    <div className={classes.wrapper}>
      <div>
        <ToolBar
          search={search}
          checkboxData={checkboxData}
          handleSearch={handleSearch}
          handleChangeState={handleChangeState}
        />
      </div>
      <Paper elevation={0} className={classes.paper}>
        {filteredList.length > 0 ? (
          <List
            component={Grid}
            container
            className={classes.contentContainer}
            spacing={3}
          >
            {filteredList
              .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
              .map((item) => {
                return (
                  <ListItem
                    id={item.id}
                    component={Grid}
                    container
                    item
                    key={item.id}
                    md={3}
                    wrap="wrap"
                  >
                    <Item
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      rating={item.rating}
                      isInStock={item.isInStock}
                      isPromo={item.isPromo}
                      onClick={handleShowDetails}
                    ></Item>
                    <ModalDescription
                      open={modalData.open}
                      title={modalData.title}
                      description={modalData.description}
                      handleClose={handleCloseDetails}
                    />
                  </ListItem>
                );
              })}
          </List>
        ) : (
          <EmptyCard />
        )}
        <Grid className={classes.paginationContainer}>
          {filteredList.length > ITEMS_PER_PAGE && (
            <Pagination
              noOfPages={noOfPages}
              page={page}
              handleChange={handleChange}
            />
          )}
        </Grid>
      </Paper>
    </div>
  );
};
