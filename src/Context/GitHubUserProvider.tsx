import { GitHubUserContext, type GitHubUser } from './GitHubUserContext';
import { useState, type ReactNode } from 'react';
import axios from 'axios';

export const GitHubUserProvider = ({ children }: { children: ReactNode }) => {
  const [githubUser, setGithubUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorSearchBar, setErrorSearchBar] = useState<string | null>(null);
  const [errorProfileCard, setErrorProfileCard] = useState<null | ReactNode>(null);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setErrorSearchBar(null);
    setErrorProfileCard(null);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setGithubUser(response.data);
    } catch {
      <>
        {setErrorSearchBar('No results')} &&
        {setErrorProfileCard(
          <p>
            No results found!
            <span>
              We couldn't find any GitHub users matching your search. Please
              double-check the username and try again.
            </span>
          </p>
        )}
      </>;

      setGithubUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubUserContext.Provider
      value={{
        githubUser,
        loading,
        errorSearchBar,
        errorProfileCard,
        fetchUser,
      }}
    >
      {children}
    </GitHubUserContext.Provider>
  );
};
