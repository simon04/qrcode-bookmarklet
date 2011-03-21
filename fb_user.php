<?php
$profile = str_replace('#','',$_REQUEST['profile']);
$graph = (strpos($profile, 'profile.php') !== false) ? '/'.substr($profile,strrpos($profile,'?id')) : substr($profile,strrpos($profile,'/'));

$graph = file_get_contents('http://graph.facebook.com'.$graph);


$user = json_decode($graph);

// break here and display error if user could not be read.
if (empty($user))
{
	die("cleanUp();alert('Must be on a facebook users profile page');");
}
?>
var html = '<h1 class="ginormousProfileName"><?php echo $user->name;?></h1>';
html += '<div class="uiComposerTopBorder" style="padding:5px 0;">';
<?php
$tbl = "<table cellspacing='0' cellpadding='5' style='width:100%;'>";
$tblrow = 'FFF';
foreach ($user as $key => $value)
{
	if ($key == 'name') {continue;}
	else if ($key != 'id') {$key = ucwords(str_replace('_',' ',$key));}

	if ($value == 'link') {$value = "<a href='$value'>$value</a>";}

	$tbl .= "<tr style='background:#$tblrow;'><td style='padding-right:10px;'>$key:</td><td>$value</td></tr>";
?>
<?php
	$tblrow = ($tblrow == 'EEE') ? 'FFF' : 'EEE';
}
$tbl .= '</table>';
?>
html += "<?php echo $tbl;?>";
html += '</div>';

doDetails(html);