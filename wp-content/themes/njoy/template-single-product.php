<?php /*Template Name: Single Product */ ?>

<?php get_header() ?>

    
<article class="product product--sacre-coeur" data-hook="product-show">
  <header class="product__header" style="background-image: url(/assets/artists/original/sacre-coeur-effe4f632310018a6139fa9623d6786c.jpg)">
    <div class="product__bg">
      <video class="product__bg__video" preload autoplay>
        <?php

        <source src="<?php echo get_post_meta(get_the_ID(), '_header_video_mp4_url', true ); ?>" type="video/mp4">
        <source src="<?php echo get_post_meta(get_the_ID(), '_header_video_webm_url', true ); ?>" type="video/webm">
      </video>
    </div>
  </header>

  <div class="product__container">
    <div class="product__sections">
      <main class="product__main">
        <section class="product-about">
          <header class="product-about__header">
           <?php /* <img alt="Sacre coeur" class="product-about__bottle" src="<?php echo get_template_directory_uri(); ?>/assets/artists/bottles/sacre-coeur-8695624d7feec25593e111bd5a9eea70.png" />*/ ?>
<?php do_action('woocommerce_show_product_images') ?>
           <?php/* <h1 class="product-about__heading">
              Sacré Coeur
            </h1> */ ?>
            <?php do_action('woocommerce_template_single_title') ?>

              <dl class="product-about__tastes">
                <dt class="product-about__tastes__title">
                   
                </dt>
               <?php
                if($tastes = get_the_terms( $product->id, 'pa_tastes')):
              foreach ($tastes as $taste):
                  ?>
                  <dd class="product-about__tastes__description">
                    <?php echo $taste->name ?>
                  </dd>
                <?php endforeach ?>
              <?php endif ?>
                  
              </dl>
          </header>

          <main class="product-about__main">
            <?php do_action('woocommerce_template_single_excerpt') ?>
           <!-- <p class="product-about__description">Robust yet delicate, complex yet simple, Sacré Coeur begins with a buttery, savory almond torte layered with ambrosial notes of wild field berries and subdued rhubarb. Subtleties then emerge – a hint of aromatic vanilla and a touch of earthy bourbon - the purest possible expression of pleasure.</p>-->
          </main>
        </section>

        <section class="product-artist">
          <header class="product-artist__header">
            <h2 class="product-artist__name">
              <?php //Anne-Claire ?><?php echo get_post_meta(get_the_ID(), '_artist_name', true ); ?>
              <span>of</span>
              <em><?php //Vaponaute ?><?php echo get_post_meta(get_the_ID(), '_artist_of', true ); ?></em>
            </h2>
          </header>

          <main class="product-artist__main">
         
       <?php /*     <p class="product-artist__description">From wine to cognac to haute cuisine, Anne-Claire is a master epicure, crafting sublime flavor journeys that reflect her love of travel and her beloved hometown of Paris.</p>

<p class="product-artist__description">The retail price for a 30mL bottle of Sacré Coeur is $23.</p>

<p class="product-artist__description">Sacre Coeur is comprised of 50% VG / 50% PG.</p>

<p class="product-artist__description">Artist Collection liquids are available in 0mg, 3mg, 6mg, 12mg, and 18mg nicotine levels.</p> */
?>
<div class="product-artist__description">
  <?php the_content(); ?>
 </div>
          </main>
        </section>
      </main>
<!-- logged in content -->
<?php if(!is_user_logged_in()): ?>
      <section class="product__buy">
       <section class="product-variants product-variants--sacre-coeur">
  <header class="product-variants__header">
    <?php
    /*<h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>*/
    ?>
    <?php do_action('woocommerce_template_single_price'); ?>
  </header>

