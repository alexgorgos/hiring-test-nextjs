const previewSecret = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const remoteUrl = "hiring-test-nextjs.vercel.app";
const localUrl = "http://localhost:3000";

const resolveProductionUrl = (doc) => {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = "/api/preview";
  previewUrl.searchParams.append("secret", previewSecret);
  previewUrl.searchParams.append("_id", doc._id);

  return previewUrl.toString();
};

export default resolveProductionUrl;
