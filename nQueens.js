
var nQueens = function(n){

	var solutions = 0;

	var matrixInit = function(){
    var arr = [];
		for (var i = 0; i < n; i++){
			var column = [];
			for (var j = 0; j < n; j++){
				column.push(true);
			}
			arr.push(column);
		}
		return arr;
	};


	var eliminateSpaces = function(row, column, matrix){
	    var rightDiff = column - row;
	    var leftDiff = column + row;
		    
		for (var i = row; i < n; i++){
		    
		    if ((leftDiff - i) >= 0){
		        matrix[i][leftDiff- i] = false;   
		    }
		    if((rightDiff + i) < n){
		        
		       matrix[i][rightDiff + i] = false; 
		    }
			matrix[i][column]= false;
		}
	};
		
	var boardCopy = function(board){
	    var dupBoard = [];
	    for (var i = 0; i < board.length; i++){
	        dupBoard.push(board[i].slice());
	    }
	    
	    return dupBoard;
	};
	

	var addQueen = function(currRow, board){

		var row = currRow || 0;
		board = board || matrixInit();
		var snapShot = boardCopy(board);
		
		
		for (var i = 0; i < n; i++){
			if(snapShot[row][i]){
				if (row === (n-1)){
					solutions++;
				} else{	
				    
					var matrix = boardCopy(snapShot);
					
					eliminateSpaces(row, i, matrix);
					addQueen(row +1, matrix);
				}
			} 
		}
		
	};
	addQueen();
	return solutions;
};