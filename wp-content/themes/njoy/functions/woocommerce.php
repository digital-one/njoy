<?php

//woocommerce_product_options_general_product_data


//woocommerce_process_product_meta


// Display Fields
//add_action( 'woocommerce_product_options_general_product_data', 'woo_add_custom_general_fields' );

// Save Fields
add_action( 'woocommerce_process_product_meta', 'woo_add_custom_general_fields_save' );



function woo_add_custom_general_fields() {

  global $woocommerce, $post;
  
  echo '<div class="options_group">';
  woocommerce_wp_text_input( 
	array( 
		'id'          => '_artist_name', 
		'label'       => __( 'Artist Name', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the artist name here.', 'woocommerce' ) 
	)
);
    woocommerce_wp_text_input( 
  array( 
		'id'          => '_artist_of', 
		'label'       => __( 'Artist Of', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the artist of here.', 'woocommerce' ) 
	)
);
 echo '</div>';
	
}


function woo_add_custom_general_fields_save( $post_id ){
	
	// Text Field
	$woocommerce_text_field = $_POST['_artist_name'];
	if( !empty( $woocommerce_text_field ) )
		update_post_meta( $post_id, '_artist_name', esc_attr( $woocommerce_text_field ) );
	
	$woocommerce_text_field = $_POST['_artist_of'];
	if( !empty( $woocommerce_text_field ) )
		update_post_meta( $post_id, '_artist_of', esc_attr( $woocommerce_text_field ) );


	$woocommerce_text_field = $_POST['_youtube_video_id'];
	if( !empty( $woocommerce_text_field ) )
		update_post_meta( $post_id, '_youtube_video_id', esc_attr( $woocommerce_text_field ) );

	$woocommerce_text_field = $_POST['_header_video_mp4_url'];
	if( !empty( $woocommerce_text_field ) )
		update_post_meta( $post_id, '_header_video_mp4_url', esc_attr( $woocommerce_text_field ) );

		$woocommerce_text_field = $_POST['_header_video_webm_url'];
	if( !empty( $woocommerce_text_field ) )
		update_post_meta( $post_id, '_header_video_webm_url', esc_attr( $woocommerce_text_field ) );
		/*
	// Number Field
	$woocommerce_number_field = $_POST['_number_field'];
	if( !empty( $woocommerce_number_field ) )
		update_post_meta( $post_id, '_number_field', esc_attr( $woocommerce_number_field ) );
		
	// Textarea
	$woocommerce_textarea = $_POST['_textarea'];
	if( !empty( $woocommerce_textarea ) )
		update_post_meta( $post_id, '_textarea', esc_html( $woocommerce_textarea ) );
		
	// Select
	$woocommerce_select = $_POST['_select'];
	if( !empty( $woocommerce_select ) )
		update_post_meta( $post_id, '_select', esc_attr( $woocommerce_select ) );
		
	// Checkbox
	$woocommerce_checkbox = isset( $_POST['_checkbox'] ) ? 'yes' : 'no';
	update_post_meta( $post_id, '_checkbox', $woocommerce_checkbox );
	
	// Custom Field
	$custom_field_type =  array( esc_attr( $_POST['_field_one'] ), esc_attr( $_POST['_field_two'] ) );
	update_post_meta( $post_id, '_custom_field_type', $custom_field_type );
	
	// Hidden Field
	$woocommerce_hidden_field = $_POST['_hidden_field'];
	if( !empty( $woocommerce_hidden_field ) )
		update_post_meta( $post_id, '_hidden_field', esc_attr( $woocommerce_hidden_field ) );
		
	// Product Field Type
	$product_field_type =  $_POST['product_field_type'];
	update_post_meta( $post_id, '_product_field_type_ids', $product_field_type );
*/
}




/** Custom Tabs for Artist. **/

function artist_options_tab() {
?>
	<li class="artist"><a href="#artist_data"><?php _e('Artist', 'woothemes'); ?></a></li>
<?php
}
add_action('woocommerce_product_write_panel_tabs', 'artist_options_tab'); 

/** Custom Tabs for YouTube. **/

function media_options_tab() {
?>
	<li class="media"><a href="#media_data"><?php _e('Media', 'woothemes'); ?></a></li>
<?php
}
add_action('woocommerce_product_write_panel_tabs', 'media_options_tab'); 

/** Custom Options for Artist. **/

function artist_options() {
	global $post;
?>
	<div id="artist_data" class="panel woocommerce_options_panel">
		 <div class="options_group">
		<?php
			woocommerce_wp_text_input( 
	array( 
		'id'          => '_artist_name', 
		'label'       => __( 'Artist Name', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the artist name here.', 'woocommerce' ) 
	)
);
	 woocommerce_wp_text_input( 
  array( 
		'id'          => '_artist_of', 
		'label'       => __( 'Artist Of', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the artist of here.', 'woocommerce' ) 
	)
);
?>
	</div>
	</div>
<?php
}
add_action('woocommerce_product_write_panels', 'artist_options');


/** Custom Options for Media. **/

function media_options() {
	global $post;
?>
	<div id="media_data" class="panel woocommerce_options_panel">
		 <div class="options_group">
		<?php
			woocommerce_wp_text_input( 
	array( 
		'id'          => '_youtube_video_id', 
		'label'       => __( 'YouTube Video ID', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter YouTube video ID here.', 'woocommerce' ) 
	)
);
	 woocommerce_wp_text_input( 
  array( 
		'id'          => '_header_video_mp4_url', 
		'label'       => __( 'Header Video URL (mp4)', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the header mp4 video permalink from media.', 'woocommerce' ) 
	)
);
 woocommerce_wp_text_input( 
  array( 
		'id'          => '_header_video_webm_url', 
		'label'       => __( 'Header Video URL (webm)', 'woocommerce' ), 
		'placeholder' => '',
		'desc_tip'    => 'true',
		'description' => __( 'Enter the header webm video permalink from media.', 'woocommerce' ) 
	)
);
?>
	</div>
	</div>
<?php
}
add_action('woocommerce_product_write_panels', 'media_options');

// Save Fields

/*
	add_action( 'woocommerce_process_product_meta', 'woo_add_custom_general_fields_save' );

	// Function to save all custom field information from products
function woo_add_custom_general_fields_save( $post_id ){
	
	// Opening Hours Custom Fields
		$day_field_type =  array( esc_attr( $_POST['_day_field_one'] ), esc_attr( $_POST['_day_field_two'] ), esc_attr( $_POST['_day_field_three'] ),esc_attr( $_POST['_day_field_four'] ), esc_attr( $_POST['_day_field_five'] ), esc_attr( $_POST['_day_field_six'] ), esc_attr( $_POST['_day_field_seven'] ) );
	update_post_meta( $post_id, '_day_field_type', $day_field_type );
		
}
*/

?>