import React from 'react'
import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'

function ChangePassword() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
      gap={6}
    >
      <FormControl id="oldPassword">
        <FormLabel>Old Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="Type your old password"
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>New Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="Type your new password"
        />
      </FormControl>
    </Grid>
  )
}

export default ChangePassword
