/* eslint-disable no-unused-vars */
import { Grid,Skeleton } from '@mui/material'
import React from 'react'

export const LayoutLoader = () => {
    return (
        <Grid container sx={{ height: 'calc(100vh - 4rem)' }} spacing={"1rem"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
          <Skeleton variant="rectangular" />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
        <Skeleton variant="rectangular" />
        </Grid>
        <Grid 
        item 
        md={4}
        lg={3}
        sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}

          >
          <Skeleton variant="rectangular" />
        </Grid>
      </Grid>
    )
}
