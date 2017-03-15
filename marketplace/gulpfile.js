require('babel-register');
const gulp = require('gulp');
const config = require('./src/server/config').default;
const join = require('path').join;
const $ = require('gulp-load-plugins')();
const watch = require('gulp-watch');
const notify = require('gulp-notify');

const buildFallbackCss = isProduction => {
  const baseFolder = isProduction ? 'dist' : 'src';
  gulp.src([join(__dirname, 'src/shared/sass/tenants/default', 'main.scss')])
    .pipe($.sass({ errLogToConsole: true }))
    .pipe($.cssnano())
    .pipe($.concat('style.css'))
    .pipe(gulp.dest(join(__dirname, baseFolder, 'client', 'public', 'stylesheets')));
  console.log('sass compiled @ ' + new Date().getTime() + (' (default)'));
};

const buildTenantCss = isProduction => tenant => {
  const baseFolder = isProduction ? 'dist' : 'src';
  const output = 'sass compiled @ ' + new Date().getTime() + (' (' + tenant + ')');
  gulp.src([join(__dirname, 'src/shared/sass/tenants', tenant, 'main.scss')])
  .pipe($.sass({ errLogToConsole: true }))
  .pipe($.cssnano())
  .pipe($.concat('style.css'))
  .pipe(gulp.dest(join(__dirname, baseFolder, 'client', 'public', 'stylesheets', tenant)))
  .pipe(notify(output));
  console.log(output);
};

const buildAllTenantsCss = isProduction => {
  config.tenants.filter(t => t !== 'default').forEach(buildTenantCss(isProduction));
};

gulp.task('build', () => { buildFallbackCss(); buildAllTenantsCss(); } );

gulp.task('build-production', () => {
  const isProduction = true;
  buildFallbackCss(isProduction);
  buildAllTenantsCss(isProduction);
});

gulp.task('watch', cb => watch(join(__dirname, 'src/shared/sass/**/*.scss'), { interval: 1000, mode: 'poll' }, () => { buildFallbackCss(); buildAllTenantsCss() } ));

gulp.task('default', () => {});
