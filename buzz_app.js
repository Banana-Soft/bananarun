if (!buzz.isSupported()) {
            alert("Your browser is too old, time to update!");
        }
        
        
        var melody = new buzz.sound ( "http://lumberjacks.altervista.org/melodia", {
                formats: [ "ogg" ],
                autoload: "true",
                preload: "true",
                autoplay: "true"
            });
        
        
        
        var bgMusic = new buzz.sound( "http://lumberjacks.altervista.org/sottofondo", {
                formats: [ "ogg" ],
                autoload: "true",
                preload: "true",
                autoplay: "true"
            });
        
        var myGroup = new buzz.group([ bgMusic, melody ]);

        function play() {
            console.log('ciao');
            console.log(myGroup);
            myGroup.play();
    
        }
        
        function stop() {
            myGroup.stop();
        }
        
        function volumeOn() {
            melody.unmute();
            
        }
        
        function volumeOff() {
            melody.mute();
        }