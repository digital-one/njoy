<?php
/**
 * The template for displaying product content within loops.
 *
 * Override this template by copying it to yourtheme/woocommerce/content-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product, $woocommerce_loop;

// Store loop count we're currently on
if ( empty( $woocommerce_loop['loop'] ) )
	$woocommerce_loop['loop'] = 0;

// Store column count for displaying the grid
if ( empty( $woocommerce_loop['columns'] ) )
	$woocommerce_loop['columns'] = apply_filters( 'loop_shop_columns', 4 );

// Ensure visibility
if ( ! $product || ! $product->is_visible() )
	return;

// Increase loop count
$woocommerce_loop['loop']++;

// Extra post classes
$classes = array();
if ( 0 == ( $woocommerce_loop['loop'] - 1 ) % $woocommerce_loop['columns'] || 1 == $woocommerce_loop['columns'] )
	$classes[] = 'first';
if ( 0 == $woocommerce_loop['loop'] % $woocommerce_loop['columns'] )
	$classes[] = 'last';
?>
<?php /*
<li <?php post_class( $classes ); ?>>

	<?php do_action( 'woocommerce_before_shop_loop_item' ); ?>

	<a href="<?php the_permalink(); ?>">

		<?php
			
			// * woocommerce_before_shop_loop_item_title hook
			// *
			// * @hooked woocommerce_show_product_loop_sale_flash - 10
			// * @hooked woocommerce_template_loop_product_thumbnail - 10
			 
			do_action( 'woocommerce_before_shop_loop_item_title' );
		?>

		<h3><?php the_title(); ?></h3>

		<?php
			
			// * woocommerce_after_shop_loop_item_title hook
			// *
			// * @hooked woocommerce_template_loop_rating - 5
			// * @hooked woocommerce_template_loop_price - 10
			
			do_action( 'woocommerce_after_shop_loop_item_title' );
		?>

	</a>

	<?php do_action( 'woocommerce_after_shop_loop_item' ); ?>

</li>

*/ ?>


 <li class="product-lineup__item product-lineup__item--sacre-coeur">
      <a class="product-lineup__link" href="<?php the_permalink(); ?>">
      	<?php
      	$attachment_ids = $product->get_gallery_attachment_ids();
		if ( $attachment_ids ):
		$attachment_id = $attachment_ids[0]; 
		$image_link = wp_get_attachment_url($attachment_id);
		$image  = wp_get_attachment_image( $attachment_id, apply_filters(apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ));
		?>
        <figure class="product-lineup__figure">
        <?php /*  <img alt="<?php the_title(); ?>" class="product-lineup__figure__image" src="" /> */ ?>
          <?php echo $image ?>
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      <?php the_title(); ?>
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      <?php echo get_post_meta(get_the_ID(), '_artist_name', true ); ?>
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      <?php echo get_post_meta(get_the_ID(), '_artist_of', true ); ?><!--
    --></span>
  </h4>
</span>
</div>
</a>   
</li>