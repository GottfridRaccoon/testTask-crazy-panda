
$(() => {

	let changeColor = () => {
		const r = $("#red").slider("value"),
			g = $("#green").slider("value"),
			b = $("#blue").slider("value")
		if ($("input:checked")) {
			switch (Number($("input:checked").val())) {
				case 0:
					$("#content__p").css("color", `RGB(${r},${g},${b})`)
					break;
				case 1:
					$("#content__p").css("background-color", `RGB(${r},${g},${b})`)
					break;
				default:
					console.log("что-то пошло не так")
			}
		}
	}

	$("input").checkboxradio({ icon: false });
	$("#red, #green, #blue").slider({
		slide: changeColor,
		change: changeColor,
		max: 255,
		value: 127,
	})
});