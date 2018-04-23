<div>
	<ul>
		<?php foreach ($list as $key => $value) { ?>
		<li><a href="index.php?page=details&id=<?php echo $key ?>"><?php echo $value; ?></a></li>
		<?php	
		}
		?>
	</ul>
</div>