<?php do_action('woocommerce_template_single_add_to_cart') ?>
<?php /*
  <form accept-charset="UTF-8" action="/cart/add" data-hook="add-to-cart" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div>
    <ul class="product-variants__list">
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="611" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
              0mg/ml Nicotine
            </div>

            <div class="product-variants__bottlesize">
              30 mL
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="variants[][quantity]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="639" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
              3mg/ml Nicotine
            </div>

            <div class="product-variants__bottlesize">
              30 mL
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="variants[][quantity]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="612" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
              6mg/ml Nicotine
            </div>

            <div class="product-variants__bottlesize">
              30 mL
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="variants[][quantity]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="613" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
              12mg/ml Nicotine
            </div>

            <div class="product-variants__bottlesize">
              30 mL
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="variants[][quantity]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="614" />

          <div class="product-variants__description">
            <div class="product-variants__nicotine">
              18mg/ml Nicotine
            </div>

            <div class="product-variants__bottlesize">
              30 mL
            </div>
          </div>

          <div class="product-variants__quantity js-quantity">
            <button type="button" class="product-variants__quantity__btn js-quantity-decrease">
              -
            </button>

            <input class="product-variants__quantity__field js-quantity-field" data-hook="variant-item-qty" id="variants__quantity" name="variants[][quantity]" pattern="\d*" type="text" value="0" />

            <button type="button" class="product-variants__quantity__btn js-quantity-increase">
              +
            </button>
          </div>
        </li>
    </ul>

    <button class="product-variants__add-to-cart" name="button" type="submit">Add to cart</button>
</form>
*/ 
?>

</section>
</section>
    <?php endif ?>
<!-- /logged in content -->
    </div>

    <div class="product__video">
      <iframe width="560" height="315" src="//youtube.com/embed/<?php echo get_post_meta(get_the_ID(), '_youtube_video_id', true ); ?>" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>

  <nav class="product-lineup" id="products">
    <div class="product-lineup__container">
      <h2 class="product-lineup__heading">
        <span class="translation_missing" title="translation missing: en.spree.retail.products.the_complete_collection">The Complete Collection</span>
      </h2>

      <ul class="product-lineup__list">
        <?php
    $args = array(
      'post_type' => 'product',
      'product_cat' => 'single-products',
      'posts_per_page' => -1
      );
    $loop = new WP_Query($args);
    if ($loop->have_posts()):
      while ($loop->have_posts()):
        $loop->the_post();
        global $product;

        /*if (has_post_thumbnail( $loop->post->ID )) echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog'); else echo '<img src="'.woocommerce_placeholder_img_src().'" alt="Placeholder" width="300px" height="300px" />'; ?>
         <h3><?php the_title(); ?></h3>
          <span class="price"><?php echo $product->get_price_html(); ?></span> 
             */
            woocommerce_get_template_part( 'content', 'product' );  //loop  content-product.php
     
      endwhile;
    else:
      echo __( 'No products found' );
    endif;
    wp_reset_postdata();
  ?>
 <?php /*
    <li class="product-lineup__item product-lineup__item--sacre-coeur">
      <a class="product-lineup__link" href="/artistcollection/sacre-coeur">
        <figure class="product-lineup__figure">
          <img alt="Sacre coeur" class="product-lineup__figure__image" src="<?php echo get_template_directory_uri(); ?>/assets/artists/lineup/sacre-coeur-ef7385a7da712b7c57de6b7d9e862b5f.png" />
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      Sacré Coeur
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      Anne-Claire
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      Vaponaute<!--
    --></span>
  </h4>
</span>

        </div>
</a>    </li>

    <li class="product-lineup__item product-lineup__item--dragonscape">
      <a class="product-lineup__link" href="/artistcollection/dragonscape">
        <figure class="product-lineup__figure">
          <img alt="Dragonscape" class="product-lineup__figure__image" src="<?php echo get_template_directory_uri(); ?>/assets/artists/lineup/dragonscape-766f6a8bee1d49470a3d3f54a26a5079.png" />
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      Dragon Scape
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      Randy
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      P.O.E.T<!--
    --></span>
  </h4>
</span>

        </div>
</a>    </li>
    <li class="product-lineup__item product-lineup__item--hedons-bite">
      <a class="product-lineup__link" href="/artistcollection/hedons-bite">
        <figure class="product-lineup__figure">
          <img alt="Hedons bite" class="product-lineup__figure__image" src="<?php echo get_template_directory_uri(); ?>/assets/artists/lineup/hedons-bite-c8d5bc144d64537c95090bc5f016c61b.png" />
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      Hedon’s Bite
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      George
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      Mr. Good Vape<!--
    --></span>
  </h4>
</span>

        </div>
</a>    </li>
    <li class="product-lineup__item product-lineup__item--paramour">
      <a class="product-lineup__link" href="/artistcollection/paramour">
        <figure class="product-lineup__figure">
          <img alt="Paramour" class="product-lineup__figure__image" src="<?php echo get_template_directory_uri(); ?>/assets/artists/lineup/paramour-a6acf797e92124106ca0f9c3d37399bd.png" />
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      Para Mour
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      Daniel
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      Flavorz<!--
    --></span>
  </h4>
</span>

        </div>
</a>    </li>
    <li class="product-lineup__item product-lineup__item--samba-sun">
      <a class="product-lineup__link" href="/artistcollection/samba-sun">
        <figure class="product-lineup__figure">
          <img alt="Samba sun" class="product-lineup__figure__image" src="<?php echo get_template_directory_uri(); ?>/assets/artists/lineup/samba-sun-a950f009302cb6b4703f7c373ad2697f.png" />
        </figure>

        <div class="product-lineup__naming">
          <span class="product-naming product-naming--block">
    <h3 class="product-naming__name">
      Samba Sun
    </h3>

  <h4 class="product-naming__artist">
    <span class="product-naming__artist__name">
      Jeremy
    </span>
    <span class="product-naming__artist__of">
      of<!--
    --></span>
    <span class="product-naming__artist__company">
      Good Life Vapor<!--
    --></span>
  </h4>
</span>

        </div>
</a>    </li>
*/ ?>
</ul>
</div>
  </nav>

  
