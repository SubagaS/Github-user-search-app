import { createContext, type ReactNode } from 'react';

export type GitHubUser = {
  name: string;
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
};
export type GitHubUserContextType = {
  githubUser: GitHubUser | null;
  loading: boolean;
  errorSearchBar: string | null;
  errorProfileCard: ReactNode | null;
  fetchUser: (username: string) => Promise<void>;
};

export const GitHubUserContext = createContext<
  GitHubUserContextType | undefined
>(undefined);
