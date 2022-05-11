import { Box, Button } from "@chakra-ui/react";

function Actions() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button id="updateBtn">Update</Button>
    </Box>
  );
}

export default Actions;
