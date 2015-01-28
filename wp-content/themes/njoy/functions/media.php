<?php

add_filter('upload_mimes','add_custom_mime_types');
	function add_custom_mime_types($mimes){
		return array_merge($mimes,array (
			'webm' => 'video/webm',
			'mp4' => 'video/mp4'
			));
}

?>