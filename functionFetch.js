function showUsers(idInput, idOutput) {
	let path = 'https://api.github.com/search/users?q=';
	let textInput = document.getElementById(idInput).value;
	document.getElementById(idOutput).style.backgroundImage = "url('http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_gray_48.gif')";
	fetch(path + textInput)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			drawList(idOutput, json);
		})
		.catch (function(error) {
			return 'Request failed';
		});
}



function drawList(id, json) {
	let elem = document.getElementById(id);
	elem.innerHTML = "";
	let ul = document.createElement('ul');
	let limit = Math.min(5, json.items.length);
	document.getElementById(id).style.backgroundImage = "none";

	if(limit == 0) {
		let p = document.createElement('p');
		p.classList.add("text-danger");
		p.innerHTML = "Ничего не найдено";
		elem.appendChild(p);
		return;
	}

	for(let i = 0; i < limit; i++) {
		let li = document.createElement('li');
		li.innerHTML = json.items[i].login;
		ul.appendChild(li);
	}
	elem.appendChild(ul);
}


