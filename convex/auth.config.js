
export default {
  providers: [
    {
      // Set CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard for each environment.
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ]
} ;