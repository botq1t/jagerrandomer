let photo=[
		"images/yager.jpg",
		"images/yager2.jpg",
		"images/yager3.jpg",
		"images/yager4.jpg",
		"images/yager5.jpg",
		];
		var ph=photo.length;
		var phh=Math.round(Math.random()*(ph-1));
		console.log("Background: "+ph, phh)
		document.write("<style type=\"text/css\">body {background-size: 25% 25%; background-image: url("+photo[phh]+"); background-attachment: fixed;</style>");