interface Config {
  apiBaseUrl: string;
  googleClientId: string;
  googleClientSecret: string;
  spaceAccessKeyId: string;
  spaceSecretAccessKey: string;
  spaceEndPoint: string;
  orderAppUrl: string;
}

export const config: Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  spaceAccessKeyId: process.env.SPACE_ACCESS_KEY_ID || "",
  spaceSecretAccessKey: process.env.SPACE_SECRET_ACCESS_KEY || "",
  spaceEndPoint: process.env.SPACE_ENDPOINT || "",
  orderAppUrl: process.env.ORDER_APP_Url || "",
};