export const load = async ({ params }) => {
	const { redirectid } = params;
	const response = await fetch(`https://www.tiktok.com/t/${redirectid}`, {
		headers: {
			accept: 'application/json, text/javascript, /; q=0.01',
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			// 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
			'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
			'user-agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
		}
	});
	const text = await response.text();
	const ogurl = text.split('property="og:url" content="')[1].split('?')[0];
	return {
		redirect: ogurl.split('.com')[1]
	};
};
