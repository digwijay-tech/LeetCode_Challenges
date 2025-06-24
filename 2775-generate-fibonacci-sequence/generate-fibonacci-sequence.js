/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let current =0
    let next =1
    
    while(true){
      yield current;
      [current,next] =[next,current+next]
    }

};

//To me This is a new concept generator function and yield
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */