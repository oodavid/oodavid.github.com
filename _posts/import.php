<?php
	//
	// Step 1 - Read the number of posts
	//
		$url	= "http://api.tumblr.com/v2/blog/oodavid.tumblr.com/info?api_key=DCoOfiLAtT85H0WsxE8kobYoXf0hwyGKvHRXewUTlvzPFGfkZH";
		$ch		= curl_init($url);
		curl_setopt_array( $ch, array( CURLOPT_RETURNTRANSFER => true ) );
		$result	= json_decode(curl_exec($ch), true);
		$posts	= $result['response']['blog']['posts'];

	//
	// Step 
	//

	// Read in all the posts, 20 at a time
	for ($n=0; $n<$posts; $n+=20){
		// Read the posts
		$url	= "http://api.tumblr.com/v2/blog/oodavid.tumblr.com/posts?api_key=DCoOfiLAtT85H0WsxE8kobYoXf0hwyGKvHRXewUTlvzPFGfkZH&limit=20&offset={$n}";
		$ch		= curl_init($url);
		curl_setopt_array( $ch, array( CURLOPT_RETURNTRANSFER => true ) );
		$result	= json_decode(curl_exec($ch), true);
		// Loop the posts
		foreach($result['response']['posts'] AS $post){
			if(isset($post['title']) && isset($post['body'])){
				// File-Name
				$date = date('Y-m-d', $post['timestamp']);
				$filename = "{$date}-{$post['slug']}.html";
				// Title
				$title = '"' . addslashes($post['title']) . '"';
				// Tags
				$tags = $post['tags'] ? "\ntags: \n- " . implode("\n- ", $post['tags']) : '';
				// File-Contents
				$contents = <<<HEREHTML
---
layout: blog
title: {$title}{$tags}
---
{$post['body']}
HEREHTML;
				// Write to file
				$fh = fopen("/home/david/Documents/oodavid.com/_posts/{$filename}", 'c+');
				fwrite($fh, $contents);
			}
		}
	}