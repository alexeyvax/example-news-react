const gulp = require( 'gulp' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	rollup = require( 'gulp-rollup' ),
	babel = require( 'rollup-plugin-babel' );

gulp.task( 'rollup', () =>
{
	gulp.src([
		'./scripts/index.js',
	])
		.pipe( sourcemaps.init() )
		.pipe( rollup({
			plugins: [
				babel({
					exclude: 'node_modules/**',
					presets: ['react', 'es2015-rollup'],
				}),
			],
			format: 'iife'
		}))
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest( 'dist/' ) );
});

gulp.task( 'watch', () =>
	{
		gulp.watch( 'scripts/**/*.js', ['rollup'] )
	}
);

gulp.task( 'default', ['watch', 'rollup'] );
