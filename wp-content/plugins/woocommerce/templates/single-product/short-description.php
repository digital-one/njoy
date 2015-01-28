<?php
/**
 * Single product short description
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post;

if ( ! $post->post_excerpt ) return;
?>
 <p class="product-about__description">
	<?php echo strip_tags(apply_filters( 'woocommerce_short_description', $post->post_excerpt )) ?>
</p>
