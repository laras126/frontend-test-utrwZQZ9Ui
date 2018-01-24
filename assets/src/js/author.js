export const $card = {
	expandBtn: document.querySelector( '*[rel=js-card-expand-btn]' ),
	desc: document.querySelector( '*[rel=js-card-desc]' )
};

export function init() {
	$card.expandBtn.addEventListener( 'click', handleBioToggle );
}

// NOTE: This could be reused and abstracted as a helper function
// to account for the "# New Stories" toggle
export function handleBioToggle( el ) {
	$card.desc.classList.toggle( 'js-collapsed-desc' );
}

