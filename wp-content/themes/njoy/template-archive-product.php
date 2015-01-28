<?php get_header() ?>
<section class="product-index">
  <nav class="product-lineup product-lineup--alternate">
    <div class="product-lineup__container">
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
        <? /*
    <li class="product-lineup__item product-lineup__item--sacre-coeur">
      <a class="product-lineup__link" href="/artistcollection/sacre-coeur">
        <figure class="product-lineup__figure">
          <img alt="Sacre coeur" class="product-lineup__figure__image" src="/assets/artists/lineup/sacre-coeur-ef7385a7da712b7c57de6b7d9e862b5f.png" />
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
          <img alt="Dragonscape" class="product-lineup__figure__image" src="/assets/artists/lineup/dragonscape-766f6a8bee1d49470a3d3f54a26a5079.png" />
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
          <img alt="Hedons bite" class="product-lineup__figure__image" src="/assets/artists/lineup/hedons-bite-c8d5bc144d64537c95090bc5f016c61b.png" />
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
          <img alt="Paramour" class="product-lineup__figure__image" src="/assets/artists/lineup/paramour-a6acf797e92124106ca0f9c3d37399bd.png" />
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
          <img alt="Samba sun" class="product-lineup__figure__image" src="/assets/artists/lineup/samba-sun-a950f009302cb6b4703f7c373ad2697f.png" />
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

  <section class="product-intro">
    <div class="product-intro__container">
<?php $page = get_post(5); ?>
<?
/*
      <h1 class="product-intro__heading">
        Curated by NJOY, created by the world’s top flavor artists. Welcome to the Artist Collection.
      </h1>

      <h2 class="product-intro__sub-heading">
        A sophisticated suite of taste sensations, pushing the limits of experiential flavor indulgence. Only available in Vape Shops wherever tobacco products are not sold.

<h2><p>Now Available in 3mg!</p></h2>
      </h2>
*/?>
<?php echo $page->post_content ?>
    </div>
  </section>

  <main class="product-selector">
    <div class="product-selector__container">

      <!-- loop item -->
        <article class="product-selector__product product-selector__product--bundle product-selector__product--bundle-100">
  <div class="product-selector__sections">
    <div class="product-selector__bundle">
      <img alt="Load in" class="product-selector__bundle__img" src="/assets/artists/lineup/load-in-1275f2e364ef08bd94c65ea1fc37bf0c.png" />
    </div>
  </div><div class="product-selector__sections product-selector__sections--secondary">
    <div class="product-selector__description-block">
      <div class="product-selector__info">
        <h3 class="product-selector__product-name">
          100 Bottle Bundle
        </h3>
        <h4 class="product-selector__product-size">
          Order this bundle to get 15 bottles free!
        </h4>
        <h4 class="product-selector__product-price">
          $977.50
        </h4>
      </div>

      <p class="product-selector__description">
        You receive 4 bottles of ALL five flavors in ALL five nicotine levels to start carrying the sophisticated suite of masterful taste sensations that is the NJOY Artist Collection, with 15% off! (Wholesale price per bottle is $11.50) $2,300 in retail value for $977.50! You will not be charged for your order until it is ready to be fulfilled.
      </p>
    </div>

    <div class="product-selector__buy">
      <form accept-charset="UTF-8" action="/cart/add" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div><input id="quantity" name="quantity" type="hidden" value="1" /><input id="variant_id" name="variant_id" type="hidden" value="638" /><button class="product-variants__add-to-cart" data-hook="add-bundle-to-cart" name="button" type="submit">Add to cart</button></form>
    </div>
  </div>
</article>
<!-- /loop item -->
<!-- loop item -->
        <article class="product-selector__product product-selector__product--bundle product-selector__product--bundle-60">
  <div class="product-selector__sections">
    <div class="product-selector__info">
      <h3 class="product-selector__product-name">
        60 Bottle Bundle
      </h3>
      <h4 class="product-selector__product-size">
        A select mix of all five flavors in all five nicotine levels.
      </h4>
      <h4 class="product-selector__product-price">
        $690.00
      </h4>
    </div>

    <div class="product-selector__description-block">
      <p class="product-selector__description">Get started carrying the sophisticated suite of masterful taste sensations that is the NJOY Artist Collection! You&#39;ll receive every flavor in a mix of nic levels: two (2) 0mg - three (3) each of 3mg, 6mg, &amp; 12mg - and one (1) 18mg. You will not be charged for your order until it is ready to be fulfilled. (If this is your first purchase, you may choose between this and the 100 Bottle Bundle.)</p>
    </div>
  </div>

  <div class="product-selector__sections">
    <div class="product-selector__copy-block">
      <p class="product-selector__product-copy">
        Bottles of every flavor and strength
      </p>
    </div>

    <div class="product-selector__buy">
      <form accept-charset="UTF-8" action="/cart/add" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div><input id="quantity" name="quantity" type="hidden" value="1" /><input id="variant_id" name="variant_id" type="hidden" value="636" /><button class="product-variants__add-to-cart" data-hook="add-bundle-to-cart" name="button" type="submit">Add to cart</button></form>
    </div>
  </div>
