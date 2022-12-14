const tombol = document.querySelector('#movies-button');
tombol.addEventListener('click', async function() {
	try {
		const keyword = document.querySelector('#movies-input');
		const movies = await getmovies(keyword.value);
		moviesui(movies);
	} catch (error) {
		err = `<div class="alert alert-danger text-center" role="alert"><b>${error}</b></div>`
		const movielist = document.querySelector('#movies-list');
		movielist.innerHTML = err;
	}
});

function getmovies(keyword) {
	return fetch('http://www.omdbapi.com/?apikey=2d7ae015&s=' + keyword)
		.then(result => {
			if (!result.ok) {
				throw new Error(result.statusText);
			}
			return result.json()
		})
		.then(result => {
			if (result.Response === "False") {
				throw new Error(result.Error)
			}
			return result.Search
		});
}

function moviesui(movies) {
	let cards = '';
	movies.forEach(m => cards += Showcards(m));
	const movielist = document.querySelector('#movies-list');
	movielist.innerHTML = cards;
}

document.addEventListener('click', async function (e) {
	if (e.target.classList.contains('see-detail')) {
		const dataid = e.target.dataset.id;
		const movie = await getmovieid(dataid);
		movieid(movie);
	}
});


function getmovieid(dataid) {
	return fetch('http://www.omdbapi.com/?apikey=2d7ae015&i=' + dataid)
	.then(result => result.json())
	.then(m => m);
}

function movieid(movie) {
	const moviedetail = Showmovieid(movie);
	const modal = document.querySelector('.modal-body');
	modal.innerHTML = moviedetail;
	
}

function Showcards(m) {
	return `<div class="col-4 mb-3">
	<div class="card" style="width: 18rem;">
	  <img src="${m.Poster}" class="card-img-top" alt="poster">
	  <div class="card-body">
		<h5 class="card-title">${m.Title}</h5>
		<h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
		<a href="#" class="card-link see-detail" data-id="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal" id="see-detail">see detail</a>
	  </div>
	</div>
</div>`
}

function Showmovieid(m) {
	return`<div class="container-fluid">
	<div class="row">
		<div class="col-md-5">
			<img src="${m.Poster}" alt="Poster">
		</div>
		<div class="col-md-7">
			<ul class="list-group">
				<li class="list-group-item"><h3>${m.Title}</h3></li>
				<li class="list-group-item"><b>Released :</b>${m.Released}</li>
				<li class="list-group-item"><b>Genre :</b>${m.Genre}</li>
				<li class="list-group-item"><b>Actors :</b>${m.Actors}</li>
				<li class="list-group-item"><b>Plot :</b>${m.Plot}</li>
			</ul>
		</div>
	</div>
</div>`
}