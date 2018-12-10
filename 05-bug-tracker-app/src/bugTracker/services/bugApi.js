import axios from 'axios';

function getAll(){
	return axios
		.get('http://localhost:3030/bugs')
		.then(response => response.data);
		
}

let bugApi = {
	getAll
};

export default bugApi;