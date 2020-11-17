import * as React from "react";
import List from "./List";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

export const AppComponent = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <List></List>
    </ReactQueryCacheProvider>
  );
};
