import { FormControl, FormLabel, Grid, Input, Select } from "@chakra-ui/react";

function Profile() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)" }}
      gap={6}
    >
      <FormControl id="fullName">
        <FormLabel>Full Name</FormLabel>
        <Input
          id="input"
          focusBorderColor="brand.blue"
          type="text"
          placeholder="Abidi Souha"
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          id="input"
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(408) 996–1010"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          id="input"
          focusBorderColor="brand.blue"
          type="email"
          placeholder="abidisouha@gmail.com"
        />
      </FormControl>
    </Grid>
  );
}

export default Profile;
