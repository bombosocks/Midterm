<?php
 $visitor  = $_POST['visitor'];
 $groupNum = $_POST['groupNum'];
 $vdate    = $_POST['vdate'];
 $place    = $_POST['fplace'];
 $rating   = $_POST['rating'];
 $destination_email = "INSERT YOUR OWN EMAIL ADDRESS";
$email_subject = "topic of individual project  - visitor Dave Wilcox";
$email_body = "Visitor name  $visitor\n";
$email_body .= "Group Size $groupNum\n";
$email_body .= "Date Visited=$vdate\n";
$email_body .= "Favorite Place $place ";
$email_body .= "\nRating -> $rating\n";
mail($destination_email, $email_subject, $email_body);
echo "Data Sent\n";
?>
