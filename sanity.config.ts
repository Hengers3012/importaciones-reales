/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
	basePath: "/sanity-studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,

	plugins: [
		deskTool(),
		visionTool({ defaultApiVersion: apiVersion }),
		media(),
	],
});
