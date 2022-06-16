<!DOCTYPE html>
<html>
<body>

<?php

$request = "https://api.64clouds.com/v1/getLiveServiceInfo?veid=630529&api_key=private_MTyVlXgQoj8MFutNbDCizVrt";
$serviceInfo = json_decode (file_get_contents ($request));
$datacenter =  ($serviceInfo->node_datacenter);


$bandwith =  ($serviceInfo->data_counter/1024/1024/1024);
$bandwith3 =  ($serviceInfo->data_counter/1024/1024/1024*0.33);
$left1 = 183-$bandwith3 ;

$successRate = floor(strval(($bandwith/550)*10000))/10000*100;
$result = $successRate.'%';

echo "当前数据中心: "; echo "$datacenter";
echo "<br />";
echo "<br />";

echo "本月使用率: "; echo "$result";
echo "<br />";
echo "<br />";


//echo "本月已用流量(GB): "; echo "$bandwith3";echo "<br />";
echo "本月已用流量: "; echo round($bandwith3,2);echo " GB";echo "<br />";

echo "本月剩余流量: ";echo round($left1,2);echo " GB";



?>

</body>
</html>