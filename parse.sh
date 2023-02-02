echo "Welcome to the scanning files app for migration"
echo "Enter folder path to scan"
read answer
echo "Checking Node.js files..."
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
