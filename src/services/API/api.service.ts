import axios, { AxiosResponse } from 'axios';
import authConfig from '../../authConfig.json';

let baseURL = authConfig.apiBaseURL;

let token = '';

/**
 * Creates a new axios instance
 *
 * @param {string} newUrl the new api url
 * @param {string} newToken the new auth token
 */
export function updateAPI(newUrl?: string, newToken?: string): void {
  baseURL = newUrl ?? baseURL;
  token = newToken ?? token;
  factiverseApi = axios.create({
    timeout: 150000,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    baseURL: baseURL
  });
}

export let factiverseApi = axios.create({
  timeout: 150000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  baseURL: baseURL
});

/* Factiverse API example: GET user request to get basic user info */

type OnboardingQuestion = {
  question: string;
  answer: string;
};

interface GetUserResponse {
  allow_tracking: boolean;
  seen_tutorial: boolean;
  onboarding_questions: Array<OnboardingQuestion>;
}

/**
 * get user data
 *
 * @return {object} The api response
 */
export function getUserRequest(): Promise<AxiosResponse<GetUserResponse>> {
  return factiverseApi.get('user');
}