</article>
<!-- /loop item -->
<!-- loop item -->
        <article class="product-selector__product
                        
                        product-selector__product--sacre-coeur">
          <div class="product-selector__sections">
            <div class="product-selector__image" style="background-image: url(/assets/artists/narrow/sacre-coeur-01f68284f591e610511887ccd315f6f2.jpg)">
              <a class="product-selector__link" href="/artistcollection/sacre-coeur">
                <img alt="Sacre coeur" class="product-selector__bottle" src="/assets/artists/bottles/sacre-coeur-8695624d7feec25593e111bd5a9eea70.png" />
</a>            </div>

            <div class="product-selector__info">
              <h3 class="product-selector__product-name">
                Sacré Coeur
              </h3>

              <h4 class="product-selector__product-artist">
                Anne-Claire
                <span class="product-selector__product-artist__company">
                  of
                  <span>Vaponaute</span>
                </span>
              </h4>

                <ul class="product-selector__product-qualities">
                    <li class="product-selector__product-qualities__quality">
                      Subtle
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Nutty
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Sweet
                    </li>
                </ul>
            </div>

              <div class="product-selector__buy">
                <section class="product-variants product-variants--sacre-coeur">
  <header class="product-variants__header">
    <h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>
  </header>

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
</form></section>

              </div>
          </div>
        </article>
<!-- /loop item -->

