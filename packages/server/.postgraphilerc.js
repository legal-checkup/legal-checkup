module.exports = {
  options: {
    connection: process.env.LC_DATABASE_URL,
    schema: ['app_public', 'app_private', 'app_hidden', 'app_jobs'],
    jwtSecret: 'vewyvewysecrit',
    defaultRole: 'lc_anonymous',
    jwtTokenIdentifier: 'app_public.jwt_token',
    watch: true
  }
}
