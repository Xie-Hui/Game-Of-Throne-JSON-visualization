var json = {
  "Game of Throne Houses": [
    {
      "name": "Starks",
      "wikiSuffix": "House_Stark",
      "people": [
        {
          "name": "Eddard \"Ned\" Stark",
          "description": "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
          "imageSuffix": "eddard-stark",
          "wikiSuffix": "Eddard_Stark"
        },
        {
          "name": "Benjen Stark",
          "description": "Brother of Eddard Stark - First ranger of the Night's Watch",
          "imageSuffix": "benjen-stark",
          "wikiSuffix": "Benjen_Stark"
        },
        {
          "name": "Robb Stark",
          "description": "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
          "imageSuffix": "robb-stark",
          "wikiSuffix": "Robb_Stark"
        }
      ]
    },



    {
      "name": "Lannisters",
      "wikiSuffix": "House_Lannister",
      "people": [
        {
          "name": "Tywin Lannister",
          "description": "Lord of Casterly Rock - Warden of the West",
          "imageSuffix": "tywin-lannister",
          "wikiSuffix": "Tywin_Lannister"
        },
        {
          "name": "Tyrion Lannister",
          "description": "Son of Tywin Lannister - The Imp",
          "imageSuffix": "tyrion-lannister",
          "wikiSuffix": "Tyrion_Lannister"
        },
        {
          "name": "Jaime Lannister",
          "description": "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
          "imageSuffix": "jaime-lannister",
          "wikiSuffix": "Jaime_Lannister"
        },
        {
          "name": "Queen Cersei (Lannister) Baratheon",
          "description": "Married to King Robert Baratheon - Daughter of Tywin Lannister",
          "imageSuffix": "cersei-lannister",
          "wikiSuffix": "Cersei_Lannister"
        }
      ]
    },

    {
      "name": "Baratheons",
      "wikiSuffix": "House_Baratheon",
      "people": [
        {
          "name": "King Robert Baratheon",
          "description": "The first of his name - Lord of the Seven Kingdoms",
          "imageSuffix": "robert-baratheon",
          "wikiSuffix": "Robert_Baratheon"
        },
        {
          "name": "Stannis Baratheon",
          "description": "Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon",
          "imageSuffix": "stannis-baratheon",
          "wikiSuffix": "Stannis_Baratheon"
        },
        {
          "name": "Renly Baratheon",
          "description": "Lord of Storm's End - Master of Laws - Brother of Robert Baratheon",
          "imageSuffix": "renly-baratheon",
          "wikiSuffix": "Renly_Baratheon"
        },
        {
          "name": "Joffrey Baratheon",
          "description": "Heir to the Iron Throne - Son of Robert and Cersei Baratheon",
          "imageSuffix": "joffrey-baratheon",
          "wikiSuffix": "Joffrey_Baratheon"
        },
        {
          "name": "Tommen Baratheon",
          "description": "Son of Robert and Cersei Baratheon",
          "imageSuffix": "tommen-baratheon",
          "wikiSuffix": "Tommen_Baratheon"
        },
        {
          "name": "Myrcella Baratheon",
          "description": "Daughter of Robert and Cersei Baratheon",
          "imageSuffix": "myrcella-baratheon",
          "wikiSuffix": "Myrcella_Baratheon"
        }
      ]
    },

    {
      "name": "Targaryens",
      "wikiSuffix": "House_Targaryen",
      "people": [
        {
          "name": "Daenerys Targaryen",
          "description": "Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen \"The Mad King\"",
          "imageSuffix": "daenerys-targaryen",
          "wikiSuffix": "Daenerys_Targaryen"
        },
        {
          "name": "Viserys Targaryen",
          "description": "The Beggar King - Son of Aerys II Targaryen \"The Mad King\"",
          "imageSuffix": "viserys-targaryen",
          "wikiSuffix": "Viserys_Targaryen"
        }
      ]
    },

    {
      "name": "Greyjoys",
      "wikiSuffix": "House_Greyjoy",
      "people": [
        {
          "name": "Balon Greyjoy",
          "description": "Lord Reaper of Pyke - Head of House Greyjoy",
          "imageSuffix": "balon-greyjoy",
          "wikiSuffix": "Balon_Greyjoy"
        },
        {
          "name": "Theon Greyjoy",
          "description": "Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy",
          "imageSuffix": "theon-greyjoy",
          "wikiSuffix": "Theon_Greyjoy"
        },
        {
          "name": "Yara Greyjoy",
          "description": "Ironborn - Son of Balon Greyjoy",
          "imageSuffix": "yara-greyjoy",
          "wikiSuffix": "Yara_Greyjoy"
        }

      ]
    }
  ]
}


var camera, scene, renderer
var cameraDistance = 2500
var layout_Radius = 1500
var focusQueue = []