<?php /*
        <article class="product-selector__product
                        
                        product-selector__product--dragonscape">
          <div class="product-selector__sections">
            <div class="product-selector__image" style="background-image: url(/assets/artists/narrow/dragonscape-04569192769ab3bfe4df776769e91201.jpg)">
              <a class="product-selector__link" href="/artistcollection/dragonscape">
                <img alt="Dragonscape" class="product-selector__bottle" src="/assets/artists/bottles/dragonscape-19cc242c22c9fee1a0f7e9a7bbb6f15f.png" />
</a>            </div>

            <div class="product-selector__info">
              <h3 class="product-selector__product-name">
                Dragon Scape
              </h3>

              <h4 class="product-selector__product-artist">
                Randy
                <span class="product-selector__product-artist__company">
                  of
                  <span>P.O.E.T</span>
                </span>
              </h4>

                <ul class="product-selector__product-qualities">
                    <li class="product-selector__product-qualities__quality">
                      Earthy
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Rich
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Exotic
                    </li>
                </ul>
            </div>

              <div class="product-selector__buy">
                <section class="product-variants product-variants--dragonscape">
  <header class="product-variants__header">
    <h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>
  </header>

  <form accept-charset="UTF-8" action="/cart/add" data-hook="add-to-cart" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div>
    <ul class="product-variants__list">
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="621" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="640" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="622" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="623" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="624" />

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
</form></section>

              </div>
          </div>
        </article>
        <article class="product-selector__product
                        
                        product-selector__product--hedons-bite">
          <div class="product-selector__sections">
            <div class="product-selector__image" style="background-image: url(/assets/artists/narrow/hedons-bite-5c9f232858e3fec1c4bad7bee5fca757.jpg)">
              <a class="product-selector__link" href="/artistcollection/hedons-bite">
                <img alt="Hedons bite" class="product-selector__bottle" src="/assets/artists/bottles/hedons-bite-bfbd9e4eee712be5fa673fe12cecf5ec.png" />
</a>            </div>

            <div class="product-selector__info">
              <h3 class="product-selector__product-name">
                Hedon’s Bite
              </h3>

              <h4 class="product-selector__product-artist">
                George
                <span class="product-selector__product-artist__company">
                  of
                  <span>Mr. Good Vape</span>
                </span>
              </h4>

                <ul class="product-selector__product-qualities">
                    <li class="product-selector__product-qualities__quality">
                      Sweet
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Sour
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Tart
                    </li>
                </ul>
            </div>

              <div class="product-selector__buy">
                <section class="product-variants product-variants--hedons-bite">
  <header class="product-variants__header">
    <h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>
  </header>

  <form accept-charset="UTF-8" action="/cart/add" data-hook="add-to-cart" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div>
    <ul class="product-variants__list">
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="616" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="641" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="617" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="618" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="619" />

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
</form></section>

              </div>
          </div>
        </article>
        <article class="product-selector__product
                        
                        product-selector__product--paramour">
          <div class="product-selector__sections">
            <div class="product-selector__image" style="background-image: url(/assets/artists/narrow/paramour-6ba806b6db5f87358eae8ce58d5aedbd.jpg)">
              <a class="product-selector__link" href="/artistcollection/paramour">
                <img alt="Paramour" class="product-selector__bottle" src="/assets/artists/bottles/paramour-17826bafa9f97125bb48c8e44fe3f3ce.png" />
</a>            </div>

            <div class="product-selector__info">
              <h3 class="product-selector__product-name">
                Para Mour
              </h3>

              <h4 class="product-selector__product-artist">
                Daniel
                <span class="product-selector__product-artist__company">
                  of
                  <span>Flavorz</span>
                </span>
              </h4>

                <ul class="product-selector__product-qualities">
                    <li class="product-selector__product-qualities__quality">
                      Soft
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Bright
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Creamy
                    </li>
                </ul>
            </div>

              <div class="product-selector__buy">
                <section class="product-variants product-variants--paramour">
  <header class="product-variants__header">
    <h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>
  </header>

  <form accept-charset="UTF-8" action="/cart/add" data-hook="add-to-cart" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div>
    <ul class="product-variants__list">
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="626" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="642" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="627" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="628" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="629" />

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
</form></section>

              </div>
          </div>
        </article>
        <article class="product-selector__product
                        
                        product-selector__product--samba-sun">
          <div class="product-selector__sections">
            <div class="product-selector__image" style="background-image: url(/assets/artists/narrow/samba-sun-4c7d0320c803a8115bd91ee017c08a1a.jpg)">
              <a class="product-selector__link" href="/artistcollection/samba-sun">
                <img alt="Samba sun" class="product-selector__bottle" src="/assets/artists/bottles/samba-sun-a9ad2c3a57d9872b21af47c86df868f9.png" />
</a>            </div>

            <div class="product-selector__info">
              <h3 class="product-selector__product-name">
                Samba Sun
              </h3>

              <h4 class="product-selector__product-artist">
                Jeremy
                <span class="product-selector__product-artist__company">
                  of
                  <span>Good Life Vapor</span>
                </span>
              </h4>

                <ul class="product-selector__product-qualities">
                    <li class="product-selector__product-qualities__quality">
                      Fruity
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Bright
                    </li>
                    <li class="product-selector__product-qualities__quality">
                      Smooth
                    </li>
                </ul>
            </div>

              <div class="product-selector__buy">
                <section class="product-variants product-variants--samba-sun">
  <header class="product-variants__header">
    <h2 class="product-variants__price">
      <span>$14.95</span> per bottle
    </h2>
  </header>

  <form accept-charset="UTF-8" action="/cart/add" data-hook="add-to-cart" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3WNhinKMO/guAkZdweQ6OcPzVy0YhRQ5jyJGHKUzTSA=" /></div>
    <ul class="product-variants__list">
        <li class="product-variants__item" data-hook="variant-item">
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="631" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="643" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="632" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="633" />

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
          <input data-hook="variant-item-id" id="variants__variant_id" name="variants[][variant_id]" type="hidden" value="634" />

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
</form></section>

              </div>
          </div>
        </article>
        */ ?>
    </div>
  </main>
</section>


    <div class="sticky-cart" data-hook="sticky-cart">
  <div class="sticky-cart__container">
    <div class="sticky-cart__sections">
      <div class="sticky-cart__block sticky-cart__details">
        <span class="sticky-cart__total">$1,772.15</span>
        <span class="sticky-cart__items">9 items in the cart</span>
      </div>
      <div class="sticky-cart__block sticky-cart__button">
        <a class="sticky-cart__checkout" href="/checkout">Checkout</a>
      </div>
    </div>
  </div>
</div>
<?php get_footer() ?>