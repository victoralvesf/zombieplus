import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus';
const pool = new Pool({ connectionString });

async function makeQuery(query) {
  try {
    await pool.query(query);
  } catch (err) {
    throw new Error(err.stack);
  }
}

export default {
  removeMovieByTitle: async (title) => {
    const query = `DELETE FROM public.movies where title = '${title}';`;
    await makeQuery(query);
  },
  insertMovie: async (movie) => {
    const query = `INSERT INTO public.movies(title, status, year, release_date, "cast", overview, cover, created_at, updated_at)
      VALUES ('${movie.title}', '${movie.status}', '${movie.year}', '${movie.releaseDate}', '{${movie.cast}}', '${movie.synopsis}', '${movie.cover}', current_timestamp, current_timestamp);`;
    await makeQuery(query);
  },
};
