import * as React from "react";
import "@shopify/polaris/dist/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page } from "@shopify/polaris";
import { Edit } from "./Edit";

export const AppComponent = () => {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <Edit />
      </Page>
    </AppProvider>
  );
};
