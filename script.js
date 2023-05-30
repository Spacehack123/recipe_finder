const textSearch = document.querySelector('.search')
const recipeList = document.querySelectorAll('li')

const searchRecipes = e => {
	const text = e.target.value.toLowerCase()

	recipeList.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'flex'
		} else {
			el.style.display = 'none'
		}
	})
}

textSearch.addEventListener('keyup', searchRecipes)
