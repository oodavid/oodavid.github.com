888888888888 ,ad8888ba,   88888888ba,     ,ad8888ba,
     88     d8"'    `"8b  88      `"8b   d8"'    `"8b
     88    d8'        `8b 88        `8b d8'        `8b
     88    88          88 88         88 88          88
     88    88          88 88         88 88          88
     88    Y8,        ,8P 88         8P Y8,        ,8P
     88     Y8a.    .a8P  88      .a8P   Y8a.    .a8P
     88      `"Y8888Y"'   88888888Y"'     `"Y8888Y"'

    khan draw
		blog
		tweet to khan academy

    http://www.grgrdvrt.com/
    	Inspiration for oodavid.com

	Articles
		VSI Architecture
		VSI Politics
		"Kingmaker Chess"
			https://www.facebook.com/TheQueenDrinksTea/posts/10155800586850258?pnref=story
		Facebook AppEvents
		Gameclosure Review
		Gameclosure Contributions
		Lucion NexGen
		Floorplanner / BIM
		How Domino's Pizza influences NexGen

	Vote for Next Article
		Idea - have a "vote for my next article" system where people
		can vote for the next thing they want to me to write...

	Windows / OSX / Linux toggler (for code snippets)
		Use localStorage to store preference
		Release to GitHub

	
	SQLite for Mobile, Automatic Reconciliation
		Publish my SQLite library on github and shout about it.
		Reference titanium and whatnot.

	Dark Triad Business Management"
		Can we use Dark Triad traits in software management in bizzarre or interesting ways?
		The Dark Triad is a group of three personality traits: narcissism, Machiavellianism and psychopathy, all of which are interpersonally aversive.[1][2][3] The Dark Triad refers to three theoretically distinct but empirically overlapping personality constructs.[4][5] The term reflects the perception that these three diagnostic categories have at least some common underlying factors:[6][7]
		The narcissistic personality (in the clinical sense) is characterized by a grandiose self-view, a sense of entitlement, lack of empathy, and egotism. Some theories, such as those of Heinz Kohut, associate it with the protection of a radically weak, shamed, or damaged self.[8]
		The Machiavellian personality is characterized by manipulation and exploitation of others, with a cynical disregard for morality and a focus on self-interest and deception.[9]
		The psychopathic personality is characterized by impulsive thrill-seeking, and in its "primary" form by selfishness, callousness, lack of personal affect, superficial charm, and remorselessness.

	Embrace Those Errors
		Link my monitor to the embraceplus project
		I found them while looking for a way to link up the doorbell to lovely Roz

	How to update your password hashing algorithm on a LIVE server
		http://www.phptherightway.com/#password_hashing
		<p>Probably need a moment of downtime as you fiddle with your database, I have a few lines in my .htaccess that I can uncomment that routes traffic to a friendly maintenance page.</p>
		<p>I'd complete ALL steps on my DEV server, push LIVE (with maintenance page), patch LIVE DB, remove maintenance page.</p>
		<ul>
			<li>Add an extra column: password_old</li>
			<li>Copy over the current passwords: UPDATE `users` SET `password_old` = `password`;</li>
			<li>NULL the now master password column: UPDATE `users` SET `password` = NULL; (use an arbitrary string if using NOT NULL)</li>
			<li>Update your registration routine to use new algorithm</li>
			<li>Update your login routine to use old AND new algorithms, check both. If user.password == NULL, update to use new algorithm hash</li>
		</ul>
		<p>Run that set and you're in no worse a position than you WERE, however every login populates the new password hash.</p>
		<p>After an arbitrary amount of time, remove the old algorithm altogether (and the `password_old` column), add a new check to the login routine that says "if `password` is NULL, force the user to use the reset password form". For these guys fly it under the banner of "for added security"...</p>

	Prove you can program... Fizz-Buzz!
		<p>After reading &quot;Imran on Tech &gt; </span><a href="http://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/">Using Fizz-Buzz to Find Developers who Grok Coding</a>&quot; I felt the urge to quickly doodle a Fizz-Buzz program or two.</p>
		<p>For those who haven't jumped on that link I'll redact the article:</p>
		<blockquote>
			<p>People with Computer Science degrees fail at simple Programming tests - which makes it a bitch to hire someone decent.</p>
			<p>Separate the wheat from the chaff by asking them to program the childs game Fizz-Buzz for 1-100 on paper.</p>
		</blockquote>
		<p>He says that it should take a couple of minutes, and that he's seen senior coders take TEN to FIFTEEN minutes to do this. Personally I think this is a 1-minute task. So here goes...</p>
		<figure>
			<img alt="image" src="http://media.tumblr.com/66b9fab2196d6eeec0393d64bc6b2a57/tumblr_inline_mkq5q4ZK9s1qz4rgp.jpg" /></p>
		<p>1m 5s - not too bad, this is how I reckon it broke down</p>
		<ul>
			<li>5s - double check the rules: fizz=3, buzz=5</li>
			<li>15s - code the thing in my head</li>
			<li>45s - grab my archaic quill and realise that pens are bloody slow</li>
		</ul>
		<p>I think a better question might be &quot;given 15 minutes&quot; how many different ways could you write Fizz-Buzz...</p>

	Quit that Programming Language
		I love the Freakonomics book / blog / podcast and after listening to <a href="http://www.freakonomics.com/2011/09/30/the-upside-of-quitting-full-transcript/">this episode about quitting</a> I noticed that you can apply the same logic on a much smaller scale.
		While the podcast talks about "big quits" (your job, your religion, your marriage), I believe you can apply the idea to your working routine. This <a href="http://net.tutsplus.com/articles/general/language-war-php-vs-ruby-2/">nettuts article</a> that compares PHP with Ruby on Rails has two evangelists; Ryan Allen and Michael Wales, they both started coding with PHP at about the same time, however Ryan abondoned the PHP ship and picked up Ruby on Rails, Michael stuck at it. What I find interesting is that both argue almost the same points. Can it be that changing programming languages is... dare I say it... trivial?
		I think it is!
		Talk about Sunk Costs not being sunk, you still have your brain!

	I'm currently not accepting new projects
		talk about my workload and Lucion NexGen
		Link to this article from my homepage - but say "drop me a line anyhow"

	GitHub Pages - Getting started
		rehash the basics of setting up a blog
	GitHub Pages - For Your Clients? Madness!
		So you have a small client-site to work on?
		Not sure if you'll be the ongoing developer?
		GitHub makes sense! Give your client all the info they need for the next dev: HTML + CSS + JS + GIT
		They can use prose.io to manage their content
	GitHub Pages - Is really powerful!
		JS and CSS "includes"
		Posts, Tags, RSS
	Misc
		ASCII Fun
			http://www.asciiflow.com/
		Working with your Dad
	Finances
		How do you keep ontop of yours?
		Share an example spreadsheet (tweaked for awesomeness)
		Write your dream cashflow
	Beautiful things
		The story of how I proposed to Roz?
		The sushi ring