import client from "@/lib/sanity";

// Create a query called siteHeaderQuery
const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const homepageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle,
  "ctaUrl": cta {
    current
        },
  image {
    ...asset->
  }
}`;

export async function getStaticProps() {
	const homepageData = await client.fetch(homepageQuery);
	const siteHeaderData = await client.fetch(siteHeaderQuery);

	const data = { homepageData, siteHeaderData };

	return {
		props: {
			data,
		},
		revalidate: 1,
	};
}
