export const load = async ({ params }) => {
	const tiktokDL = async (url: string) => {
		const domain = 'https://www.tikwm.com/';
		const response = await fetch(`${domain}api/`, {
			method: 'POST',
			headers: {
				accept: 'application/json, text/javascript, /; q=0.01',
				'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
				// 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
				'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
				'user-agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
			},
			body: new URLSearchParams({
				url: url,
				count: '12',
				cursor: '0',
				web: '1',
				hd: '1'
			})
		});

		const data = await response.json();

		return {
			nowm: domain + data.data.play,
			wm: domain + data.data.wmplay,
			music: domain + data.data.music
		};
	};
	const { user, videoid } = params;

	const url = `https://www.tiktok.com/@${user}/video/${videoid}`;
	const data = await tiktokDL(url);

	return data;
};
