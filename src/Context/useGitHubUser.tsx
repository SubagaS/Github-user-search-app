import { useContext } from 'react';
import { GitHubUserContext } from './GitHubUserContext';
export const useGitHubUser = () => {
  const userContext = useContext(GitHubUserContext);
  if (!userContext) {
    throw new Error('useGithub must be used inside GithubProvider');
  }
  return userContext;
};
