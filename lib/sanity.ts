import { createClient } from "@sanity/client";

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = createClient({
	projectId: "83oul9fu",
	dataset: "production",
	token: "", // or leave blank to be anonymous user
	useCdn: false, // `false` if you want to ensure fresh data
	ignoreBrowserTokenWarning: true,
});

export default client;
