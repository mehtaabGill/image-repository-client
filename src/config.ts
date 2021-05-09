if (!process.env.VUE_APP_BASE_API_URL) {
  throw new Error("Missing VUE_APP_BASE_API_URL from .env file.");
}

export default {
  BASE_API_URL: process.env.VUE_APP_BASE_API_URL,
};
