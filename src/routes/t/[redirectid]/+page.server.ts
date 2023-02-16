export const load = async ({ params }) => {
	const { redirectid } = params;
	const response = await fetch(`https://www.tiktok.com/t/${redirectid}`, {
		headers: {
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
		}
	});
	const text = await response.text();
	const ogurl = text.split('property="og:url" content="')[1].split('?')[0];
	return {
		redirect: ogurl.split('.com')[1]
	};
};
