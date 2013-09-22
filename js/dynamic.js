/**
 * Torna a tag LI do menu funcionando com hover
 * @param $ - objeto jQuery
 */
function makeLiHover($) {

	$("#cabecalho_menu_left > li").each(function() {

		$(this).mouseover(function() {
			$(this).toggleClass("over");
		});
		
		$(this).mouseout(function() {
			$(this).toggleClass("over");
		});
	});
};
