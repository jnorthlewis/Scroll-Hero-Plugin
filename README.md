## How To Use:

### Step 1
Include jQuery and a link to the plugin at the bottom of your HTML document, before the last &lt;body&gt; tag.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script src="js/jquery.scrollHero.js"></script>
```

### Step 2
Copy the following code and paste it below your jQuery link. Alternatively, paste it into your .js file and add the link on your html. 

	<script>
	$(function() {
		$('.top').scrollHero({

		});
	});
	</script>

### Step 3
The default state is to blur on scroll. If you want it to darken or turn to grayscale, do the following:

&lt;script&gt;
	$(function() {
		$('.top').scrollHero({
			brightness: true
				OR
			grayscale: true
		});
	});
&lt;/script&gt;