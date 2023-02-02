jsfiles=
pyfiles=
pyfilescount=
gofiles=
gofilescount=
rbfiles=
rbfilescount=
phpfiles=
phpfilescount=
email=$1
deps=
echo "Welcome to the Discovery app for migration"
echo "Enter folder path to scan"
read answer
echo "Checking Node.js files..."
jsjson={}
scan_array="["
find $answer -name *.js|grep -v node_modules>/tmp/jsout
if [ -s /tmp/jsout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		jsfiles="$jsfiles $line"
	done</tmp/jsout
	jsfilescount=`wc -l /tmp/jsout|awk '{print $1}'`
	echo "Found $jsfilescount JavaScript files"
	jsfiles=`jo -p -a "$jsfiles"`
	jsjson=`jo -p type=javascript files="$jsfiles" count=$jsfilescount email=$email`
	scan_array=$scan_array$jsjson
	echo "Sending JS details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$jsjson"
	echo ":)"
fi
echo "Checking Python files..."
pyjson={}
find $answer -name *.py>/tmp/pyout
if [ -s /tmp/pyout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		pyfiles="$pyfiles $line"
	done</tmp/pyout
	pyfilescount=`wc -l  /tmp/pyout|awk '{print $1}'`
	echo "Found $pyfilescount Python files"
	pyfiles=`jo -p -a "$pyfiles"`
	pyjson=`jo -p type=python files="$pyfiles" count=$pyfilescount email=$email`
	scan_array=$scan_array","$pyjson
	echo "Sending python details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$pyjson"
	echo ":)"
fi
echo "Checking Go files..."
gojson={}
find $answer -name *.go>/tmp/goout
if [ -s /tmp/goout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		gofiles="$gofiles $line"
	done</tmp/goout
	gofilescount=`wc -l /tmp/goout|awk '{print $1}'`
	echo "Found $gofilescount Go files"
	gofiles=`jo -p -a "$gofiles"`
	gojson=`jo -p type=Go files="$gofiles" count=$gofilescount email=$email`
	scan_array=$scan_array","$gojson
	echo "Sending Go details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$gojson"
	echo ":)"
fi
echo "Checking Ruby files..."
rubyjson={}
find $answer -name *.rb>/tmp/rbout
if [ -s /tmp/rbout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		rbfiles="$rbfiles $line"
	done</tmp/rbout
	rbfilescount=`wc -l /tmp/rbout|awk '{print $1}'`
	echo "Found $rbfilescount Ruby files"
	rbfiles=`jo -p -a "$rbfiles"`
	rubyjson=`jo -p type=ruby files="$rbfiles" count=$rbfilescount email=$email`
	scan_array=$scan_array","$rubyjson
	echo "Sending Ruby details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$rubyjson"
	echo ":)"
fi
echo "Checking PHP files..."
phpjson={}
find $answer -name *.php>/tmp/phpout
if [ -s /tmp/phpout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		phpfiles="$phpfiles $line"
	done</tmp/phpout
	phpfilescount=`wc -l /tmp/phpout|awk '{print $1}'`
	echo "Found $phpfilescount PHP files"
	phpfiles=`jo -p -a "$phpfiles"`
	phpjson=`jo -p type=php files="$phpfiles" count=$phpfilescount email=$email`
	scan_array=$scan_array","$phpjson
	echo "Sending PHP details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$phpjson"
	echo ":)"
fi
echo "Checking package.json files..."
pjjson={}
find $answer -name package.json|grep -v node_modules>/tmp/pjout
if [ -s /tmp/pjout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		pjfiles="$pjfiles $line"
	done</tmp/pjout
	pjfilescount=`wc -l /tmp/pjout|awk '{print $1}'`
	echo "Found $pjfilescount package.json files"
	pjfiles=`jo -p -a "$pjfiles"`
	pjjson=`jo -p type=package.json files="$pjfiles" count=$pjfilescount email=$email`
	scan_array=$scan_array","$pjjson
	echo "Sending package.json details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$pjjson"
	echo ":)"
fi
echo "Checking Java files..."
javajson={}
find $answer -name *.java >/tmp/javaout
if [ -s /tmp/javaout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		javafiles="$javafiles $line"
	done</tmp/javaout
	javafilescount=`wc -l /tmp/javaout|awk '{print $1}'`
	echo "Found $javafilescount Java files"
	javafiles=`jo -p -a "$javafiles"`
	javajson=`jo -p type=java files="$javafiles" count=$javafilescount email=$email`
	scan_array=$scan_array","$javajson
	echo "Sending Java details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$javajson"
	echo ":)"
fi
echo "Checking pom.xml files..."
pxjson={}
find $answer -name pom.xml >/tmp/pxout
if [ -s /tmp/pxout ] 
then
	while read line 
	do
		f=`echo $line|sed 's/^/"/g'|sed 's/$/",/g'`	
		f=`echo $f|sed 's/,$//'`
		pxfiles="$pxfiles $line"
	done</tmp/pxout
	pxfilescount=`wc -l /tmp/pxout|awk '{print $1}'`
	echo "Found $pxfilescount pom.xml files"
	pxfiles=`jo -p -a "$pxfiles"`
	pxjson=`jo -p type=pom.xml files="$pxfiles" count=$pxfilescount email=$email`
	scan_array=$scan_array","$pxjson
	echo "Sending pom.xml details to server"
#	curl --location --request POST 'http://localhost:5555/events/insert' \
#	--header 'Content-Type: application/json' \
#	--data-raw "$pxjson"
	echo ":)"
fi
scan_array=$scan_array"]"
#echo $scan_array
obj="{ \"email\": \"$email\", \"results\": $scan_array }"
echo $obj
curl --location --request POST 'http://localhost:5555/events/insert' \
	--header 'Content-Type: application/json' \
	--data-raw "$obj"