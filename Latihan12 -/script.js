// function searchMovies(a) {
// 	$('#movies-list').html('');

// 	$.ajax({
// 		url: 'http://www.omdbapi.com/',
// 		method: 'get',
// 		dataType: 'json',
// 		data:{
// 			'apikey' : '2d7ae015',
// 			's': $('#movies-input').val()
// 		},
// 		success: function (result) {
// 			$('#movies-list').val('');
// 			if ( result.Response === 'True' ) {
// 				let movie = result.Search;
// 				$('#movies-input').val('');

// 				$.each(movie, function(i, data) {
// 					$('#movies-list').append(`
						// <div class="col-4 mb-3">
						// 	<div class="card" style="width: 18rem;">
						// 	  <img src="` + data.Poster + `" class="card-img-top" alt="poster">
						// 	  <div class="card-body">
						// 	    <h5 class="card-title">` + data.Title + `</h5>
						// 	    <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
						// 	    <a href="#" class="card-link" data-id="` + data.imdbID + `" data-bs-toggle="modal" data-bs-target="#exampleModal" id="see-detail">see detail</a>
						// 	  </div>
						// 	</div>
						// </div>
// 					`);
// 				});
// 			}else{
// 				$('#movies-input').val('');

// 				$('#movies-list').append(`
// 					<div class="text-center">
// 						<h3>Movie Not Found</h3>
// 					</div>
// 					`);
// 			}
// 		}

// 	});

// }

// $('#movies-button').on('click', function() {
// 	searchMovies();
// 	return;
// });

// $('#movies-input').on('keyup', function(e) {
// 	if ( e.keyCode == 13 ) {
// 		searchMovies();
// 		return;
// 	}
// });

// $('#movies-list').on('click', '#see-detail', function() {
// 	$.ajax({
// 		url: 'http://www.omdbapi.com/',
// 		dataType: 'json',
// 		method: 'get',
// 		data:{
// 			'apikey' : '2d7ae015',
// 			'i' : $(this).data('id')
// 		},

// 		success: function (result) {
// 			if ( result.Response === 'True' ) {
// 				$('.modal-body').html(`
					// <div class="container-fluid">
					// 	<div class="row">
					// 		<div class="col-md-5">
					// 			<img src="` + result.Poster + `" alt="Poster">
					// 		</div>
					// 		<div class="col-md-7">
					// 			<ul class="list-group">
					// 				<li class="list-group-item"><h3>` + result.Title + `</h3></li>
					// 				<li class="list-group-item"><b>Released :</b> ` + result.Released + `</li>
					// 				<li class="list-group-item"><b>Genre :</b> ` + result.Genre + `</li>
					// 				<li class="list-group-item"><b>Actors :</b> ` + result.Actors + `</li>
					// 				<li class="list-group-item"><b>Plot :</b> ` + result.Plot + `</li>
					// 			</ul>
					// 		</div>
					// 	</div>
					// </div>
// 					`);
// 			}
// 		}
// 	});
// });

const tombol = document.querySelector('#movies-button');
tombol.addEventListener('click', async function() {
	const keyword = document.querySelector('#movies-input');
	const movies = await getmovies(keyword.value);
	moviesui(movies);
});

document.addEventListener('click', async function (e) {
	if (e.target.classList.contains('see-detail')) {
		const dataid = e.target.dataset.id;
		const movie = await getmovieid(dataid);
		movieid(movie);
	}
});

function getmovies(keyword) {
	return fetch('http://www.omdbapi.com/?apikey=2d7ae015&s=' + keyword)
		.then(result => result.json())
		.then(result => result.Search);
}

function moviesui(movies) {
	let cards = '';
	movies.forEach(m => cards += Showcards(m));
	const movielist = document.querySelector('#movies-list');
	movielist.innerHTML = cards;
}

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