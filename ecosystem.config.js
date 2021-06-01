module.exports = {
  apps: [
    {
      name: 'odb',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '27017',
        DATABASE_NAME: 'odb',
        DATABASE_USERNAME: '',
        DATABASE_PASSWORD: '',
      },
    },
  ],
};