<section class="vaper-signup alternate">
  <div class="vaper-signup__container">
    <div class="vaper-signup__wrap">
      <header class="vaper-signup__header">
        <h2 class="vaper-signup__heading">
          GET SPECIAL OFFERS. FIND A SHOP NEAR YOU.
        </h2>

        <p class="vaper-signup__body">
          Are you a vaper? Want to know where you can find Artist Collection products? SEE BELOW TO FIND WHERE TO BUY IN STORES AND ONLINE. Don't see your favorite vape shop and think they should carry them? Fill out the form to the right to let us know:
        </p>
      </header>

      <div class="vaper-signup__form js-vaper-signup">
        <form method="post"
          action="https://qa.njoy.com/promotional_signups/artist_collection">
          <div class="vaper-signup__form__field">
            <div class="vaper-signup__form__label">
              <label>Email</label>
            </div>
            <div class="vaper-signup__form__input">
              <input required type="email" name="email">
            </div>
          </div>
          <div class="vaper-signup__form__field--location">
            <div class="vaper-signup__form__field--vape-shop">
              <div class="vaper-signup__form__label">
                <label>Your Local Vape Shop</label>
              </div>
              <div class="vaper-signup__form__input">
                <input type="text" name="vape_shop">
              </div>
            </div>
            <div class="vaper-signup__form__field--zip">
              <div class="vaper-signup__form__label">
                <label>Zipcode</label>
              </div>
              <div class="vaper-signup__form__input">
                <input type="text" name="zip">
              </div>
            </div>
          </div>
          <div class="vaper-signup__form__field">
            <div class="vaper-signup__form__input">
              <input type="submit"
                value="Sign up"
                class="vaper-signup__form__sign-up">
            </div>
          </div>
        </form>
        <div class="vaper-signup__thanks is-hidden" data-bb-el="thanks">
          <p>Thanks for signing up. We'll be in touch soon to let you know when the Artist Collection is available in your local Vape Store.</p> 
        </div>
      </div>
    </div>
  </div>
</section>

<section class="vape-shop-signup alternate">
  <div class="vape-shop-signup__container">
    <div class="vape-shop-signup__wrap">
      <header class="vape-shop-signup__header">
        <h2 class="vape-shop-signup__heading">
          Vape Shop Owners
        </h2>

        <p class="vape-shop-signup__body">
          If you’re a vape shop owner and would like to learn more about the Artist Collection, order product or request samples, please register or login:
        </p>
      </header>

      <div class="vape-shop-signup__buttons">
        <a class="vape-shop-signup__button--primary" href="/account/sign_up">Create an account</a>

        <a class="vape-shop-signup__button" href="/account/sign_in">Login</a>
      </div>
    </div>
  </div>
</section>

<section class="landing-user">

</section>

</article>

<?php get_footer() ?>