import axios from 'axios';
import { FETCH_USER } from './types';

const fetUser = () => {
	axios.get('/api/current_user');
}