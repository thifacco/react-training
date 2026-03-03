import axios from "axios";
import { Movie } from "../types";

const BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return response.data;
};

export const getMovieByPermalink = async (
  permalink: string,
): Promise<Movie | null> => {
  const response = await axios.get<Movie[]>(
    `${BASE_URL}/movies?permalink=${encodeURIComponent(permalink)}`,
  );

  return response.data[0] ?? null;
};
