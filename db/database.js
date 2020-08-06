import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus';
const pool = new Pool({ connectionString });

export default {
  removeMovieByTitle: async (title) => {
    try {
      await pool.query(`DELETE FROM public.movies where title = '${title}';`);
    } catch (err) {
      throw new Error(err.stack);
    }
  },
};
