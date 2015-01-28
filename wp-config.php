<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'njoy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+ajr+q,dU/vdAy=~Dt|}k0b6I4jKbd3}d>AfszN+}G}*6LAA2$flyW:34VPv.hD[');
define('SECURE_AUTH_KEY',  'yCP#jd.kYD_Y{3%S|B]PIs!lKsu,NZ+Hm]cTbU<6fSj{,LT!BNouu4ko7Q6jT>-6');
define('LOGGED_IN_KEY',    'm$0$Dl$]9FnT-<-TPS-piuZl0n[@_kLSQ]4o+Y6Qyu H8QK6Yv&*0cTVx>o6XUc$');
define('NONCE_KEY',        'Et^lMa+bu|Vo+5hs+iV@|5UzS6(~Xu.T0EY4E,z96=n`UV&@4ORvD/V#EH1,A;<R');
define('AUTH_SALT',        'I7XC_iB1_BUoQY$WxYNC1m2Z5zLN9`<j-Uq*=gMIkI/t^7^V<,]Rre]8:3/YRY6S');
define('SECURE_AUTH_SALT', '[O# hn*FW}R##CSsJJ1*%rV1O[wb`i<xMy|d0Zym#4]XJ_Om&XR%t~J+p3`Vxf6Q');
define('LOGGED_IN_SALT',   '@b2~Zc)EB}r-k+OvmsJ:4`i@UE;,|T|jTP2m%Q+&yh/&v,z.&/-|,=/wd&+>|L0Z');
define('NONCE_SALT',       '3Dm8m%70rV0+E-TuNup1X0@|$uSD355RZ7!p~W_[nOhj7pZ#:4ROiy4&uk.o]+_z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