var objects = []
    targets_focus = []
    targets_away = []

    objects_depth = []
    objects_index = []
    objects_siblings = []

var sceneWebgl, rendererWebgl;

window.onload = function(){
    createCvElements()
    //setup();
    //animate();
}


function setup() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = cameraDistance;
    //cameraPositionQueue.push(camera)
	scene = new THREE.Scene();

    //vanishPt = new THREE.Vector3(0,0,-100);
    //camera.lookAt(vanishPt);


    createCvElements()

    renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );

    //createParticles();
}


function animate() {
    requestAnimationFrame( animate );
    TWEEN.update();
    render();
}

function render() {
    //particleUpdate();
    renderer.render( scene, camera );
    //rendererWebgl.render( sceneWebgl, camera );
    //cameraWander();
}

function transform(targetId, cameraTarget, duration){

    TWEEN.removeAll();

    new TWEEN.Tween( camera.position )
        .to({ x: cameraTarget.x, y: cameraTarget.y, z: cameraTarget.z }, duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

    //move camera to starting location
    for ( i = 0; i < objects.length; i++ ) {

        var target = [0,0,0]
        var object = objects[i]
        var cardName = object.element.classList[0]


        //console.log("className: ", cardName );
        //console.log("targetId: ", targetId );
        if ( cardName == targetId ) {

            //console.log(targets_focus[ cardName ]);
            target = targets_focus[ cardName ]

        }
        else {

            //console.log("Away: ", targets_away);
            //console.log(targets_away[ cardName ]);
            target = targets_away[ cardName ]

        }

        console.log("target!!!!!:", target);
        new TWEEN.Tween( object.position )
            .to({ x: target[0], y: target[1], z: target[2] }, duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
            .to( {}, duration * 2 )
            .onUpdate( render )
            .start();

}

function moveCamera( target, duration ) {

    TWEEN.removeAll();
    console.log("camera moving!!!");
    console.log("target: ", target);

    new TWEEN.Tween( camera.position )
        .to({ x: target.x, y: target.y, z: target.z }, duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

}

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};


//for current json data, create a DOM elemnt given parent node
/**
function createDOM(

    parentNode,
    JsonData = json,  //default
    depth = 0 //defult

) {

    var newContent = document.createElement("div")
    newContent.className = parentNode.className

    //if current dataset is array then create a serials items from it
    for (var key in JsonData) {

        console.log("key: ", key);
        var newNode = document.createElement("div")

        //console.log(key);
        if ( JsonData[key] instanceof Array ) {

            newNode.className = parentNode.className
            createDOM(newNode, JsonData[key], depth++ )

        } else {

            if ( JsonData[key] instanceof Object ) {

                if ( depth == 0 ) {

                    console.log("key: ", key);
                    console.log("data: ", JsonData[key]);
                    var newPortal = document.createElement("div")

                    newPortal.className = "portal"
                    newPortal.id = parentNode.className + "-" + key
                    newPortal.textContent = JsonData[ key ][ "name" ]

                    newContent.appendChild(newPortal)

                }


                newNode.className = parentNode.className + "-" + key

                createDOM(newNode, JsonData[key], depth++ )

            } else {

                newNode.className = key
                newNode.textContent = JsonData[ key ]

            }

        }

        newContent.appendChild(newNode)

    }

    //objects_depth[ newCard.className ]

    document.getElementById("container").appendChild(newContent)
    //create CSS object for current card
    //console.log("newCard: ", newCard);
    //var object = new THREE.CSS3DObject(newCard)
    //objects.push(object)

}
*/

function menu_total( JsonData ) {

    var total = 0

    for (var key in JsonData) {

        if ( JsonData[ key ] instanceof Object ) {

            total++

        }

    }

    return total

}

function createDOM() {

    var container = document.getElementById( "container" )

    //var menu_count = menu_total( json[] )
    var JsonData = json["Game of Throne Houses"]

    //the 1st level content container
    var newContent = document.createElement( "div" )
    newContent.className = "content-container"
    newContent.textContent = "Game of Thrones Houses"
    container.appendChild( newContent )

    //iterate through each 1st level entries, i.e. houses
    for ( var key_house in JsonData ) {

        var JsonData_house = JsonData[ key_house ]
        if ( JsonData_house instanceof Object ) {

            //for each house create a navigation portal
            //assign the id as house name to point to the next level people containers
            var newPortal = document.createElement( "div" )
            newPortal.className = "portal"
            newPortal.id = JsonData_house[ "name" ]
            newPortal.textContent = JsonData_house[ "name" ]
            container.appendChild( newPortal )

            ////extract people in current house
            var JsonData_people = JsonData_house["people"]
            console.log( "people: ", JsonData_people )

            //iterate through people
            for ( var key_people in JsonData_people ) {

                //for each person in current house create a container card
                //that has multiple iterms i.e. name, discription, ...
                var container_people = document.createElement( "div" )
                container_people.className = JsonData_house[ "name" ]

                var JsonData_person = JsonData_people[ key_people ]
                for ( var key_person in JsonData_person ) {

                    //on person card create items
                    var newNode = document.createElement( "div" )
                    newNode.className = key_person
                    newNode.textContent = JsonData_person[ key_person ]
                    container_people.appendChild( newNode )

                }

                container.appendChild( container_people )

            }

            ////

        }

    }

}


function getPosition_focus( depth, index, nodeTotal, centerPosition ) {

    var r = layout_Radius / (depth + 1) //radius depend on depth

    return([

        centerPosition[0] + r * Math.cos(Math.radians(index * 360 / nodeTotal)),  // x
        centerPosition[1] + r * Math.sin(Math.radians(index * 360 / nodeTotal)),  // y
        centerPosition[2] - (depth + 1) * cameraDistance / 10//z

    ])

}

function getPosition_away() {
    /*
    return(
         new THREE.Vector3(
             (Math.random() * 10000 + 10000) * (Math.random() > 0.5 ? 1: -1),
             (Math.random() * 10000 + 10000) * (Math.random() > 0.5 ? 1: -1),
             Math.random() * 5000 - 5000
         )
    )
    */
    return(
        [
            -200 + Math.random() * 500 - 250,
            Math.random() * 500 - 250,
            Math.random() * 100 - 50
        ]
    )
}

//create CSS objects recursively, the content is based on currentNode,
//the geo-location based on the parent node's location, current depth and index in the network
function config_CSSobjs() {

    //calculate the index, depth and number of siblings for each object
    var depth_count = []
    for ( var i = 0; i < objects_depth.length; i++ ) {

        var cardName = objects[i].element.classList[0]
        var depth = objects_depth[ cardName ]

        if ( depth_count[ depth ] ) {

            objects_index[ i ] = depth_count[ depth ]

        } else {

            depth_count[ depth ] = 0
            objects_index[ i ] = depth_count[ depth ]

        }

        depth_count[ depth ]++

    }

    var view_position = [cameraDistance, 0, 0]

    for (var i = 0; i < objects_depth.length; i++ ) {

        objects_siblings[ i ] = depth_count[ objects_depth[i] ]

        var object = objects[ i ]
        //console.log("object: ", object.element);
        //console.log("classLsit: ", object.element.classList[0]);
        var cardName = object.element.classList[0]
        console.log(cardName)
        //set target focus position
        targets_focus[ cardName ] = getPosition_focus( objects_depth[ i ], objects_index[ i ], objects_siblings[ i ], view_position )

        //set target away position
        targets_away[ cardName ] = getPosition_away()

        //console.log("position_focus: ", targets_focus[ i ]);
        //console.log("position_way: ", targets_away[ i ]);


        //add to threejs scene
        objects[ i ].position.x = targets_away[ cardName ][0]
        objects[ i ].position.y = targets_away[ cardName ][1]
        objects[ i ].position.z = targets_away[ cardName ][2]
        scene.add( objects[ i ] )

    }
    //console.log("focus: ", targets_focus);
    /**

    */
}

function cameraRollback() {

    var tmp = new THREE.Vector3(0, 0, cameraDistance)
    moveCamera( tmp, 1000 )

}

function createEvents() {


    //setup the default camera focus
    //var tmp = new THREE.Vector3(300, 0, cameraDistance)
    //focusQueue.push(tmp)

    var menus = document.getElementsByClassName("subMenu");
    //console.log("myButtons: ", btns);
    //console.log("objects: ", objects);

    for ( var menu of menus ) {

        //console.log("menu: ", menu);
        menu.addEventListener('click', function() {

            console.log("clicked!!!!")
            //console.log("menu: ", menu )
            var targetId = this.id
            console.log("targetId: ", targetId);


            //focusQueue.push(tmp)
            var tmp = new THREE.Vector3( cameraDistance, 0, cameraDistance )
            transform( targetId, tmp, 1000 )


        }, false);

    }

    //right click to go back to previous camera position
    document.addEventListener("mousedown", function(e) {
        //console.log(e); // you can inspect the click event

        if (e.which === 3) { // right click = 3, left click = 1

            //console.log("right click");
            //cameraRollback()
            var tmp = new THREE.Vector3(300, 0, cameraDistance)
            moveCamera( tmp, 1000 )

        }
    });

    //double click on screen
    document.addEventListener("dblclick", function() {

        //console.log("double cllick!");
        cameraRollback()

    })

    // prevent context menu show up
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

}

function createCvElements(){

    //tmp = document.createElement("div")
    //tmp.className = "root"
    //var container = document.getElementById( "container" )
    createDOM( )
    //console.log("objects: ", objects);
    //console.log("depth: ", objects_depth);
    //config_CSSobjs()

    //adding the event listeners
    //createEvents()



}
