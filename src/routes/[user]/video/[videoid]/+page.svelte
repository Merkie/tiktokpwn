<script>
	export let data;
</script>

<p>tiktokpwn.com 2023</p>
<main style="width: 100%; height: 100vh; display: grid; place-items: center;">
	<div
		style="display: flex; flex-direction: column; gap: 20px; align-items: center; font-size: 20px"
	>
		<video style="width: 300px" src={data.nowm} controls />
		<a href={data.nowm} download>Download Video (press and hold on ios)</a>
	</div>
</main>
