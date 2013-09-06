var bpm = 120;
var quantum_size = 0.25;
var animation_gap = 8;
var notes = [
    //beats 1-6.5 + 1/8
    {
        duration:(23.5 - animation_gap)
    },
    //beat 6
    {
        color:"red",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    //beat 7
    {
        color:"blue",
        duration:1
    },
    {
        color:"blue",
        duration:1
    },
    {
        color:"yellow",
        duration:1
    },
    {
        color:"blue",
        duration:1
    },
    //beat 8
    {
        color:"red",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    {
        color:"green",
        duration:1
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    //beat 9
    {
        color:"red",
        duration:1
    },
    {
        color:"yellow",
        duration:1
    },
    {
        color:"blue",
        duration:1
    },
    {
        color:"yellow",
        duration:1
    },
    //beat 10
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"green",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    //beat 11
    {
        color:"blue",
        duration:1
    },
    {
        color:"yellow",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    {
        duration:5
    },
    //beat 13
    {
        color:"green",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    {
        color:"green",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    //beat 14
    {
        color:"green",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    //beat 15
    {
        color:"blue",
        duration:2
    },
    {
        duration:1
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"green",
        duration:0.5
    },
    //beat 16
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"green",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    //beat 17
    {
        color:"yellow",
        duration:1
    },
    {
        color:"green",
        duration:1
    },
    {
        color:"blue",
        duration:1
    },
    {
        color:"red",
        duration:1
    },
    //beat 18-19
    {
        duration:8
    },
    //beat 20
    {
        color:"green",
        duration:1
    },
    {
        duration:2
    },
    {
        color:"red",
        duration:1
    },
    //beat 21
    {
        color:"green",
        duration:1
    },
    {
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"blue",
        duration:1
    },
    //beat 22
    {
        color:"green",
        duration:1
    },
    {
        duration:2
    },
    {
        color:"yellow",
        duration:1
    },
    //beat 23
    {
        color:"blue",
        duration:1
    },
    {
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"blue",
        duration:1
    },
    //beat 24
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        color:"red",
        duration:1
    },
    //beat 25
    {
        color:"green",
        duration:3
    },
    {
        color:"yellow",
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    //beat 26
    {
        color:"yellow",
        duration:2
    },
    {
        color:"red",
        duration:2
    },
    //beat 27
    {
        color:"yellow",
        duration:2
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"green",
        duration:0.25
    },
    {
        color:"blue",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"green",
        duration:0.25
    },
    {
        color:"blue",
        duration:0.25
    },
    //beat 28
    {
        color:"blue",
        duration:1
    },
    {
        duration:1
    },
    {
        color:"blue",
        duration:1
    },
    {
        duration:1
    },
    //beat 29
    {
        duration:4
    },
    //beat 30
    {
        duration:2
    },
    {
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    //beat 31
    {
        duration:2
    },
    {
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    {
        duration:0.5
    },
    {
        color:"red",
        duration:0.5
    },
    //beat 32
    {
        duration:2
    },
    {
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    {
        duration:0.5
    },
    {
        color:"green",
        duration:0.5
    },
    //beat 33
    {
        color:"blue",
        duration:0.25
    },
    {
        color:"green",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        duration:0.25
    },
    {
        color:"blue",
        duration:0.25
    },
    {
        color:"green",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        duration:0.25
    },
    {
        color:"blue",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        duration:0.25
    },
    {
        color:"blue",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        duration:0.25
    },
    //beat 34
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"yellow",
        duration:0.25
    },
    {
        color:"red",
        duration:0.25
    },
    {
        color:"green",
        duration:0.25
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        duration:0.5
    },
    {
        color:"blue",
        duration:0.5
    },
    {
        duration:0.5
    },
    
];