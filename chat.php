<?php
	// report all Errors
	error_reporting(E_ALL);
	
	// Cross Origin
	header("Access-Control-Allow-Origin: *");
	
	// start the Session
	if( isset( $_GET["SessionID"] ) && $_GET["SessionID"] !== "" && preg_match('/^[a-zA-Z0-9]{26}$/', $_GET["SessionID"]) ) {
		session_id($_GET["SessionID"]);
	}
	session_start();

	if( !isset($_SESSION['clientName']) ){
		$_SESSION['clientName'] = "";
	}
	
	



	//unlink('chat.db');
	if ( $db = new SQLite3('chat.db') ){
		// first let the engine check table, and create it eventualy
        $db->query( 'CREATE TABLE IF NOT EXISTS chat (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, clientID varchar(26), createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, clientName varchar(60), content varchar(255) );' );
        // add new message
        if( isset( $_GET["content"] ) && isset( $_GET["action"] ) && $_GET["action"] == 'submit' ){
			$sql = "INSERT INTO chat ( clientID, clientName, content ) VALUES ( '".session_id()."', '".SQLite3::escapeString($_SESSION['clientName'])."', '".SQLite3::escapeString($_GET['content'])."' );";
			$statement = $db->exec( $sql );
			print json_encode( $db->querySingle( "SELECT * FROM chat WHERE ID=".$db->lastInsertRowID(), true ) );
			exit;
        }
        
        if( isset( $_GET["content"] ) && isset( $_GET["action"] ) && $_GET["action"] == 'set.clientName' ){
			$_SESSION['clientName'] = $_GET["content"];
        }
        
        
	} else { }
	
	
	$result = array( 
		'meta' => array(
			'clientID' => session_id(),
			'clientName' => $_SESSION['clientName']
		), 
		'chat' => array()
	);
	

	if( isset( $_GET["id"] ) && preg_match('/^[0-9]+$/', $_GET["id"] ) ){
		$query = $db->query( 'SELECT * from chat WHERE id >'.$_GET["id"] );
	} else {
		// get full chat history
		$query = $db->query( 'SELECT * from chat' );
	}
	while ( $message = $query->fetchArray( SQLITE3_ASSOC ) ){
	    array_push( $result['chat'], $message );
	}
	
	print json_encode( $result );
	
?>