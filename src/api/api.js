import axios from 'axios';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

// ---------------------------------- fetch___T O K E N
//
const fetchToken = async () => {
	try {
		const response = await axios.get(`${API_URL}/token`);
		return response.data.token;
	} catch (error) {
		console.error('error fetching token:', error);
		throw error;
	}
};

// --------------------------------- fetch___U S E R S
//
export const fetchUsers = async page => {
	try {
		const token = await fetchToken();
		const response = await axios.get(`${API_URL}/users`, {
			params: { page, count: 6 },
			headers: {
				Token: token,
			},
		});

		const sortedUsers = response.data.users.sort(
			(a, b) =>
				new Date(b.registration_timestamp) - new Date(a.registration_timestamp),
		);
		// console.log(response.data);
		return { ...response.data, users: sortedUsers };
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};

// ------------------------------- fetch__ P O S I T I O N
//
export const fetchPositions = async () => {
	try {
		const response = await axios.get(`${API_URL}/positions`);
		return response.data;
	} catch (error) {
		console.log('Error fetching positions:', error);
		throw error;
	}
};

// ---------------------------------- R E G I S T E R__user
//
export const registerUser = async userData => {
	try {
		const token = await fetchToken();
		const response = await axios.post(`${API_URL}/users`, userData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Token: token,
			},
		});
		return response.data;
	} catch (error) {
		console.log('Error register user:', error);
		throw error;
	}
};
