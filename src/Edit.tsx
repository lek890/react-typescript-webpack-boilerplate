import React from "react";

import { Modal, Button, TextContainer } from "@shopify/polaris";

export function Edit() {
  const [active, setActive] = React.useState(true);
  const handleChange = React.useCallback(() => setActive(!active), [active]);
  const activator = <Button onClick={handleChange}>Open</Button>;
  return (
    <div style={{ height: "500px" }}>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: "Add Instagram",
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: "Learn more",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Use Instagram posts to share your products with millions of
              people. Let shoppers buy from your store without leaving
              Instagram.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}
