import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
	ignoreBrowserTokenWarning: true,
	apiVersion,
	dataset,
	projectId,
	useCdn,
	token: "skywn46fJT5iDQZuIOK08xTlVnw2yLWeJwuOFbw2NES8Ay7aCKNgm99OOaERPknZTLhxkNaVSnh2WQvPBN2TE1cGyNxs9IlKS9DxGD9gwNBwvRuLjDQDpOau0BkD4KtzxeBLD278hKCR9U454UiZajXwmmO0oSHI50QpxP2gZR6RHTq4SkAX",
});
