<?php
/**
 * Grouped product add to cart
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.1.7
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product, $post;

$parent_product_post = $post;

do_action( 'woocommerce_before_add_to_cart_form' ); ?>

<form class="cart" method="post" enctype='multipart/form-data'>

 <ul class="product-variants__list">
 	<?php
 	foreach ( $grouped_products as $product_id ) :
		$product = wc_get_product( $product_id );
		$post    = $product->post;
		setup_postdata( $post );
		?>
	 <!--  item -->
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="611" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
             <?php // 0mg/ml Nicotine ?>
              <?php echo get_the_title() ?>
            </div>

            <div class="product-variants__bottlesize">
            	<?php
            	 if($sizes = get_the_terms( $product_id, 'pa_size')):
              echo $sizes[0]->name;
          endif;
          	?>
             <?php /* 30 mL */ ?>
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="quantity[<?php echo $product_id ?>]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
         <!--  /item -->
        <?php
        endforeach; 
        // Reset to parent grouped product
		$post = $parent_product_post;
		$product = wc_get_product( $parent_product_post->ID );
		setup_postdata( $parent_product_post );
		?>
</ul>
<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->id ); ?>" />
<?php if ( $quantites_required ) : ?>
	<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>
<button class="product-variants__add-to-cart" name="button" type="submit">Add to cart</button>
<?php /* <button type="submit" class="single_add_to_cart_button button alt"><?php echo $product->single_add_to_cart_text(); ?></button> */ ?>
<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
<?php endif ?>

<?php /*
	<table cellspacing="0" class="group_table">
		<tbody>
			<?php
				foreach ( $grouped_products as $product_id ) :
					$product = wc_get_product( $product_id );
					$post    = $product->post;
					setup_postdata( $post );
					?>
					<tr>
						<td>
							<?php if ( $product->is_sold_individually() || ! $product->is_purchasable() ) : ?>
								<?php woocommerce_template_loop_add_to_cart(); ?>
							<?php else : ?>
								<?php
									$quantites_required = true;
									woocommerce_quantity_input( array( 'input_name' => 'quantity[' . $product_id . ']', 'input_value' => '0' ) );
								?>
							<?php endif; ?>
						</td>

						<td class="label">
							<label for="product-<?php echo $product_id; ?>">
								<?php echo $product->is_visible() ? '<a href="' . get_permalink() . '">' . get_the_title() . '</a>' : get_the_title(); ?>
							</label>
						</td>

						<?php do_action ( 'woocommerce_grouped_product_list_before_price', $product ); ?>

						<td class="price">
							<?php
								echo $product->get_price_html();

								if ( $availability = $product->get_availability() ) {
									$availability_html = empty( $availability['availability'] ) ? '' : '<p class="stock ' . esc_attr( $availability['class'] ) . '">' . esc_html( $availability['availability'] ) . '</p>';
									echo apply_filters( 'woocommerce_stock_html', $availability_html, $availability['availability'], $product );
								}
							?>
						</td>
					</tr>
					<?php
				endforeach;
				// Reset to parent grouped product
				$post    = $parent_product_post;
				$product = wc_get_product( $parent_product_post->ID );
				setup_postdata( $parent_product_post );
			?>
		</tbody>
	</table>

	<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->id ); ?>" />

	<?php if ( $quantites_required ) : ?>

		<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

		<button type="submit" class="single_add_to_cart_button button alt"><?php echo $product->single_add_to_cart_text(); ?></button>

		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

	<?php endif; ?>
	*/ ?>
</form>

<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>