const table = [
    'M', 'Arden', '21', 1, 1,
    'F', 'Angel', '20', 18, 1,
    'F', 'Stella', '21', 1, 2,
    'F', 'Janice', '21', 2, 2,
    'F', 'Zelda', '20', 13, 2,
    'F', 'Gloria', '20', 14, 2,
    'M', 'Dhenny', '21', 15, 2,
    'M', 'Steven', '20', 16, 2,
    'F', 'Briana', '21', 17, 2,
    'M', 'Billy', '21', 18, 2,
    'F', 'Jane', '21', 1, 3,
    'M', 'Nikolas', '20', 2, 3,
    'M', 'Miguel', '21', 13, 3,
    'F', 'Junika', '22', 14, 3,
    'M', 'Gilbert', '21', 15, 3,
    'F', 'Vania', '21', 16, 3,
    'F', 'Evelyn', '21', 17, 3,
    'M', 'Izzat', '23', 18, 3,
    'F', 'Maria', '21', 1, 4,
    'M', 'Samuel', '21', 2, 4,
    'M', 'Raedi', '27', 3, 4,
    'M', 'Adiya', '26', 4, 4,
    'M', 'Elmer', '21', 5, 4,
    'F', 'Jesslyn', '21', 6, 4,
    'F', 'Michelline', '21', 7, 4,
    'M', 'Valiant', '20', 8, 4,
    'M', 'Pablo', '21', 9, 4,
    'F', 'Victoria', '23', 10, 4,
    'F', 'Cindy', '26', 11, 4,
    'F', 'Dhevanlie', '21', 12, 4,
    'F', 'Gisela', '20', 13, 4,
    'M', 'Kenry', '21', 14, 4,
    'M', 'Christopher', '21', 15, 4,
    'M', 'Mark', '22', 16, 4,
    'F', 'Alda', '21', 17, 4,
    'F', 'Khezia', '21', 18, 4,
    'M', 'David', '20', 1, 5,
    'M', 'Willy', '21', 2, 5,
    'F', 'Michelle', '20', 3, 5,
    'F', 'Grace', '21', 4, 5,
    'M', 'Irwan', '46', 5, 5,
    'M', 'Wandy', '44', 6, 5,
    'M', 'Sandy', '43', 7, 5,
    'F', 'Elvina', '43', 8, 5,
    'M', 'Ardy', '66', 9, 5,
    'F', 'Verina', '30', 10, 5,
    'F', 'Widy', '35', 11, 5,
    'M', 'Gian', '39', 12, 5,
    'F', 'Debby', '31', 13, 5,
    'F', 'Celina', '15', 14, 5,
    'F', 'Angelica', '16', 15, 5,
    'F', 'Jennifer', '20', 16, 5,
    'M', 'Wempy', '47', 17, 5,
    'M', 'Geraldy', '21', 18, 5,
    'M', 'Mika', '21', 1, 6,
    'F', 'Faith', '20', 2, 6,
    'F', 'Ariel', '21', 4, 9,
    'M', 'Gregorio', '21', 5, 9,
    'M', 'Bryan', '21', 6, 9,
    'M', 'Ichiro', '21', 7, 9,
    'F', 'Vanesya', '20', 8, 9,
    'F', 'Mellyana', '21', 9, 9,
    'F', 'Jeannette', '21', 10, 9,
    'M', 'Dicky', '21', 11, 9,
    'M', 'Jay', '21', 12, 9,
    'F', 'Stevie', '20', 13, 9,
    'M', 'Felix', '21', 14, 9,
    'M', 'Alfred', '22', 15, 9,
    'F', 'Gaby', '21', 16, 9,
    'M', 'Harold', '33', 17, 9,
    'M', 'Albert', '22', 18, 9,
    'F', 'Avelia', '21', 4, 6,
    'F', 'Patricia', '20', 5, 6,
    'F', 'Amanda', '20', 6, 6,
    'M', 'Gabriel', '21', 7, 6,
    'M', 'Rizky', '21', 8, 6,
    'F', 'Nadya', '20', 9, 6,
    'F', 'Gabriella', '20', 10, 6,
    'M', 'Mika', '20', 11, 6,
    'F', 'Putri', '21', 12, 6,
    'M', 'Aldy', '21', 13, 6,
    'M', 'Adrian', '21', 14, 6,
    'F', 'Trixie', '20', 15, 6,
    'F', 'Marshella', '21', 16, 6,
    'F', 'Felycia', '21', 17, 6,
    'M', 'Owen', '21', 18, 6,
    'M', 'Victor', '22', 1, 7,
    'M', 'Michael', '20', 2, 7,
    'M', 'Putra', '21', 4, 10,
    'F', 'Brigita', '20', 5, 10,
    'F', 'Andini', '21', 6, 10,
    'F', 'Felisha', '21', 7, 10,
    'M', 'Kevin', '24', 8, 10,
    'F', 'Felin', '21', 9, 10,
    'F', 'Meisya', '21', 10, 10,
    'M', 'Aditya', '22', 11, 10,
    'M', 'Bagus', '21', 12, 10,
    'M', 'Leonardo', '22', 13, 10,
    'F', 'Clarissa', '21', 14, 10,
    'F', 'Priska', '21', 15, 10,
    'M', 'Christian', '21', 16, 10,
    'F', 'Natalie', '21', 17, 10,
    'M', 'Rowen', '21', 18, 10,
    'F', 'Catherine', '20', 4, 7,
    'F', 'Sherin', '20', 5, 7,
    'M', 'Reynaldy', '21', 6, 7,
    'F', 'Jasmine', '22', 7, 7,
    'F', 'Howard', '21', 8, 7,
    'M', 'Reynard', '21', 9, 7,
    'M', 'Richard', '22', 10, 7,
    'F', 'Aliya', '20', 11, 7,
    'F', 'Nikita', '20', 12, 7,
    'M', 'Reynaldo', '21', 13, 7,
    'M', 'Fauzi', '21', 14, 7,
    'F', 'Genesia', '21', 15, 7,
    'F', 'Grizelda', '20', 16, 7,
    'M', 'Rafael', '22', 17, 7,
    'M', 'Chrisvito', '21', 18, 7
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [], cone: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table

    for ( let i = 0; i < table.length; i += 5 ) {

        const element = document.createElement( 'div' );
        element.className = 'element';
        if ( table[i] == 'M' ) {
            element.style.backgroundColor = 'rgba(65,105,225,0.5)';
        } else {
            element.style.backgroundColor = 'rgba(255,193,203,0.5)';
        }

        const number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = ( i / 5 ) + 1;
        element.appendChild( number );

        const symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        element.appendChild( symbol );

        const details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        element.appendChild( details );

        const objectCSS = new THREE.CSS3DObject( element );
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;
        scene.add( objectCSS );

        objects.push( objectCSS );

        //

        const object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

        targets.table.push( object );

    }

    // sphere

    const vector = new THREE.Vector3();

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

        const phi = Math.acos( - 1 + ( 2 * i ) / l );
        const theta = Math.sqrt( l * Math.PI ) * phi;

        const object = new THREE.Object3D();

        object.position.setFromSphericalCoords( 800, phi, theta );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.sphere.push( object );

    }

    // helix

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

        const theta = i * 0.175 + Math.PI;
        const y = - ( i * 8 ) + 450;

        const object = new THREE.Object3D();

        object.position.setFromCylindricalCoords( 900, theta, y );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.helix.push( object );

    }

    // grid

    for ( let i = 0; i < objects.length; i ++ ) {

        const object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

        targets.grid.push( object );

    }

    // cone

    for ( let i = 0, l = objects.length; i < l; i ++ ) {
        
        const x = i * 5;
        const theta = i * 4 + Math.PI;
        const y = - ( i * 12 ) + 450;

        const object = new THREE.Object3D();

        object.position.setFromCylindricalCoords( x, theta, y );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.cone.push( object );

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );

    const buttonTable = document.getElementById( 'table' );
    buttonTable.addEventListener( 'click', function () {

        transform( targets.table, 2000 );

    } );

    const buttonSphere = document.getElementById( 'sphere' );
    buttonSphere.addEventListener( 'click', function () {

        transform( targets.sphere, 2000 );

    } );

    const buttonHelix = document.getElementById( 'helix' );
    buttonHelix.addEventListener( 'click', function () {

        transform( targets.helix, 2000 );

    } );

    const buttonGrid = document.getElementById( 'grid' );
    buttonGrid.addEventListener( 'click', function () {

        transform( targets.grid, 2000 );

    } );

    const buttonCone = document.getElementById( 'cone' );
    buttonCone.addEventListener( 'click', function () {

        transform( targets.cone, 2000 );

    } );

    transform( targets.table, 2000 );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( let i = 0; i < objects.length; i ++ ) {

        const object = objects[ i ];
        const target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}