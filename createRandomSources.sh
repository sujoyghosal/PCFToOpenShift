echo "Creating Node.js sample projects"
echo "How many projects do you want?"
read answer
low=2
high=9
i=0
j=0
rm -rf node-samples
dependencies=(http express mongodb fs cors body-parser socket.io bcrypt request)
mkdir node-samples
while [ "$i" -lt "$answer" ]
do
	#rand=$((low + RANDOM%(1+high-low)))
	rand=$((5000 + $RANDOM ))
	mkdir "node-samples/project$rand"
		#echo "const http = require(\"http\");">node-samples/project$rand/node-sample-code$rand.js
		#echo "const http = require(\"express\");">>node-samples/project$rand/node-sample-code$rand.js
		#echo "const http = require(\"mongodb\");">>node-samples/project$rand/node-sample-code$rand.js
		#echo "const http = require(\"fs\");">>node-samples/project$rand/node-sample-code$rand.js
		#echo "const http = require(\"cors\");">>node-samples/project$rand/node-sample-code$rand.js
		#echo "const http = require(\"body-parser\");">>node-samples/project$rand/node-sample-code$rand.js
		echo "const PORT = process.env.PORT || $rand;">>node-samples/project$rand/node-sample-code$rand.js
		deps_count=`echo $((low + RANDOM%(1+high-low)))`
		while [ $j -lt $deps_count ]
		do
			d=`echo ${dependencies[$j]}`
			echo "Index=$deps_count, element=$d"
			echo "const $d = require(\"$d\");">>node-samples/project$rand/node-sample-code$rand.js
			j=`expr $j + 1`
		done
		j=0
		var_count=`echo $((low + RANDOM%(1+high-low)))`
	while [ $j -lt $var_count ]
	do
		#a=$((low + RANDOM%(1+high-low)))
		a=$((2000 + $RANDOM ))
		echo "Project $i created"
		echo "const EXT_SVCURL$a = process.env.VCAP_URL$a || 'https://somesvc$a.example.com/getData';">>node-samples/project$rand/node-sample-code$rand.js
		echo "const DB_URL$a = process.env.DB_URL$a || 'https://somedb$a.example.com/getData';">>node-samples/project$rand/node-sample-code$rand.js
		j=`expr $j + 1`
	done
	j=0
	echo "http.createServer((req, res) => res.end(\"<h1>This is a NodeJS web app #$rand</h1>\")).listen(PORT, () => console.log('listening on http://localhost:\${PORT}'));">>node-samples/project$rand/node-sample-code$rand.js
	touch node-samples/project$rand/package.json
	echo "{">node-samples/project$rand/package.json
  	echo "\"name\": \"sample-node$rand\",">>node-samples/project$rand/package.json
  	echo "\"version\": \"0.0.0\",">>node-samples/project$rand/package.json
  	echo "\"description\": \"PCF to OpenShift Accelerator API\",">>node-samples/project$rand/package.json
  	echo "\"main\": \"sample-node$rand.js\",">>node-samples/project$rand/package.json
  	echo "\"scripts\": {">>node-samples/project$rand/package.json
    	echo "\"start\": \"node sample-node$rand.js\"">>node-samples/project$rand/package.json
  	echo "},">>node-samples/project$rand/package.json
  	echo "\"dependencies\": {">>node-samples/project$rand/package.json
  	echo "  \"@google-cloud/compute\": \"^3.7.0\",">>node-samples/project$rand/package.json
  	echo "  \"body-parser\": \"1.19.2\",">>node-samples/project$rand/package.json
  	echo "  \"cors\": \"2.8.5\",">>node-samples/project$rand/package.json
  	echo "  \"https\": \"1.0.0\",">>node-samples/project$rand/package.json
  	echo "  \"fs\": \"0.0.1-security\",">>node-samples/project$rand/package.json
  	echo "  \"express\": \"4.18.1\",">>node-samples/project$rand/package.json
  	echo "  \"http\": \"0.0.1-security\",">>node-samples/project$rand/package.json
  	echo "  \"mongodb\": \"4.11.0\",">>node-samples/project$rand/package.json
  	echo "  \"request\": \"2.88.2\",">>node-samples/project$rand/package.json
  	echo "  \"socket.io\": \"4.5.0\"">>node-samples/project$rand/package.json
  	echo "  }">>node-samples/project$rand/package.json
  	echo "  }">>node-samples/project$rand/package.json
	i=`expr $i + 1`
done
echo "Done"
