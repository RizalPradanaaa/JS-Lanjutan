// Menggunakan XMLHTTPREQUEST

// function getdata(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             success(xhr.response);
//         }else{
//             error();
//         }

//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getdata('data.json', data => {
//     const mhs = JSON.parse(data);
//     mhs.forEach(d => {
//         console.log(d);
//     });
// }, () => {

// });



// JQUERY
console.log('mulai');
$.ajax({
    url : 'data.json',
    method : 'get',
    success: data => data.forEach(e => {
        console.log(e.prodi);
    }),
    error: data => console.log(error)
});
console.log('selesai');