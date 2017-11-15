export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      allNotes: '/api/notes',
      oneNote: '/api/notes/:id'
    }
  }
};
